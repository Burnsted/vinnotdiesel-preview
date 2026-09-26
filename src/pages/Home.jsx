import { Link } from 'react-router-dom'
import { DEFAULT_PACKAGE_ID } from '../data/package'
import Wordmark from '../components/Wordmark'

const EXAMPLE = `/package/${DEFAULT_PACKAGE_ID}`

export default function Home() {
  const plateSrc = `${import.meta.env.BASE_URL}home/hero-plate.svg`

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
          <h1 className="locked-hero-title">
            Used EV fleet packages that fit the work day.
          </h1>
          <p className="locked-hero-lead">
            Same job as your work truck — money, maintenance, and time.
          </p>
          <Link to={EXAMPLE} className="home-hero-plate" aria-label="Demo package">
            <img src={plateSrc} alt="" className="home-hero-plate-art" />
            <span className="home-hero-plate-chip">Demo package</span>
          </Link>
          <div className="locked-hero-actions">
            <Link to="/intake" className="btn btn-primary">
              Match my fleet
            </Link>
            <Link to={EXAMPLE} className="btn locked-btn-on-dark">
              View example package
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
