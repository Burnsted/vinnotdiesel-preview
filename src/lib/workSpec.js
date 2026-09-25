import { LISTINGS } from '../data/listings'

/** Em dash for unknown work specs. Never invent payload / cab / bed / tow. */
export const DASH = '—'

function norm(value) {
  return String(value ?? '').trim().toLowerCase()
}

/**
 * Exact year + make + model + trim match only.
 * Nearby years or sibling trims are not borrowed.
 */
export function findExactListingMatch(unit) {
  if (!unit) return null
  return (
    LISTINGS.find(
      (listing) =>
        listing.year === unit.year &&
        norm(listing.make) === norm(unit.make) &&
        norm(listing.model) === norm(unit.model) &&
        norm(listing.trim) === norm(unit.trim),
    ) || null
  )
}

export function formatLb(value) {
  const n = Number(value)
  if (!Number.isFinite(n)) return DASH
  return `${n.toLocaleString()} lb`
}

export function formatCabBed(cab, bed) {
  const c = cab != null && String(cab).trim() ? String(cab).trim() : ''
  const b = bed != null && String(bed).trim() ? String(bed).trim() : ''
  if (c && b) return `${c} / ${b}`
  if (c) return c
  if (b) return b
  return DASH
}

function factField(raw, format) {
  if (raw == null || raw === '') {
    return { text: DASH, known: false }
  }
  const text = format ? format(raw) : String(raw)
  if (!text || text === DASH) return { text: DASH, known: false }
  return { text, known: true }
}

/** Work specs from an exact listing match, or em dashes. */
export function displayWorkSpec(unit) {
  const listing = findExactListingMatch(unit)
  if (!listing) {
    return {
      payload: { text: DASH, known: false },
      bed: { text: DASH, known: false },
      cab: { text: DASH, known: false },
      cabBed: { text: DASH, known: false },
      tow: { text: DASH, known: false },
      source: null,
    }
  }
  return {
    payload: factField(listing.payload, formatLb),
    bed: factField(listing.bed),
    cab: factField(listing.cab),
    cabBed: factField(formatCabBed(listing.cab, listing.bed)),
    tow: factField(listing.tow, formatLb),
    source: listing.id,
  }
}

/**
 * Current non-EV work vehicle for the compare moment.
 * Intake does not capture current-vehicle specs — placeholder role only.
 * Never invent payload / cab / bed / tow for the current column.
 */
export function currentWorkVehicle(intake, pkg) {
  const trade = intake?.trade || pkg?.trade || ''
  let role = 'Lead van'
  if (trade.startsWith('Landscaping')) role = 'Trailer hauler'
  else if (trade === 'Electrical' || trade === 'HVAC' || trade === 'Plumbing') {
    role = 'Service van'
  } else if (trade) {
    role = 'Work truck'
  }

  const empty = { text: DASH, known: false }
  return {
    heading: 'Your current work vehicle',
    role,
    kind: 'Non-EV work vehicle',
    spec: {
      payload: empty,
      bed: empty,
      cab: empty,
      cabBed: empty,
      tow: empty,
      source: null,
    },
  }
}

/** Package + unit cards: payload · bed/cab · tow */
export const WORK_SPEC_ROWS = [
  { key: 'payload', label: 'Payload' },
  { key: 'cabBed', label: 'Bed / cab' },
  { key: 'tow', label: 'Tow' },
]

/** Compare moment: Steve product-bar row order */
export const COMPARE_SPEC_ROWS = [
  { key: 'payload', label: 'Payload' },
  { key: 'bed', label: 'Bed / capacity' },
  { key: 'cab', label: 'Cab' },
  { key: 'tow', label: 'Tow / pull' },
]
