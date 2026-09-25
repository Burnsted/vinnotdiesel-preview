import { Link } from 'react-router-dom'
import { DEFAULT_PACKAGE_ID } from '../data/package'
import Wordmark from '../components/Wordmark'

export default function Home() {
  return (
    <div className="locked-home is-sparse">
      <header className="locked-hero" aria-label="FleetFit">
        <div className="locked-hero-bg" aria-hidden="true" />
        <nav className="locked-topnav" aria-label="Preview">
          <Link to="/" className="locked-topnav-brand" aria-label="FleetFit">
            <Wordmark size="nav" tone="dark" decorative />
          </Link>
          <div className="locked-topnav-links">
            <Link to="/intake">Intake</Link>
            <Link to="/shop">Shop</Link>
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
            Same job as your work truck — money, maintenance, and time.
          </p>
          <div className="locked-hero-actions">
            <Link to="/intake" className="btn btn-primary">
              See if they fit
            </Link>
            <Link to={`/package/${DEFAULT_PACKAGE_ID}`} className="btn locked-btn-on-dark">
              See example package
            </Link>
          </div>
        </div>
      </header>

      <section className="locked-section home-dense" aria-label="Path">
        <p className="home-path-label">Path</p>
        <ul className="home-path">
          <li>Intake</li>
          <li>Package</li>
          <li>Add to fleet</li>
        </ul>
        <p className="home-quiet">Demo · composite examples · not a real shop</p>
      </section>
    </div>
  )
}
