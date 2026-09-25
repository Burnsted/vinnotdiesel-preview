import { Link, useParams } from 'react-router-dom'
import { DEMO_PACKAGE, getUnit } from '../data/package'

function fitClass(band) {
  if (band === 'worth it') return 'fit-worth'
  if (band?.startsWith('worth it if')) return 'fit-if'
  if (band === 'pass') return 'fit-pass'
  return 'fit-nodata'
}

export default function PackageUnit() {
  const { packageId, unitId } = useParams()
  const unit = getUnit(unitId)
  const pkgOk = packageId === DEMO_PACKAGE.id

  if (!pkgOk || !unit) {
    return (
      <div className="locked-page">
        <p>Unit not found.</p>
        <Link to="/intake">Back to intake</Link>
      </div>
    )
  }

  return (
    <div className="locked-page locked-unit-page">
      <nav className="locked-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/intake">Fleet intake</Link>
        <span aria-hidden="true"> / </span>
        <Link to={`/package/${DEMO_PACKAGE.id}`}>Package</Link>
        <span aria-hidden="true"> / </span>
        <span>{unit.stockId}</span>
      </nav>

      <header className="locked-page-header">
        <p className="locked-eyebrow">{unit.stockId} · placeholder stock</p>
        <h1>
          {unit.year} {unit.make} {unit.model} {unit.trim}
        </h1>
        <p className="locked-page-lead">
          {unit.mileage.toLocaleString()} mi · {unit.location.city}, {unit.location.state}
          {' · '}{unit.sellerLabel}
        </p>
        <div className="unit-inspect-banner" role="status">
          We have not seen this truck in person.
        </div>
      </header>

      <div className="unit-ask-bar">
        <div>
          <div className="stat-label">Listing ask</div>
          <div className="unit-ask-price">${unit.askPrice.toLocaleString()}</div>
          <p className="package-fee-note">Buyer’s fee appears only at checkout — amount TBD</p>
        </div>
        <div className="unit-ask-actions">
          <Link to={`/checkout?unit=${unit.id}&action=buy`} className="btn btn-primary">
            Buy Now
          </Link>
          <Link to={`/checkout?unit=${unit.id}&action=offer`} className="btn">
            Make Offer
          </Link>
        </div>
      </div>

      <section className="module" aria-labelledby="ev-layer">
        <h2 id="ev-layer" className="module-title">Free EV layer</h2>
        <dl className="ev-layer-grid">
          <div className="ev-layer-item">
            <dt>Battery</dt>
            <dd>
              <strong>{unit.battery.status}</strong>
              {unit.battery.soh != null && (
                <span> · SOH {unit.battery.soh}%</span>
              )}
              <p>{unit.battery.note}</p>
            </dd>
          </div>
          <div className="ev-layer-item">
            <dt>VIN recall</dt>
            <dd>
              <strong>{unit.recall.status}</strong>
              <p>{unit.recall.detail}</p>
            </dd>
          </div>
          <div className="ev-layer-item">
            <dt>Charging fit</dt>
            <dd>
              <strong>{unit.chargingFit.label}</strong>
              <p>{unit.chargingFit.detail}</p>
            </dd>
          </div>
          <div className="ev-layer-item">
            <dt>Trade fit</dt>
            <dd>
              <strong>{unit.tradeFit.label}</strong>
              <p>{unit.tradeFit.detail}</p>
            </dd>
          </div>
          <div className="ev-layer-item ev-layer-fit">
            <dt>FIT SCORE</dt>
            <dd>
              <span className={`fit-chip ${fitClass(unit.fitScore.band)}`}>
                {unit.fitScore.band}
              </span>
              <p>{unit.fitScore.reason}</p>
            </dd>
          </div>
        </dl>
      </section>

      <section className="module" aria-labelledby="open-items">
        <h2 id="open-items" className="module-title">Open items</h2>
        <ul className="issues-list">
          {unit.openItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="module" aria-labelledby="unit-about">
        <h2 id="unit-about" className="module-title">About this unit</h2>
        <p>{unit.description}</p>
        <p className="locked-muted">Upfit: {unit.upfitNote}</p>
        <p className="locked-muted">Title: {unit.titleStatus} · Seller type: {unit.sellerType}</p>
        <p className="locked-muted">
          No VIN string from production concepts — stock ID only in this public preview.
        </p>
      </section>

      <p className="locked-foot-note">
        VinNotDiesel does not hold vehicle funds. Package screens never show fee amounts.
      </p>
    </div>
  )
}
