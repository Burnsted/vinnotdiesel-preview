import { Link, useLocation, useParams } from 'react-router-dom'
import AddToFleetButton from '../components/AddToFleetButton'
import UnitPhoto from '../components/UnitPhoto'
import WorkCompare from '../components/WorkCompare'
import { getPackage } from '../data/package'
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
    <span className={`spec-chip ${field.known ? 'is-known' : 'is-dash'}`}>
      {label} {field.text}
    </span>
  )
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
          {pkg.trade}
          {` · ${pkg.unitCount} units`}
          {dayNeed ? ` · ${dayNeed}` : ''}
          {` · Trade-in ${pkg.tradeIn.status}`}
        </p>
        <h1 className="match-title">{pkg.label}</h1>
      </header>

      <WorkCompare
        current={current}
        candidates={compareCandidates}
        title="Vs your current work vehicle"
      />

      <section aria-labelledby="units-title">
        <h2 id="units-title" className="package-units-title">Units</h2>
        <ul className="package-unit-grid">
          {pkg.units.map((unit) => {
            const spec = displayWorkSpec(unit)
            return (
              <li key={unit.id} className="package-unit-card is-dense">
                <UnitPhoto unit={unit} packageId={pkg.id} size="card" showAsk />
                <p className="package-unit-role">{unit.role}</p>
                <Link
                  to={`/package/${pkg.id}/unit/${unit.id}`}
                  state={unitNavState}
                  className="package-unit-name"
                >
                  {unit.year} {unit.make} {unit.model} {unit.trim}
                </Link>
                <div className="spec-chips">
                  <SpecChip label="Payload" field={spec.payload} />
                  <SpecChip label="Energy" field={spec.energy} />
                </div>
                <div className="package-unit-actions">
                  <AddToFleetButton pickId={fleetUnitKey(pkg.id, unit.id)} size="btn-sm" />
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <div className="package-cta-bar">
        <p className="package-fleet-count">
          {selectedInPackage} of {pkg.unitCount} in fleet
        </p>
        <Link to="/intake?adjust=1" className="btn btn-sm">
          Adjust mix
        </Link>
      </div>

      <p className="locked-foot-note">Not a real shop · fee at checkout TBD</p>
    </div>
  )
}
