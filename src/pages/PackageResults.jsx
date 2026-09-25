import { Link, useLocation, useParams } from 'react-router-dom'
import AddToFleetButton from '../components/AddToFleetButton'
import SavingsLine from '../components/SavingsLine'
import UnitPhoto from '../components/UnitPhoto'
import WorkCompare from '../components/WorkCompare'
import WorkSpecRows from '../components/WorkSpecRows'
import {
  batteryUnknownCount,
  getPackage,
  packageStickerSum,
} from '../data/package'
import { batteryConfidenceFromUnit } from '../lib/battery'
import { fleetUnitKey, useFleetPick } from '../lib/fleetPick'
import { formatMoney } from '../lib/fit'
import { currentWorkVehicle, displayWorkSpec } from '../lib/workSpec'

function BodyGlyph({ type }) {
  return (
    <span className={`package-body-glyph is-${type}`} aria-hidden="true">
      {type === 'van' ? 'EV VAN' : 'EV TRUCK'}
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

  const sticker = packageStickerSum(pkg)
  const unknownBatt = batteryUnknownCount(pkg)
  const askParts = pkg.units.map((u) => formatMoney(u.askPrice)).join(' + ')
  const current = currentWorkVehicle(intake, pkg)
  const unitNavState = location.state
  const selectedInPackage = pkg.units.filter((unit) => fleet.has(fleetUnitKey(pkg.id, unit.id))).length
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

      <header className="locked-page-header">
        <p className="locked-eyebrow">
          {pkg.path} · package view · {pkg.unitCount} units · DEMO
        </p>
        <h1>{pkg.headline}</h1>
        <p className="locked-page-lead">{pkg.summary}</p>
        <div className="package-honesty" aria-label="Package notes">
          <span className="ev-chip">
            Battery health not on file for {unknownBatt} of {pkg.unitCount}
          </span>
          <span className="ev-chip">Recalls unchecked per stock ID</span>
          <span className="ev-chip">{pkg.statedCountNote}</span>
        </div>
        <SavingsLine source={pkg} className="savings-line-package" />
        <p className="locked-disclaimer">
          Composite anonymized example for public preview. Not a real shop.
          Listing asks only — buyer’s fee is not shown on package screens.
          Fee at checkout — amount TBD.
        </p>
      </header>

      {intake && (
        <aside className="intake-echo" aria-label="Your intake">
          <h2 className="intake-echo-title">From your intake</h2>
          <dl className="intake-echo-grid">
            <div><dt>Trade</dt><dd>{intake.trade}</dd></div>
            <div>
              <dt>Fleet size</dt>
              <dd>{intake.fleetSize === 'not-surveyed' ? 'Not surveyed yet' : intake.fleetSize}</dd>
            </div>
            <div><dt>Region</dt><dd>{intake.region}</dd></div>
            <div><dt>Daily miles</dt><dd>{intake.dailyMiles}</dd></div>
          </dl>
        </aside>
      )}

      <div className="package-open-banner" role="status">
        <strong>Open on all units: </strong>
        {pkg.openOnPackage}
      </div>

      <section className="package-meta" aria-label="Package context">
        <p>{pkg.workDayNote}</p>
        <p className="locked-muted">{pkg.matchNote}</p>
      </section>

      <WorkCompare
        current={current}
        candidates={compareCandidates}
        title="How they fit next to your current work vehicle"
        lead="See how this EV matches the job your current work vehicle does — payload, bed / cab, tow, and energy side by side. A dash means we do not have that figure yet."
      />

      <section aria-labelledby="units-title">
        <h2 id="units-title" className="package-units-title">Units in this package</h2>
        <ul className="package-unit-grid">
          {pkg.units.map((unit, index) => (
            <li key={unit.id} className="package-unit-card">
              <UnitPhoto unit={unit} packageId={pkg.id} size="card" showAsk />
              <div className="package-unit-card-top">
                <BodyGlyph type={unit.bodyType} />
                <div className="package-unit-card-copy">
                  <p className="package-unit-role">
                    Unit {index + 1} · {unit.role}
                  </p>
                  <Link
                    to={`/package/${pkg.id}/unit/${unit.id}`}
                    state={unitNavState}
                    className="package-unit-name"
                  >
                    {unit.year} {unit.make} {unit.model} {unit.trim}
                  </Link>
                  <p className="package-unit-meta">
                    {unit.location.city}, {unit.location.state}
                  </p>
                </div>
                <div className="package-unit-card-price">
                  <div className="package-ask">{formatMoney(unit.askPrice)}</div>
                  {unit.cpo ? <span className="cpo-badge">CPO</span> : <span className="cpo-badge is-demo">DEMO</span>}
                </div>
              </div>
              <p className="package-unit-meta">
                {unit.mileage.toLocaleString()} mi
              </p>
              <p className="package-unit-meta">
                {unit.stockId}
                {unit.replaceNote ? ` · ${unit.replaceNote}` : ''}
              </p>
              <WorkSpecRows spec={displayWorkSpec(unit)} />
              <SavingsLine source={unit} />
              <div className="package-unit-chips">
                <span className="ev-chip">
                  {batteryConfidenceFromUnit(unit).label}
                </span>
              </div>
              <p className="package-fee-note">Fee at checkout — amount TBD</p>
              <div className="package-unit-actions">
                <Link
                  to={`/package/${pkg.id}/unit/${unit.id}`}
                  state={unitNavState}
                  className="btn btn-sm"
                >
                  Open unit
                </Link>
                <AddToFleetButton pickId={fleetUnitKey(pkg.id, unit.id)} size="btn-sm" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="package-panels">
        <section className="package-panel" aria-labelledby="sticker-title">
          <h2 id="sticker-title" className="package-panel-kicker">
            Package sticker sum
          </h2>
          <p className="package-sticker">{formatMoney(sticker)}</p>
          <p className="locked-muted">
            Sum of listed prices: {askParts}. {pkg.unitCount} franchise used units · multi-dealer close.
            No buyer’s fee $ or % on this screen.
          </p>
        </section>

        {pkg.newVsUsed ? (
          <section className="package-panel" aria-labelledby="newused-title">
            <h2 id="newused-title" className="package-panel-kicker">New vs used — labeled</h2>
            <dl className="package-compare">
              <div>
                <dt>{pkg.newVsUsed.usedLabel}</dt>
                <dd>
                  {formatMoney(sticker)}
                </dd>
              </div>
              <div>
                <dt>{pkg.newVsUsed.newLabel}</dt>
                <dd>{pkg.newVsUsed.newPriceLabel}</dd>
              </div>
            </dl>
            <p className="locked-muted">{pkg.newVsUsed.newDetail}</p>
          </section>
        ) : (
          <section className="package-panel" aria-labelledby="fitshort-title">
            <h2 id="fitshort-title" className="package-panel-kicker">At a glance</h2>
            <dl className="package-compare">
              {(pkg.fitShort || []).map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="locked-muted">{pkg.fitShortNote}</p>
          </section>
        )}
      </div>

      <section className="package-tradein" aria-label="Trade-in">
        <p>
          <strong>Trade-in: </strong>
          {pkg.tradeIn.status}. {pkg.tradeIn.detail}
        </p>
      </section>

      <p className="package-seen-banner" role="status">
        {pkg.sourcedNote}
      </p>

      <div className="package-cta-bar">
        <p className="package-fleet-count">
          {selectedInPackage} of {pkg.unitCount} in fleet — keep adding units, or remove any that do not belong.
        </p>
        <Link to="/intake?adjust=1" className="btn">
          Adjust mix
        </Link>
      </div>

      <p className="locked-foot-note">
        FleetFit has not seen these trucks in person. We do not hold vehicle funds.
        Buyer pays the seller / dealer. Fees are not displayed on this package screen.
      </p>
    </div>
  )
}
