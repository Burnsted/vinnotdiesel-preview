import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LISTINGS, distanceFromHome } from '../data/listings'
import FilterSidebar, { DEFAULTS } from '../components/FilterSidebar'
import ListingCard from '../components/ListingCard'

const SORTS = [
  { id: 'newest', label: 'Newest listed' },
  { id: 'price-asc', label: 'Price: low → high' },
  { id: 'price-desc', label: 'Price: high → low' },
  { id: 'mileage', label: 'Mileage: low → high' },
  { id: 'range', label: 'Range: high → low' },
  { id: 'soh', label: 'SOH: high → low' },
  { id: 'closest', label: 'Closest (WPB, FL)' },
]

function num(v) {
  if (v === '' || v == null) return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

function applyFilters(listings, filters, q) {
  const query = (q || '').trim().toLowerCase()
  return listings.filter((l) => {
    if (query) {
      const hay = [
        l.year, l.make, l.model, l.trim, l.location.city, l.location.state,
        l.upfitDescription, ...(l.upfitTags || []), l.sellerType, l.vin,
      ].join(' ').toLowerCase()
      if (!hay.includes(query)) return false
    }

    const priceMax = num(filters.priceMax)
    if (priceMax != null) {
      if (l.allInPrice == null) return false
      if (l.allInPrice > priceMax) return false
    }

    if (filters.make && l.make !== filters.make) return false
    if (filters.model) {
      const m = filters.model.toLowerCase()
      if (!`${l.model} ${l.trim}`.toLowerCase().includes(m)) return false
    }

    const yearMin = num(filters.yearMin)
    const yearMax = num(filters.yearMax)
    if (yearMin != null && l.year < yearMin) return false
    if (yearMax != null && l.year > yearMax) return false

    const mileageMax = num(filters.mileageMax)
    if (mileageMax != null && l.mileage > mileageMax) return false

    const rangeMin = num(filters.rangeMin)
    if (rangeMin != null && l.ratedRange < rangeMin) return false

    const sohMin = num(filters.sohMin)
    if (sohMin != null) {
      if (l.soh == null) return false
      if (l.soh < sohMin) return false
    }

    const payloadMin = num(filters.payloadMin)
    if (payloadMin != null && l.payload < payloadMin) return false

    if (filters.cabBed) {
      const key = `${l.cab} / ${l.bed}`
      if (key !== filters.cabBed) return false
    }

    if (filters.awdOnly && !l.awd) return false

    if (filters.upfitTags.length) {
      if (!filters.upfitTags.every((t) => l.upfitTags.includes(t))) return false
    }

    const wMin = num(filters.warrantyMonthsMin)
    if (wMin != null && l.warrantyBatteryMonths < wMin) return false

    const chMin = num(filters.chargerKwMin)
    if (chMin != null && l.onboardChargerKw < chMin) return false

    if (filters.sellerType && l.sellerType !== filters.sellerType) return false

    if (filters.transparentOnly) {
      if (!l.feesKnown || l.allInPrice == null) return false
    }

    return true
  })
}

function sortListings(listings, sort) {
  const arr = [...listings]
  switch (sort) {
    case 'newest':
      return arr.sort((a, b) => a.listedDaysAgo - b.listedDaysAgo)
    case 'price-asc':
      return arr.sort((a, b) => (a.allInPrice ?? 1e12) - (b.allInPrice ?? 1e12))
    case 'price-desc':
      return arr.sort((a, b) => (b.allInPrice ?? -1) - (a.allInPrice ?? -1))
    case 'mileage':
      return arr.sort((a, b) => a.mileage - b.mileage)
    case 'range':
      return arr.sort((a, b) => b.ratedRange - a.ratedRange)
    case 'soh':
      return arr.sort((a, b) => (b.soh ?? -1) - (a.soh ?? -1))
    case 'closest':
      return arr.sort((a, b) => distanceFromHome(a) - distanceFromHome(b))
    default:
      return arr
  }
}

export default function Browse() {
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  const [filters, setFilters] = useState({ ...DEFAULTS })
  const [sort, setSort] = useState('newest')
  const [filtersOpen, setFiltersOpen] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const apply = () => setFiltersOpen(!mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const results = useMemo(() => {
    const filtered = applyFilters(LISTINGS, filters, q)
    return sortListings(filtered, sort)
  }, [filters, q, sort])

  return (
    <div className="browse-layout">
      <button
        type="button"
        className="btn filters-drawer-toggle"
        onClick={() => setFiltersOpen((o) => !o)}
      >
        {filtersOpen ? 'Hide filters' : 'Show filters'}
      </button>

      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />

      <section>
        <div className="results-toolbar">
          <div className="results-count">
            <strong>{results.length}</strong> of {LISTINGS.length} trucks
            {q ? <> matching “{q}”</> : null}
          </div>
          <div className="sort-wrap">
            <label htmlFor="sort">Sort</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="empty-state">
            <p>No trucks match these filters.</p>
            <p style={{ fontSize: '0.85rem' }}>Try lowering SOH min, payload, or clearing transparent pricing.</p>
          </div>
        ) : (
          <div className="listing-grid">
            {results.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
