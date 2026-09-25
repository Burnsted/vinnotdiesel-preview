import { Link, useSearchParams } from 'react-router-dom'
import Wordmark from '../components/Wordmark'
import {
  DEFAULT_PACKAGE_ID,
  findUnitAnywhere,
  getPackage,
  getUnit,
  packageStickerSum,
} from '../data/package'
import { formatMoney } from '../lib/fit'

const ACTION_TITLES = {
  buy: 'Buy Now — placeholder checkout',
  offer: 'Make Offer — placeholder checkout',
  reserve: 'Reserve package — placeholder checkout',
}

export default function Checkout() {
  const [params] = useSearchParams()
  const packageId = params.get('package')
  const unitId = params.get('unit')
  const rawAction = params.get('action')
  const action = rawAction === 'offer' || rawAction === 'reserve' ? rawAction : 'buy'

  const found = unitId
    ? (packageId
        ? { pkg: getPackage(packageId), unit: getUnit(packageId, unitId) }
        : findUnitAnywhere(unitId))
    : null
  const unit = found?.unit || null
  const pkg = found?.pkg || getPackage(packageId)
  const packageLevel = Boolean(pkg) && !unit

  if (!pkg || (unitId && !unit)) {
    return (
      <div className="locked-page">
        <p>Checkout needs a package or a package unit.</p>
        <Link to={`/package/${DEFAULT_PACKAGE_ID}`}>Back to package</Link>
      </div>
    )
  }

  const title = packageLevel
    ? (action === 'offer' ? 'Make offer on package — placeholder checkout' : ACTION_TITLES.reserve)
    : ACTION_TITLES[action]
  const sticker = packageStickerSum(pkg)

  return (
    <div className="locked-page">
      <nav className="locked-crumbs" aria-label="Breadcrumb">
        <Link to={`/package/${pkg.id}`}>Package</Link>
        {unit ? (
          <>
            <span aria-hidden="true"> / </span>
            <Link to={`/package/${pkg.id}/unit/${unit.id}`}>{unit.stockId}</Link>
          </>
        ) : null}
        <span aria-hidden="true"> / </span>
        <span>Checkout</span>
      </nav>

      <header className="locked-page-header">
        <p className="locked-eyebrow locked-eyebrow-mark">
          <Wordmark size="eyebrow" tone="light" decorative />
          <span>Demo only</span>
        </p>
        <h1>{title}</h1>
        <p className="locked-page-lead">
          {unit
            ? `${unit.year} ${unit.make} ${unit.model} ${unit.trim} · ${unit.stockId}`
            : `${pkg.label} · ${pkg.unitCount} units`}
        </p>
      </header>

      <section className="checkout-panel" aria-labelledby="checkout-summary">
        <h2 id="checkout-summary" className="module-title">Summary</h2>
        <dl className="checkout-lines">
          {unit ? (
            <div>
              <dt>Listing ask</dt>
              <dd>{formatMoney(unit.askPrice)}</dd>
            </div>
          ) : (
            <>
              {pkg.units.map((u) => (
                <div key={u.id}>
                  <dt>{u.stockId} · {u.year} {u.make} {u.model}</dt>
                  <dd>{formatMoney(u.askPrice)}</dd>
                </div>
              ))}
              <div>
                <dt>Package sticker sum</dt>
                <dd>{formatMoney(sticker)}</dd>
              </div>
            </>
          )}
          <div className="checkout-fee-line">
            <dt>Buyer’s fee</dt>
            <dd>Fee at checkout — amount TBD</dd>
          </div>
        </dl>
        <p className="locked-disclaimer">
          Preview stub. No payment, no escrow, no binding contract.
          FleetFit does not hold vehicle funds. Buyer pays the seller / dealer.
          {unit
            ? ' We have not seen this truck in person.'
            : ' We have not seen these trucks in person.'}
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
            onClick={() => alert('Demo only — nothing was charged or submitted. FleetFit does not hold vehicle funds.')}
          >
            {action === 'offer'
              ? 'Submit offer (demo)'
              : action === 'reserve'
                ? 'Confirm reserve (demo)'
                : 'Confirm Buy Now (demo)'}
          </button>
          <Link
            to={unit ? `/package/${pkg.id}/unit/${unit.id}` : `/package/${pkg.id}`}
            className="btn btn-ghost"
          >
            {unit ? 'Back to unit' : 'Back to package'}
          </Link>
        </div>
      </section>
    </div>
  )
}
