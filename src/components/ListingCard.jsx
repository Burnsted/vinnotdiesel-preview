import { Link } from 'react-router-dom'
import { distanceFromHome } from '../data/listings'
import { batteryConfidenceFromListing } from '../lib/battery'

function formatPrice(listing) {
  if (listing.allInPrice == null) {
    return { text: 'Ask unknown', unknown: true }
  }
  return {
    text: `$${listing.allInPrice.toLocaleString()}`,
    unknown: false,
  }
}

function valuePillClass(band) {
  if (band === 'Incomplete Data') return 'pill pill-incomplete'
  return `pill pill-value-${band}`
}

function TruckSilhouette({ make }) {
  const label = make?.slice(0, 3).toUpperCase() || 'EV'
  return (
    <svg width="220" height="90" viewBox="0 0 220 90" fill="none" aria-hidden="true">
      <path
        d="M12 62 H36 L48 36 H98 L114 24 H178 L206 36 V62 H194 Q186 74 172 74 Q158 74 150 62 H70 Q62 74 48 74 Q34 74 26 62 H12 Z"
        fill="rgba(17,17,17,0.06)"
        stroke="#333"
        strokeWidth="1.4"
      />
      <circle cx="48" cy="66" r="10" stroke="#555" strokeWidth="1.5" fill="#f2f2f2" />
      <circle cx="172" cy="66" r="10" stroke="#555" strokeWidth="1.5" fill="#f2f2f2" />
      <text x="110" y="50" textAnchor="middle" fill="#666" fontSize="13" fontFamily="Inter,sans-serif" fontWeight="600">{label}</text>
    </svg>
  )
}

export default function ListingCard({ listing }) {
  const price = formatPrice(listing)
  const miles = distanceFromHome(listing)
  const battery = batteryConfidenceFromListing(listing)
  const sellerLabel = listing.sellerType.charAt(0).toUpperCase() + listing.sellerType.slice(1)

  return (
    <article className="listing-card">
      <Link to={`/listing/${listing.id}`} className="card-media" aria-label={`View ${listing.year} ${listing.make} ${listing.model}`}>
        <div className="card-badges">
          <span className={valuePillClass(listing.workValue)}>{listing.workValue}</span>
          {listing.titleStatus && (
            <span className="pill" style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              {listing.titleStatus} title
            </span>
          )}
        </div>
        <div className="card-media-truck">
          <TruckSilhouette make={listing.make} />
        </div>
        <span className="card-media-label" style={{ position: 'absolute', bottom: 8, right: 10 }}>
          placeholder
        </span>
      </Link>

      <div className="card-body">
        <h3 className="card-ymm">
          {listing.year} {listing.make} {listing.model}
          {listing.trim ? ` ${listing.trim}` : ''}
        </h3>
        <p className="card-condition">
          Used · {sellerLabel} seller
          {' · '}{listing.mileage.toLocaleString()} mi
        </p>

        <div className="card-chip-row">
          <span className="meta-chip ev-chip">
            {battery.label}
          </span>
          <span className="meta-chip ev-chip">
            Range<strong>{listing.ratedRange} mi</strong>
          </span>
          <span className="meta-chip">
            Payload<strong>{listing.payload.toLocaleString()} lb</strong>
          </span>
          <span className="meta-chip">
            Seller<strong>{sellerLabel}</strong>
          </span>
        </div>

        <div className="card-price-block">
          <div className={`card-price ${price.unknown ? 'unknown' : ''}`}>{price.text}</div>
          <span className="card-price-note">asking · fee at checkout TBD</span>
        </div>

        {listing.upfitTags.length > 0 && (
          <div className="card-upfits">
            {listing.upfitTags.slice(0, 4).map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        <div className="card-actions">
          <Link to={`/listing/${listing.id}`} className="btn btn-primary">
            Show details
          </Link>
          <button
            type="button"
            className="btn btn-save"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); alert('Demo: Save is stubbed.') }}
            aria-label="Save listing"
          >
            <svg width="12" height="14" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M3 1.5h10a1 1 0 011 1v15.2l-6-3.4-6 3.4V2.5a1 1 0 011-1z" />
            </svg>
            Save
          </button>
        </div>

        <p className="card-footer-meta">
          {listing.sellerName}
          <span className="sep">·</span>
          <span className="muted">
            {listing.location.city}, {listing.location.state}
            {' · '}{miles} mi away
          </span>
        </p>
      </div>
    </article>
  )
}
