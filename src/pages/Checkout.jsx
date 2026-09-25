import { Link, useSearchParams } from 'react-router-dom'
import { DEMO_PACKAGE, getUnit } from '../data/package'

export default function Checkout() {
  const [params] = useSearchParams()
  const unitId = params.get('unit')
  const action = params.get('action') === 'offer' ? 'offer' : 'buy'
  const unit = getUnit(unitId)

  if (!unit) {
    return (
      <div className="locked-page">
        <p>Checkout needs a package unit.</p>
        <Link to={`/package/${DEMO_PACKAGE.id}`}>Back to package</Link>
      </div>
    )
  }

  const title = action === 'offer' ? 'Make Offer — placeholder checkout' : 'Buy Now — placeholder checkout'

  return (
    <div className="locked-page">
      <nav className="locked-crumbs" aria-label="Breadcrumb">
        <Link to={`/package/${DEMO_PACKAGE.id}`}>Package</Link>
        <span aria-hidden="true"> / </span>
        <Link to={`/package/${DEMO_PACKAGE.id}/unit/${unit.id}`}>{unit.stockId}</Link>
        <span aria-hidden="true"> / </span>
        <span>Checkout</span>
      </nav>

      <header className="locked-page-header">
        <p className="locked-eyebrow">VinNotDiesel · Demo only</p>
        <h1>{title}</h1>
        <p className="locked-page-lead">
          {unit.year} {unit.make} {unit.model} {unit.trim} · {unit.stockId}
        </p>
      </header>

      <section className="checkout-panel" aria-labelledby="checkout-summary">
        <h2 id="checkout-summary" className="module-title">Summary</h2>
        <dl className="checkout-lines">
          <div>
            <dt>Listing ask</dt>
            <dd>${unit.askPrice.toLocaleString()}</dd>
          </div>
          <div className="checkout-fee-line">
            <dt>Buyer’s fee</dt>
            <dd>fee at checkout — amount TBD</dd>
          </div>
        </dl>
        <p className="locked-disclaimer">
          Preview stub. No payment, no escrow, no binding contract.
          VinNotDiesel does not hold vehicle funds in this framing.
          We have not seen this truck in person.
        </p>
        {action === 'offer' ? (
          <label className="intake-field">
            <span className="intake-label">Your offer (demo)</span>
            <input type="text" inputMode="decimal" placeholder="Enter offer amount…" defaultValue="" />
          </label>
        ) : null}
        <div className="intake-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => alert('Demo only — nothing was charged or submitted.')}
          >
            {action === 'offer' ? 'Submit offer (demo)' : 'Confirm Buy Now (demo)'}
          </button>
          <Link to={`/package/${DEMO_PACKAGE.id}/unit/${unit.id}`} className="btn btn-ghost">
            Back to unit
          </Link>
        </div>
      </section>
    </div>
  )
}
