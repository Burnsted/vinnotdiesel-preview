import { useState } from 'react'

export default function MakeOfferModal({ listing, onClose }) {
  const [amount, setAmount] = useState(
    listing.allInPrice ? String(Math.round(listing.allInPrice * 0.92)) : ''
  )
  const [expiry, setExpiry] = useState('72')
  const [submitted, setSubmitted] = useState(false)

  function submit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="offer-title" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!submitted ? (
          <form onSubmit={submit}>
            <h2 id="offer-title">Make Offer</h2>
            <p className="lead">
              {listing.year} {listing.make} {listing.model} {listing.trim}
            </p>
            <div className="modal-field">
              <label htmlFor="offer-amount">Offer amount (USD)</label>
              <input
                id="offer-amount"
                type="number"
                min="1"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="modal-field">
              <label htmlFor="offer-expiry">Offer expires in</label>
              <select id="offer-expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)}>
                <option value="24">24 hours</option>
                <option value="48">48 hours</option>
                <option value="72">72 hours</option>
                <option value="168">7 days</option>
              </select>
            </div>
            <p className="fake-note">Demo only — no real offer is sent. Buyer’s fee: fee at checkout — amount TBD. VinNotDiesel does not hold vehicle funds.</p>
            <div className="modal-actions">
              <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-amber">Submit offer</button>
            </div>
          </form>
        ) : (
          <div className="modal-success">
            <div className="check">✓</div>
            <h2>Offer recorded (demo)</h2>
            <p className="lead">
              ${Number(amount).toLocaleString()} · expires in {expiry}h
            </p>
            <p className="fake-note">Fake confirmation — seller will not be contacted.</p>
            <div className="modal-actions" style={{ justifyContent: 'center' }}>
              <button type="button" className="btn btn-primary" onClick={onClose}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
