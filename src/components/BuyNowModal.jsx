import { useState } from 'react'

export default function BuyNowModal({ listing, onClose }) {
  const [confirmed, setConfirmed] = useState(false)
  const priceLabel =
    listing.allInPrice != null && listing.feesKnown
      ? `$${listing.allInPrice.toLocaleString()} listing ask`
      : 'Price unknown — confirm with seller'

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="buynow-title" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!confirmed ? (
          <>
            <h2 id="buynow-title">Buy Now</h2>
            <p className="lead">
              {listing.year} {listing.make} {listing.model} · {priceLabel}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Buyer’s fee: fee at checkout — amount TBD. Escrow, title, and payment partners are not wired yet.
              VinNotDiesel does not hold vehicle funds. Buyer pays the seller / dealer.
            </p>
            <p className="fake-note">Demo only — no charge, no binding contract. We have not seen this truck in person.</p>
            <div className="modal-actions">
              <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={() => setConfirmed(true)}>
                Confirm Buy Now
              </button>
            </div>
          </>
        ) : (
          <div className="modal-success">
            <div className="check">✓</div>
            <h2>Buy Now confirmed (demo)</h2>
            <p className="lead">{priceLabel}</p>
            <p className="fake-note">Fake checkout complete. Fee at checkout — amount TBD. No payment processed.</p>
            <div className="modal-actions" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn btn-primary" onClick={onClose}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
