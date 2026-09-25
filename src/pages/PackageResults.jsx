import { Link, useLocation, useParams } from 'react-router-dom'
import AddToFleetButton from '../components/AddToFleetButton'
import UnitPhoto from '../components/UnitPhoto'
import WorkCompare from '../components/WorkCompare'
import { batteryUnknownCount, getPackage } from '../data/package'
import { fleetUnitKey, useFleetPick } from '../lib/fleetPick'
import { currentWorkVehicle, displayWorkSpec } from '../lib/workSpec'

const DAY_NEED = {
  'under-60': 'Under 60 mi',
  '80-120': '80–120 mi',
  '120-180': '120–180 mi',
  '180+': '180+ mi',
  mixed: 'Mixed day',
}

function dayNeedLabel(pkg, intake) {
  if (intake?.dailyMiles && DAY_NEED[intake.dailyMiles]) {
    return DAY_NEED[intake.dailyMiles]
  }
  const fromNote = String(pkg.workDayNote || '').match(/(\d+[–-]\d+\s*mi)/i)
  if (fromNote) return fromNote[1].replace('-', '–')
  if (/trailer/i.test(pkg.workDayNote || '')) return 'Trailer day'
  return null
}

function SpecChip({ label, field }) {
  return (
    <span className={`spec-chip ${field?.known ? 'is-known' : 'is-dash'}`}>
      {label} {field?.text || '—'}
    </span>
  )
}

function fleetSizeChip(intake, pkg) {
  if (!intake?.fleetSize || intake.fleetSize === 'not-surveyed') {
    return pkg.unitCount ? `Fleet size ${pkg.unitCount}` : 'Fleet size Not surveyed'
  }
  return `Fleet size ${intake.fleetSize}`
}

export default function PackageResults() {
  const { packageId } = useParams()
  const location = useLocation()
  const intake = location.state?.intake
  const pkg = getPackage(packageId)
  const fleet = useFleetPick()

  if (!pkg) {
    return (
      <div className="locked-page">
        <p>Package not found.</p>
        <Link to="/intake">Back to intake</Link>
      </div>
    )
  }

  const current = currentWorkVehicle(intake, pkg)
  const unitNavState = location.state
  const selectedInPackage = pkg.units.filter((unit) => fleet.has(fleetUnitKey(pkg.id, unit.id))).length
  const unknownBatt = batteryUnknownCount(pkg)
  const dayNeed = dayNeedLabel(pkg, intake)
  const compareCandidates = pkg.units.map((unit) => ({
    id: unit.id,
    pickId: fleetUnitKey(pkg.id, unit.id),
    kicker: 'Candidate EV',
    heading: `${unit.year} ${unit.make} ${unit.model} ${unit.trim}`,
    role: unit.role,
    spec: displayWorkSpec(unit),
    bodyType: unit.bodyType,
  }))

  return (
    <div className="locked-page package-page">
      <nav className="locked-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/intake">Fleet intake</Link>
        <span aria-hidden="true"> / </span>
        <span>Package</span>
      </nav>

      <header className="match-header">
        <p className="match-kicker">
          {pkg.path} · {pkg.unitCount} units · DEMO
        </p>
        <h1 className="match-title">{pkg.headline}</h1>
        <div className="spec-chips match-header-chips">
          <span className="spec-chip is-known">Trade {pkg.trade}</span>
          <span className="spec-chip is-known">{pkg.unitCount} units</span>
          {dayNeed ? <span className="spec-chip is-known">Day {dayNeed}</span> : null}
          <span className="spec-chip is-dash">Trade-in {pkg.tradeIn.status}</span>
        </div>
        <div className="spec-chips">
          <span className="spec-chip is-dash">
            Battery {unknownBatt === pkg.unitCount ? '—' : `${pkg.unitCount - unknownBatt}/${pkg.unitCount}`}
          </span>
          <span className="spec-chip is-dash">Recalls —</span>
          <span className="spec-chip is-known">{fleetSizeChip(intake, pkg)}</span>
        </div>
      </header>

      <WorkCompare
        current={current}
        candidates={compareCandidates}
        title="Fit next to your current work vehicle"
      />

      <section aria-labelledby="units-title">
        <h2 id="units-title" className="package-units-title">Units</h2>
        <ul className="package-unit-grid">
          {pkg.units.map((unit, index) => {
            const spec = displayWorkSpec(unit)
            return (
              <li key={unit.id} className="package-unit-card is-dense">
                <UnitPhoto unit={unit} packageId={pkg.id} size="card" showAsk />
                <p className="package-unit-role">Unit {index + 1} · {unit.role}</p>
                <Link
                  to={`/package/${pkg.id}/unit/${unit.id}`}
                  state={unitNavState}
                  className="package-unit-name"
                >
                  {unit.year} {unit.make} {unit.model}
                </Link>
                <p className="package-unit-meta">
                  {unit.mileage.toLocaleString()} mi
                  {' · '}
                  {unit.bodyType === 'van' ? 'EV van' : 'EV truck'}
                </p>
                <div className="spec-chips">
                  <SpecChip label="Payload" field={spec.payload} />
                  <SpecChip label="Bed" field={spec.bed} />
                  <span className={`spec-chip ${spec.energy.known ? 'is-known' : 'is-dash'}`}>
                    {spec.energy.text}
                  </span>
                </div>
                <div className="package-unit-actions">
                  <AddToFleetButton pickId={fleetUnitKey(pkg.id, unit.id)} size="btn-block" />
                  <Link
                    to={`/package/${pkg.id}/unit/${unit.id}`}
                    state={unitNavState}
                    className="package-open-link"
                  >
                    Open
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <p className="package-fee-quiet">Fee at checkout — amount TBD</p>
      <p className="package-tradein-quiet">Trade-in: {pkg.tradeIn.status}</p>

      <div className="package-cta-bar">
        <p className="package-fleet-count">
          {selectedInPackage} of {pkg.unitCount} in fleet
        </p>
        <Link to="/intake?adjust=1" className="btn btn-sm">
          Adjust mix
        </Link>
      </div>

      <p className="locked-foot-note">
        FleetFit has not seen these trucks · we do not hold vehicle funds
      </p>
    </div>
  )
}
