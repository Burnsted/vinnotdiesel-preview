/**
 * Anonymized composite package for public preview.
 * Real shop concepts stay private — no real dealer VINs, no named shops.
 */

export const DEMO_PACKAGE = {
  id: 'pkg-tc-electrical-4',
  label: 'Treasure Coast electrical — ~4 service vans',
  summary:
    'Composite example for a small trade fleet (~4 vans) that needs matched used EVs for typical coastal service routes. Not a real shop.',
  region: 'Treasure Coast, FL',
  trade: 'Electrical',
  unitCount: 4,
  workDayNote: 'Typical day: 80–120 mi across coastal jobsites; overnight Level 2 at shop; occasional DC fast on longer runs.',
  matchNote:
    'Package matched from placeholder stock to the intake profile. Vehicle prices shown are listing asks only — buyer’s fee appears only at checkout.',
}

/**
 * Placeholder stock units — fake IDs only. No production VIN strings.
 * Free EV layer fields: battery, recall, chargingFit, tradeFit, fitScore.
 */
export const PACKAGE_UNITS = [
  {
    id: 'unit-a',
    stockId: 'STOCK-A01',
    year: 2023,
    make: 'Ford',
    model: 'E-Transit',
    trim: 'Cargo 250',
    mileage: 22100,
    location: { city: 'Stuart', state: 'FL' },
    askPrice: 38900,
    sellerType: 'dealer',
    sellerLabel: 'Regional commercial dealer (anonymized)',
    titleStatus: 'Clean',
    battery: {
      status: 'Not reported by dealer',
      soh: null,
      usableKwh: null,
      note: 'Ask for a pack health printout before travel.',
    },
    recall: {
      status: 'Placeholder',
      detail: 'VIN recall check not run in this preview — wire NHTSA lookup in production.',
    },
    chargingFit: {
      label: 'Fits shop L2',
      detail: '11.5 kW onboard · overnight L2 at shop covers a full work day for this route class.',
    },
    tradeFit: {
      label: 'Cargo van fit',
      detail: 'Low roof cargo volume suits ladder + wire stock; payload in the right band for electrical service.',
    },
    fitScore: {
      band: 'worth it if…',
      reason: 'Worth it if dealer supplies battery SOH and open recalls clear before deposit.',
    },
    openItems: [
      'Battery SOH not on file',
      'Confirm remaining factory warranty transfer',
      'Verify ladder-rack mounting points on this body',
    ],
    upfitNote: 'Empty cargo — upfit TBD by buyer.',
    description:
      'Placeholder cargo EV for a coastal electrical route. Listing ask only; fees not shown here.',
  },
  {
    id: 'unit-b',
    stockId: 'STOCK-B02',
    year: 2024,
    make: 'Chevrolet',
    model: 'Silverado EV',
    trim: 'WT',
    mileage: 9800,
    location: { city: 'Port St. Lucie', state: 'FL' },
    askPrice: 54900,
    sellerType: 'fleet',
    sellerLabel: 'Utility surplus (anonymized)',
    titleStatus: 'Clean',
    battery: {
      status: 'Reported',
      soh: 97,
      usableKwh: 205,
      note: 'Fleet surplus pack report on file (demo stub).',
    },
    recall: {
      status: 'Placeholder',
      detail: 'VIN recall check not run in this preview — wire NHTSA lookup in production.',
    },
    chargingFit: {
      label: 'Strong day range',
      detail: 'Long-range WT · shop L2 + rare DC fast covers 100+ mi service days with margin.',
    },
    tradeFit: {
      label: 'Service-body ready',
      detail: 'Crew cab WT with payload headroom for toolboxes and wire reels.',
    },
    fitScore: {
      band: 'worth it',
      reason: 'Strong match for longer coastal runs and heavier stock days.',
    },
    openItems: [
      'Confirm service-body lead time if not included',
      'PPI recommended before close',
    ],
    upfitNote: 'Spray liner only — commercial body not installed.',
    description:
      'Placeholder long-range work truck. Ask price only; VinNotDiesel has not inspected this unit.',
  },
  {
    id: 'unit-c',
    stockId: 'STOCK-C03',
    year: 2022,
    make: 'Ford',
    model: 'F-150 Lightning',
    trim: 'Pro',
    mileage: 36400,
    location: { city: 'Fort Pierce', state: 'FL' },
    askPrice: 35900,
    sellerType: 'dealer',
    sellerLabel: 'Volume EV dealer (anonymized)',
    titleStatus: 'Clean',
    battery: {
      status: 'Not reported by dealer',
      soh: null,
      usableKwh: 98,
      note: 'Usable pack size known from trim; SOH not reported.',
    },
    recall: {
      status: 'Placeholder',
      detail: 'VIN recall check not run in this preview — wire NHTSA lookup in production.',
    },
    chargingFit: {
      label: 'Tight on long days',
      detail: 'Pro range class · overnight L2 OK; plan DC fast if the day stretches past ~180 mi.',
    },
    tradeFit: {
      label: 'Pickup workhorse',
      detail: 'Pro Power Onboard helps jobsite tools; bed needs rack + boxes.',
    },
    fitScore: {
      band: 'worth it if…',
      reason: 'Worth it if SOH clears 90%+ and mileage comps hold after PPI.',
    },
    openItems: [
      'Battery SOH not reported by dealer',
      'Tire wear unknown',
      'Upfit not included',
    ],
    upfitNote: 'Stock bed — buyer upfit.',
    description:
      'Placeholder Lightning Pro. Higher miles; free EV layer flags missing battery data.',
  },
  {
    id: 'unit-d',
    stockId: 'STOCK-D04',
    year: 2023,
    make: 'Ram',
    model: 'ProMaster EV',
    trim: 'Cargo',
    mileage: 15200,
    location: { city: 'Vero Beach', state: 'FL' },
    askPrice: 41200,
    sellerType: 'dealer',
    sellerLabel: 'Van specialist (anonymized)',
    titleStatus: 'Clean',
    battery: {
      status: 'Not reported by dealer',
      soh: null,
      usableKwh: null,
      note: 'Dealer has not uploaded pack health.',
    },
    recall: {
      status: 'Placeholder',
      detail: 'VIN recall check not run in this preview — wire NHTSA lookup in production.',
    },
    chargingFit: {
      label: 'Needs shop L2',
      detail: 'Cargo EV · overnight charge assumed; verify depot circuit before package commit.',
    },
    tradeFit: {
      label: 'Van volume',
      detail: 'Standing height for shelving; good for wire / fixture stock.',
    },
    fitScore: {
      band: 'not enough data',
      reason: 'Pass / hold until battery report and depot charging capacity are confirmed.',
    },
    openItems: [
      'Battery SOH missing',
      'Depot L2 circuit capacity unknown',
      'Shelving fit not verified',
    ],
    upfitNote: 'Empty cargo — shelving TBD.',
    description:
      'Placeholder cargo van. Fit score blocked on missing battery + charging diligence.',
  },
]

export function getUnit(id) {
  return PACKAGE_UNITS.find((u) => u.id === id)
}

export const FIT_SCORE_BANDS = [
  'worth it',
  'worth it if…',
  'pass',
  'not enough data',
]
