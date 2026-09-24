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
        fill="rgba(0,229,255,0.12)"
        stroke="#00e5ff"
        strokeWidth="1.25"
      />
      <circle cx="40" cy="52" r="8" stroke="#ffb020" strokeWidth="1.5" fill="#0f1419" />
      <circle cx="140" cy="52" r="8" stroke="#ffb020" strokeWidth="1.5" fill="#0f1419" />
      <text x="90" y="38" textAnchor="middle" fill="#9aa7b5" fontSize="11" fontFamily="Inter,sans-serif">{label}</text>
    </svg>
  )
}

export default function ListingCard({ listing }) {
  const price = formatPrice(listing)
  const miles = distanceFromHome(listing)
  const sohMissing = listing.soh == null
  const sellerLabel = listing.sellerType.charAt(0).toUpperCase() + listing.sellerType.slice(1)

  return (
    <Link to={`/listing/${listing.id}`} className="listing-card">
      <div className="card-media">
        <div className="card-badges">
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
        {/* 1. All-in price (display weight) */}
        <div className={`card-price ${price.unknown ? 'unknown' : ''}`}>{price.text}</div>
        {/* 2. Year / Make / Model */}
        <h3 className="card-ymm">
          {listing.year} {listing.make} {listing.model}
        </h3>
        {/* 3. Chip row: SOH · range · payload · seller */}
        <div className="card-chip-row">
          <span className="meta-chip">
            SOH<strong>{sohMissing ? '—' : `${listing.soh}%`}</strong>
          </span>
          <span className="meta-chip">
            Range<strong>{listing.ratedRange} mi</strong>
          </span>
          <span className="meta-chip">
            Payload<strong>{listing.payload.toLocaleString()} lb</strong>
          </span>
          <span className="meta-chip">
            Seller<strong>{sellerLabel}</strong>
          </span>
        </div>
        {/* 4. Miles / location */}
        <p className="card-footer-meta">
          {listing.mileage.toLocaleString()} mi · {listing.location.city}, {listing.location.state} · {miles} mi away
          {listing.trim ? ` · ${listing.trim}` : ''}
        </p>
        {listing.upfitTags.length > 0 && (
          <div className="card-upfits">
            {listing.upfitTags.slice(0, 4).map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
