import { Link } from 'react-router-dom'
import { DEFAULT_PACKAGE_ID } from '../data/package'
import Wordmark from '../components/Wordmark'

const EXAMPLE = `/package/${DEFAULT_PACKAGE_ID}`

function HeroPlateArt() {
  return (
    <svg className="home-hero-plate-art" viewBox="0 0 640 280" aria-hidden="true">
      <defs>
        <linearGradient id="home-plate-shop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#152028" />
          <stop offset="0.55" stopColor="#0c1216" />
          <stop offset="1" stopColor="#080b0e" />
        </linearGradient>
        <radialGradient id="home-plate-vignette" cx="78%" cy="18%" r="72%">
          <stop offset="0" stopColor="#1a3a3a" stopOpacity="0.28" />
          <stop offset="1" stopColor="#080b0e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="280" rx="28" fill="url(#home-plate-shop)" />
      <rect width="640" height="280" rx="28" fill="url(#home-plate-vignette)" />
      <g fill="#111417">
        <rect x="78" y="112" width="392" height="72" rx="10" />
        <path d="M470 128 h78 a12 12 0 0 1 12 12 v44 h-90 z" />
        <circle cx="168" cy="196" r="13" />
        <circle cx="468" cy="196" r="13" />
      </g>
    </svg>
  )
}

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
          <h1 className="locked-hero-title">
            Used EV fleet packages that fit the work day.
          </h1>
          <p className="locked-hero-lead">
            Same job as your work truck — money, maintenance, and time.
          </p>
          <Link to={EXAMPLE} className="home-hero-plate" aria-label="Demo package">
            <HeroPlateArt />
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
