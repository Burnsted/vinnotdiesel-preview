import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="locked-home">
      <header className="locked-hero" aria-label="VinNotDiesel">
        <div className="locked-hero-bg" aria-hidden="true" />
        <div className="locked-hero-inner">
          <p className="locked-brand">VinNotDiesel</p>
          <h1 className="locked-hero-title">
            Replace the mismatched fleet with used EVs that fit the work day.
          </h1>
          <p className="locked-hero-lead">
            Small-fleet swap packages for trade shops — typically 3–7 vehicles.
            Intake your routes, get a package match, then Buy Now or Make Offer per unit.
          </p>
          <div className="locked-hero-actions">
            <Link to="/intake" className="btn btn-primary">
              Start fleet intake
            </Link>
            <Link to="/package/pkg-tc-electrical-4" className="btn btn-ghost locked-btn-on-dark">
              See example package
            </Link>
          </div>
        </div>
      </header>

      <section className="locked-section" aria-labelledby="how-title">
        <h2 id="how-title">How it works</h2>
        <p className="locked-section-lead">
          One primary path for shops. A lighter secondary path for word-of-mouth single-truck trades.
        </p>
        <ol className="locked-steps">
          <li>
            <strong>Fleet intake</strong>
            <span>Trade, fleet size (blank allowed), region, and work-day constraints.</span>
          </li>
          <li>
            <strong>Package match</strong>
            <span>A small set of used EVs sized to the work day — not a giant catalog dump.</span>
          </li>
          <li>
            <strong>Per-unit decisions</strong>
            <span>Buy Now or Make Offer on each unit. Free EV diligence layer on every truck.</span>
          </li>
        </ol>
      </section>

      <section className="locked-section locked-section-alt" aria-labelledby="money-title">
        <h2 id="money-title">How money works</h2>
        <p className="locked-section-lead">
          Buyer’s fee on close (BaT-style). Package screens show listing asks only —
          fee amount appears at checkout as a placeholder until pricing is set.
        </p>
        <ul className="locked-bullets">
          <li>We do not hold vehicle funds in this product framing.</li>
          <li>We never claim VinNotDiesel inspected the truck.</li>
          <li>Battery and recall data are often incomplete — we surface that clearly.</li>
        </ul>
      </section>

      <section className="locked-section" aria-labelledby="ev-layer-title">
        <h2 id="ev-layer-title">Free EV layer on every unit</h2>
        <p className="locked-section-lead">
          Battery status, VIN recall placeholder, charging / trade fit, and a FIT SCORE.
        </p>
        <div className="locked-fit-bands" role="list">
          <span className="fit-chip fit-worth" role="listitem">worth it</span>
          <span className="fit-chip fit-if" role="listitem">worth it if…</span>
          <span className="fit-chip fit-pass" role="listitem">pass</span>
          <span className="fit-chip fit-nodata" role="listitem">not enough data</span>
        </div>
      </section>

      <section className="locked-section locked-section-alt" aria-labelledby="secondary-title">
        <h2 id="secondary-title">Secondary: single-vehicle trade match</h2>
        <p className="locked-section-lead">
          Word-of-mouth one-offs still matter. Browse placeholder inventory when you only need one truck —
          the same EV layer and per-unit Buy Now / Make Offer apply.
        </p>
        <Link to="/shop" className="btn">Browse single trucks</Link>
      </section>

      <section className="locked-section" aria-labelledby="preview-title">
        <h2 id="preview-title">Public preview note</h2>
        <p className="locked-section-lead">
          Examples are composite and anonymized (e.g. “Treasure Coast electrical — ~4 service vans”).
          Real shop concepts stay private. This build is UI preview only.
        </p>
        <Link to="/intake" className="btn btn-primary">
          Try the overnight preview path
        </Link>
      </section>
    </div>
  )
}
