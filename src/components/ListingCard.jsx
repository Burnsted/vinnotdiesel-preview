import { Link } from 'react-router-dom'
import { distanceFromHome } from '../data/listings'

function formatPrice(listing) {
  if (listing.allInPrice == null || !listing.feesKnown) {
    return { text: 'Price + fees unknown', unknown: true }
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
    <svg width="180" height="70" viewBox="0 0 180 70" fill="none" aria-hidden="true">
      <path
        d="M8 48 H28 L38 28 H78 L92 18 H145 L168 28 V48 H158 Q152 58 140 58 Q128 58 122 48 H58 Q52 58 40 58 Q28 58 22 48 H8 Z"
        fill="rgba(0,229,255,0.15)"
        stroke="#00e5ff"
        strokeWidth="1.5"
      />
      <circle cx="40" cy="52" r="8" stroke="#ffb020" strokeWidth="2" fill="#0f1419" />
      <circle cx="140" cy="52" r="8" stroke="#ffb020" strokeWidth="2" fill="#0f1419" />
      <text x="90" y="38" textAnchor="middle" fill="#9aa7b5" fontSize="11" fontFamily="Inter,sans-serif">{label}</text>
    </svg>
  )
}

export default function ListingCard({ listing }) {
  const price = formatPrice(listing)
  const miles = distanceFromHome(listing)
  const sohMissing = listing.soh == null

  return (
    <Link to={`/listing/${listing.id}`} className="listing-card">
      <div className="card-media">
        <div className="card-badges">
          <span className={`pill pill-seller-${listing.sellerType}`}>{listing.sellerType}</span>
          <span className={valuePillClass(listing.workValue)}>{listing.workValue}</span>
        </div>
        <div className="card-media-truck">
          <TruckSilhouette make={listing.make} />
        </div>
        <span className="card-media-label" style={{ position: 'absolute', bottom: 6, right: 8 }}>
          placeholder
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">
          {listing.year} {listing.make} {listing.model}
        </h3>
        <p className="card-sub">{listing.trim} · {listing.location.city}, {listing.location.state} · {miles} mi</p>
        <div className="card-price-row">
          <span className={`card-price ${price.unknown ? 'unknown' : ''}`}>{price.text}</span>
          <span className="card-sub">{listing.mileage.toLocaleString()} mi</span>
        </div>
        <div className="card-meta-grid">
          <span>SOH <strong>{sohMissing ? '—' : `${listing.soh}%`}</strong></span>
          <span>Range <strong>{listing.ratedRange} mi</strong></span>
          <span>Payload <strong>{listing.payload.toLocaleString()} lb</strong></span>
          <span>Charger <strong>{listing.onboardChargerKw} kW</strong></span>
        </div>
        {listing.upfitTags.length > 0 && (
          <div className="card-upfits">
            {listing.upfitTags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
