import { Link } from 'react-router-dom'
import { DEFAULT_PACKAGE_ID } from '../data/package'
import Wordmark from '../components/Wordmark'

const EXAMPLE = `/package/${DEFAULT_PACKAGE_ID}`

function PlateArt({ kind }) {
  if (kind === 'cargo') {
    return (
      <svg className="home-three-art" viewBox="0 0 160 120" aria-hidden="true">
        <g fill="#111417">
          <rect x="18" y="48" width="78" height="32" rx="5" />
          <path d="M96 52 h28 a6 6 0 0 1 6 6 v22 H96 z" />
          <circle cx="40" cy="86" r="7" />
          <circle cx="108" cy="86" r="7" />
        </g>
      </svg>
    )
  }
  if (kind === 'package') {
    return (
      <svg className="home-three-art" viewBox="0 0 160 120" aria-hidden="true">
        <g fill="#111417">
          <rect x="22" y="44" width="50" height="28" rx="5" />
          <rect x="80" y="52" width="54" height="24" rx="5" />
          <circle cx="36" cy="80" r="6" />
          <circle cx="64" cy="80" r="6" />
          <circle cx="96" cy="84" r="6" />
          <circle cx="122" cy="84" r="6" />
        </g>
      </svg>
    )
  }
  return (
    <svg className="home-three-art" viewBox="0 0 160 120" aria-hidden="true">
      <g fill="#111417">
        <rect x="16" y="44" width="92" height="36" rx="6" />
        <path d="M108 50 h26 a7 7 0 0 1 7 7 v23 H108 z" />
        <circle cx="40" cy="86" r="7" />
        <circle cx="112" cy="86" r="7" />
      </g>
    </svg>
  )
}

const PLATES = [
  { kind: 'van', label: 'Ask $28k', demo: true, aria: 'Ask $28k, demo' },
  { kind: 'cargo', label: 'Range 126', demo: true, aria: 'Range 126, demo' },
  { kind: 'package', label: 'Demo pkg', demo: false, aria: 'Demo package' },
]

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
          <ul className="home-three-up">
            {PLATES.map((plate) => (
              <li key={plate.kind}>
                <Link
                  to={EXAMPLE}
                  className={`home-three-plate is-${plate.kind}`}
                  aria-label={plate.aria}
                >
                  <PlateArt kind={plate.kind} />
                  <span className="home-three-chips">
                    <span>{plate.label}</span>
                    {plate.demo ? <span className="home-three-demo">demo</span> : null}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="home-three-hint">Tap a plate → example package</p>
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
