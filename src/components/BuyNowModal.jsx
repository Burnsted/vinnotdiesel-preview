import { useState } from 'react'

export default function BuyNowModal({ listing, onClose }) {
  const [confirmed, setConfirmed] = useState(false)
  const priceLabel =
    listing.allInPrice != null && listing.feesKnown
      ? `$${listing.allInPrice.toLocaleString()} all-in`
      : 'Price + fees unknown — confirm with seller'

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
              This confirms purchase intent in the preview. Escrow, title, and payment partners are not wired yet.
            </p>
            <p className="fake-note">Demo only — no charge, no binding contract.</p>
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
            <p className="fake-note">Fake checkout complete. No payment processed.</p>
            <div className="modal-actions" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn btn-primary" onClick={onClose}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
