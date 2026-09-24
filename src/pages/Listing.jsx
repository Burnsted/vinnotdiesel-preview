import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LISTINGS, distanceFromHome } from '../data/listings'
import MakeOfferModal from '../components/MakeOfferModal'
import BuyNowModal from '../components/BuyNowModal'

const GALLERY_LABELS = [
  { key: 'exterior', label: 'Exterior' },
  { key: 'bed-upfit', label: 'Bed / upfit' },
  { key: 'dash-range', label: 'Dash / range' },
  { key: 'charge-port', label: 'Charge port' },
  { key: 'underbody', label: 'Underbody / frame' },
]

function bandClass(band) {
  if (band === 'Incomplete Data') return 'band-incomplete-data'
  return `band-${band}`
}

export default function Listing() {
  const { id } = useParams()
  const listing = useMemo(() => LISTINGS.find((l) => l.id === id), [id])
  const [offerOpen, setOfferOpen] = useState(false)
  const [buyOpen, setBuyOpen] = useState(false)
  const [msgNote, setMsgNote] = useState('')
  const [ppiNote, setPpiNote] = useState('')

  if (!listing) {
    return (
      <div className="detail-page">
        <Link to="/" className="back-link">← Back to browse</Link>
        <div className="empty-state">
          <p>Listing not found.</p>
          <Link to="/">Return to inventory</Link>
        </div>
      </div>
    )
  }

  const miles = distanceFromHome(listing)
  const priceKnown = listing.allInPrice != null && listing.feesKnown
  const priceText = priceKnown
    ? `$${listing.allInPrice.toLocaleString()}`
    : 'Price + fees unknown'
  const sohMissing = listing.soh == null

  const panels = GALLERY_LABELS.filter((g) => listing.photos.includes(g.key))
  const gallery = panels.length ? panels : GALLERY_LABELS.slice(0, 4)

  return (
    <>
      <div className="detail-page">
        <Link to="/" className="back-link">← Back to browse</Link>

        {/* 1. Hero */}
        <section className="hero-block" aria-labelledby="listing-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            <span className={`pill pill-seller-${listing.sellerType}`}>{listing.sellerType}</span>
            <span className={listing.workValue === 'Incomplete Data' ? 'pill pill-incomplete' : `pill pill-value-${listing.workValue}`}>
              Work Value: {listing.workValue}
            </span>
            <span className="pill" style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
              {listing.titleStatus} title
            </span>
          </div>
          <h1 id="listing-title" className="hero-title">
            {listing.year} {listing.make} {listing.model} {listing.trim}
          </h1>
          <p className="hero-sub">
            <span className="vin-mono">{listing.vin}</span>
            {' · '}{listing.mileage.toLocaleString()} mi
            {' · '}{listing.location.city}, {listing.location.state}
            {' · '}{miles} mi from West Palm Beach, FL
            {' · '}Listed {listing.listedDaysAgo === 0 ? 'today' : `${listing.listedDaysAgo}d ago`}
          </p>
          <div className="hero-stats">
            <div className="stat-tile">
              <div className="stat-label">All-in price</div>
              <div className={`stat-value ${priceKnown ? 'price' : 'amber'}`}>{priceText}</div>
              <div className="stat-hint">{priceKnown ? 'Fees included' : 'Ask seller for fee sheet'}</div>
            </div>
            <div className="stat-tile">
              <div className="stat-label">Rated range</div>
              <div className="stat-value">{listing.ratedRange} mi</div>
              <div className="stat-hint">Displayed / sticker class</div>
            </div>
            <div className="stat-tile">
              <div className="stat-label">Battery SOH</div>
              <div className={`stat-value ${sohMissing ? 'amber' : ''}`}>
                {sohMissing ? 'Incomplete' : `${listing.soh}%`}
              </div>
              <div className="stat-hint">{sohMissing ? 'No measurement on file' : listing.sohMethod}</div>
            </div>
            <div className="stat-tile">
              <div className="stat-label">Payload</div>
              <div className="stat-value">{listing.payload.toLocaleString()} lb</div>
              <div className="stat-hint">GVWR {listing.gvwr.toLocaleString()} · curb {listing.curb.toLocaleString()}</div>
            </div>
          </div>
        </section>

        {/* 2. Media gallery */}
        <section className="module module-gallery">
          <h2 className="module-title"><span className="num">2</span> Media gallery</h2>
          <div className="gallery">
            {gallery.map((g, i) => (
              <div key={g.key} className={`g-panel ${i === 0 ? 'g-main' : ''}`}>
                <span className="g-icon" aria-hidden="true">▣</span>
                <span>{g.label}</span>
                <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>SVG placeholder</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Work & EV facts */}
        <section className="module module-facts">
          <h2 className="module-title"><span className="num">3</span> Work &amp; EV facts</h2>
          <dl className="facts-strip">
            <div className="fact"><dt>Usable pack</dt><dd>{listing.usableKwh ? `${listing.usableKwh} kWh` : '—'}</dd></div>
            <div className="fact"><dt>Onboard charger</dt><dd>{listing.onboardChargerKw} kW</dd></div>
            <div className="fact"><dt>DC fast max</dt><dd>{listing.dcFastMaxKw} kW</dd></div>
            <div className="fact"><dt>Cab / bed</dt><dd>{listing.cab} / {listing.bed}</dd></div>
            <div className="fact"><dt>Drivetrain</dt><dd>{listing.drivetrain}</dd></div>
            <div className="fact"><dt>Payload</dt><dd>{listing.payload.toLocaleString()} lb</dd></div>
            <div className="fact"><dt>GVWR</dt><dd>{listing.gvwr.toLocaleString()} lb</dd></div>
            <div className="fact"><dt>Curb</dt><dd>{listing.curb.toLocaleString()} lb</dd></div>
          </dl>
          <p style={{ marginTop: 12, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{listing.description}</p>
        </section>

        {/* 4. Upfit package */}
        <section className="module upfit-card">
          <h2 className="module-title"><span className="num">4</span> Upfit package</h2>
          <p>{listing.upfitDescription}</p>
          <div className="card-upfits">
            {listing.upfitTags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </section>

        {/* 5. Warranty & battery docs */}
        <section className="module">
          <h2 className="module-title"><span className="num">5</span> Warranty &amp; battery docs</h2>
          <dl className="facts-strip">
            <div className="fact"><dt>Battery / drive unit</dt><dd>{listing.warrantyBatteryMonths} mo left</dd></div>
            <div className="fact"><dt>Bumper-to-bumper</dt><dd>{listing.warrantyBumperMonths > 0 ? `${listing.warrantyBumperMonths} mo left` : 'Expired'}</dd></div>
            <div className="fact"><dt>SOH method</dt><dd style={{ fontSize: '0.8rem', fontWeight: 500 }}>{listing.sohMethod || 'Not provided'}</dd></div>
          </dl>
          <p style={{ marginTop: 10, color: 'var(--text-muted)', fontSize: '0.88rem' }}>{listing.warrantyNotes}</p>
        </section>

        {/* 6. History report */}
        <section className="module">
          <h2 className="module-title"><span className="num">6</span> History report</h2>
          <div className="vhr-stub">
            Vehicle history report slot — preview stub. In production: free or bundled VHR (title brands, odometer, accidents) attached to every listing.
            <div style={{ marginTop: 10 }}>
              <button type="button" className="btn btn-sm" disabled title="Stub">Request VHR (stub)</button>
            </div>
          </div>
        </section>

        {/* 7. Known issues */}
        <section className="module">
          <h2 className="module-title"><span className="num">7</span> Known issues</h2>
          {listing.knownIssues.length === 0 ? (
            <p className="issues-empty">Seller reports no known open issues.</p>
          ) : (
            <ul className="issues-list">
              {listing.knownIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          )}
        </section>

        {/* 8. Seller */}
        <section className="module">
          <h2 className="module-title"><span className="num">8</span> Seller</h2>
          <div className="seller-row">
            <div className="seller-avatar" aria-hidden="true">
              {listing.sellerName.charAt(0)}
            </div>
            <div className="seller-meta">
              <h3>{listing.sellerName}</h3>
              <p>
                <span className={`pill pill-seller-${listing.sellerType}`}>{listing.sellerType}</span>
                {' · '}Rating {listing.sellerRating.toFixed(1)} / 5 (demo)
              </p>
            </div>
          </div>
        </section>

        {/* 9. Q&A stub */}
        <section className="module">
          <h2 className="module-title"><span className="num">9</span> Q&amp;A</h2>
          <div className="qa-stub">
            Public diligence thread stub — ask about pack report, upfit electrical, and yard visit windows.
            <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Ask the seller…"
                style={{ flex: 1, minWidth: 180, background: 'var(--bg-elev)', border: '1px solid var(--border)', borderRadius: 4, padding: '8px 10px' }}
                value={msgNote}
                onChange={(e) => setMsgNote(e.target.value)}
                aria-label="Question stub"
              />
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => {
                  if (msgNote.trim()) {
                    setMsgNote('')
                    alert('Demo: question not sent. Q&A is stubbed in this preview.')
                  }
                }}
              >
                Post (stub)
              </button>
            </div>
          </div>
        </section>

        {/* 10. Comps / Work Value */}
        <section className="module">
          <h2 className="module-title"><span className="num">10</span> Comps / Work Value</h2>
          <div className="work-value-banner">
            <div>
              <div className="stat-label">Work Value band</div>
              <div className={`band ${bandClass(listing.workValue)}`}>{listing.workValue}</div>
            </div>
            <p style={{ margin: 0, flex: 1, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {listing.compsNote}
            </p>
          </div>
        </section>

        {/* 11. CTA note (sticky below) */}
        <section className="module">
          <h2 className="module-title"><span className="num">11</span> Next steps</h2>
          <p style={{ margin: '0 0 8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Message · Make Offer · Buy Now · Book PPI — use the sticky bar below. PPI scheduling is stubbed.
          </p>
          {ppiNote && <p className="ppi-note">{ppiNote}</p>}
        </section>
      </div>

      <div className="cta-sticky">
        <div className="cta-inner">
          <div className="cta-price" style={priceKnown ? undefined : { color: 'var(--amber)', fontFamily: 'var(--font)' }}>
            {priceText}
          </div>
          <div className="cta-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => alert('Demo: messaging not connected. Use Q&A stub above.')}
            >
              Message
            </button>
            <button type="button" className="btn btn-amber" onClick={() => setOfferOpen(true)}>
              Make Offer
            </button>
            <button type="button" className="btn btn-primary" onClick={() => setBuyOpen(true)}>
              Buy Now
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => setPpiNote('PPI booking stub — independent pre-purchase inspection partner not wired yet.')}
            >
              Book PPI
            </button>
          </div>
        </div>
      </div>

      {offerOpen && <MakeOfferModal listing={listing} onClose={() => setOfferOpen(false)} />}
      {buyOpen && <BuyNowModal listing={listing} onClose={() => setBuyOpen(false)} />}
    </>
  )
}
