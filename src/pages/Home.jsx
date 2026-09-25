import { Link } from 'react-router-dom'
import { DEFAULT_PACKAGE_ID } from '../data/package'
import Wordmark from '../components/Wordmark'

export default function Home() {
  return (
    <div className="locked-home">
      <header className="locked-hero" aria-label="FleetFit">
        <div className="locked-hero-bg" aria-hidden="true" />
        <nav className="locked-topnav" aria-label="Preview">
          <Link to="/" className="locked-topnav-brand" aria-label="FleetFit">
            <Wordmark size="nav" tone="dark" decorative />
          </Link>
          <div className="locked-topnav-links">
            <Link to="/intake">Fleet intake</Link>
            <Link to="/shop" title="Secondary — Couples Match / single truck">Shop</Link>
            <span className="badge-demo">Demo</span>
          </div>
        </nav>
        <div className="locked-hero-inner">
          <p className="locked-brand">
            <Wordmark size="hero" tone="dark" />
          </p>
          <h1 className="locked-hero-title">
            Used EV fleet packages that fit the work day.
          </h1>
          <p className="locked-hero-lead">
            Work vans and trucks that do the same job as non-EV work vehicles — and can save money, maintenance, and time. We help small trade shops see the fit, then package used EVs matched to your routes (typically 3–5 vehicles, up to ~10). Buy Now or Make Offer per unit.
          </p>
          <div className="locked-hero-actions">
            <Link to="/intake" className="btn btn-primary">
              See if they fit
            </Link>
            <Link to={`/package/${DEFAULT_PACKAGE_ID}`} className="btn btn-ghost locked-btn-on-dark">
              See example package
            </Link>
          </div>
          <p className="locked-hero-cred">
            In EVs since 2015 · 16 owned · 4 in the driveway now
          </p>
        </div>
      </header>

      <section className="locked-section" aria-labelledby="how-title">
        <h2 id="how-title">How it works</h2>
        <p className="locked-section-lead">
          One clear path for shops that want a small used-EV package. Single-truck browse stays secondary.
        </p>
        <ol className="locked-steps">
          <li>
            <strong>Fleet intake</strong>
            <span>Trade, fleet size (blank / “not surveyed yet” allowed), region, and what a real work day looks like.</span>
          </li>
          <li>
            <strong>Package match</strong>
            <span>A small set of used EVs sized to that day — not a giant catalog dump.</span>
          </li>
          <li>
            <strong>Per-unit decisions</strong>
            <span>Buy Now or Make Offer on each unit. Free EV diligence on every truck. Reserve or offer on the whole package.</span>
          </li>
        </ol>
      </section>

      <section className="locked-section locked-section-alt" aria-labelledby="money-title">
        <h2 id="money-title">How money works</h2>
        <p className="locked-section-lead">
          Buyer’s fee on closed units only (BaT / Cars &amp; Bids–style). Package browse shows listing asks only —
          checkout shows <strong>Fee at checkout — amount TBD</strong>. No fee $ or % is invented on package cards.
        </p>
        <ul className="locked-bullets">
          <li>Buyer pays the seller / dealer. FleetFit never holds vehicle funds.</li>
          <li>We never claim FleetFit inspected the truck.</li>
          <li>Battery and recall data are often incomplete — we surface those gaps.</li>
        </ul>
      </section>

      <section className="locked-section" aria-labelledby="ev-layer-title">
        <h2 id="ev-layer-title">Free EV layer on every unit</h2>
        <p className="locked-section-lead">
          Battery status (often unknown), VIN recall placeholder, charging notes, and annual savings when a dollar figure is on file.
        </p>
      </section>

      <section className="locked-section locked-section-alt" aria-labelledby="secondary-title">
        <h2 id="secondary-title">Secondary: Couples Match / single truck</h2>
        <p className="locked-section-lead">
          One-offs still matter by word of mouth. Not the home lead — no inventory carousel here. Same EV layer and per-unit Buy Now / Make Offer when you only need one truck.
        </p>
        <Link to="/shop" className="btn locked-btn-on-dark">Browse single trucks</Link>
      </section>

      <section className="locked-section" aria-labelledby="preview-title">
        <h2 id="preview-title">Public preview note</h2>
        <p className="locked-section-lead">
          Examples are composite and anonymized (e.g. “Treasure Coast electrical — ~4 service vans”).
          Real shop concepts stay private. This build is UI preview only.
        </p>
        <div className="locked-hero-actions">
          <Link to="/intake" className="btn btn-primary">
            Start fleet intake
          </Link>
          <Link to="/package/pkg-tc-landscape-2" className="btn locked-btn-on-dark">
            2-unit landscape example
          </Link>
        </div>
      </section>
    </div>
  )
}
