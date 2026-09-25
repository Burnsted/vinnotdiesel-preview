import { Link, useLocation, useParams } from 'react-router-dom'
import { DEMO_PACKAGE, PACKAGE_UNITS } from '../data/package'

function fitClass(band) {
  if (band === 'worth it') return 'fit-worth'
  if (band?.startsWith('worth it if')) return 'fit-if'
  if (band === 'pass') return 'fit-pass'
  return 'fit-nodata'
}

function formatAsk(price) {
  return `$${price.toLocaleString()} ask`
}

export default function PackageResults() {
  const { packageId } = useParams()
  const location = useLocation()
  const intake = location.state?.intake
  const pkg = packageId === DEMO_PACKAGE.id ? DEMO_PACKAGE : null

  if (!pkg) {
    return (
      <div className="locked-page">
        <p>Package not found.</p>
        <Link to="/intake">Back to intake</Link>
      </div>
    )
  }

  return (
    <div className="locked-page">
      <nav className="locked-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/intake">Fleet intake</Link>
        <span aria-hidden="true"> / </span>
        <span>Package</span>
      </nav>

      <header className="locked-page-header">
        <p className="locked-eyebrow">Package match · {pkg.unitCount} units</p>
        <h1>{pkg.label}</h1>
        <p className="locked-page-lead">{pkg.summary}</p>
        <p className="locked-disclaimer">
          Composite anonymized example for public preview. Not a real shop. Listing asks only —
          buyer’s fee is not shown on package screens.
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

      <section className="package-meta" aria-label="Package context">
        <p>{pkg.workDayNote}</p>
        <p className="locked-muted">{pkg.matchNote}</p>
      </section>

      <section aria-labelledby="units-title">
        <h2 id="units-title" className="package-units-title">Units in this package</h2>
        <ul className="package-unit-list">
          {PACKAGE_UNITS.map((unit) => (
            <li key={unit.id} className="package-unit-row">
              <div className="package-unit-main">
                <Link to={`/package/${pkg.id}/unit/${unit.id}`} className="package-unit-name">
                  {unit.year} {unit.make} {unit.model} {unit.trim}
                </Link>
                <p className="package-unit-meta">
                  {unit.stockId}
                  {' · '}{unit.mileage.toLocaleString()} mi
                  {' · '}{unit.location.city}, {unit.location.state}
                </p>
                <div className="package-unit-chips">
                  <span className={`fit-chip ${fitClass(unit.fitScore.band)}`}>
                    FIT: {unit.fitScore.band}
                  </span>
                  <span className="ev-chip">
                    Battery: {unit.battery.status}
                  </span>
                </div>
              </div>
              <div className="package-unit-side">
                <div className="package-ask">{formatAsk(unit.askPrice)}</div>
                <p className="package-fee-note">Fee at checkout — amount TBD</p>
                <div className="package-unit-actions">
                  <Link to={`/package/${pkg.id}/unit/${unit.id}`} className="btn btn-sm">
                    Open unit
                  </Link>
                  <Link
                    to={`/checkout?unit=${unit.id}&action=buy`}
                    className="btn btn-sm btn-primary"
                  >
                    Buy Now
                  </Link>
                  <Link
                    to={`/checkout?unit=${unit.id}&action=offer`}
                    className="btn btn-sm"
                  >
                    Make Offer
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="locked-foot-note">
        VinNotDiesel has not seen these trucks in person. We do not hold vehicle funds.
        Fees are not displayed on this package screen.
      </p>
    </div>
  )
}
