import { Link } from 'react-router-dom'
import { DEFAULT_PACKAGE_ID } from '../data/package'
import Wordmark from '../components/Wordmark'
import heroCoastal from '../assets/trucks/hero-coastal.webp'

const EXAMPLE = `/package/${DEFAULT_PACKAGE_ID}`
const AMBER = '#F5A623'

function PathIcon({ name }) {
  if (name === 'intake') {
    return (
      <svg className="home-path-icon" viewBox="0 0 48 48" aria-hidden="true">
        <rect x="12" y="8" width="24" height="32" rx="3" fill="none" stroke={AMBER} strokeWidth="2.4" />
        <path d="M18 16h12M18 23h12M18 30h8" fill="none" stroke={AMBER} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'package') {
    return (
      <svg className="home-path-icon" viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M10 18 L24 10 L38 18 V34 L24 42 L10 34 Z"
          fill="none"
          stroke={AMBER}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M10 18 L24 26 L38 18M24 26 V42" fill="none" stroke={AMBER} strokeWidth="2.4" />
      </svg>
    )
  }
  if (name === 'add') {
    return (
      <svg className="home-path-icon" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 12 V36 M12 24 H36" fill="none" stroke={AMBER} strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg className="home-path-icon" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="14" fill="none" stroke={AMBER} strokeWidth="2.4" />
      <path d="M24 16 V25 L30 28" fill="none" stroke={AMBER} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function TruckArt({ kind }) {
  if (kind === 'lightning') {
    return (
      <svg className="home-ex-art" viewBox="0 0 160 120" aria-hidden="true">
        <rect width="160" height="120" rx="18" fill="#2a3038" />
        <g fill="#1a2744">
          <rect x="18" y="48" width="72" height="32" rx="6" />
          <path d="M90 54 h36 a6 6 0 0 1 6 6 v20 H90 z" />
          <circle cx="40" cy="86" r="8" />
          <circle cx="112" cy="86" r="8" />
        </g>
      </svg>
    )
  }
  if (kind === 'cyber') {
    return (
      <svg className="home-ex-art" viewBox="0 0 160 120" aria-hidden="true">
        <rect width="160" height="120" rx="18" fill="#2a3038" />
        <g fill="#c8ccd0">
          <path d="M22 78 L48 46 H118 L140 78 Z" />
          <circle cx="48" cy="86" r="8" fill="#111417" />
          <circle cx="118" cy="86" r="8" fill="#111417" />
        </g>
      </svg>
    )
  }
  return (
    <svg className="home-ex-art" viewBox="0 0 160 120" aria-hidden="true">
      <rect width="160" height="120" rx="18" fill="#2a3038" />
      <g fill="#2d4a35">
        <rect x="20" y="50" width="68" height="30" rx="8" />
        <path d="M88 56 h38 a8 8 0 0 1 8 8 v16 H88 z" />
        <circle cx="42" cy="86" r="8" />
        <circle cx="114" cy="86" r="8" />
      </g>
    </svg>
  )
}

const PATH = [
  { name: 'intake', label: 'Intake', to: '/intake' },
  { name: 'package', label: 'Package', to: EXAMPLE },
  { name: 'add', label: 'Add to fleet', to: EXAMPLE },
  { name: 'budget', label: 'Budget', to: '/budget' },
]

const EXAMPLES = [
  { kind: 'lightning', label: 'Lightning', to: '/model/ford-f-150-lightning' },
  { kind: 'cyber', label: 'Cybertruck', to: '/model/tesla-cybertruck' },
  { kind: 'r1t', label: 'R1T', to: '/model/rivian-r1t' },
]

export default function Home() {
  return (
    <div className="locked-home is-mood">
      <header className="locked-hero" aria-label="FleetFit">
        <nav className="locked-topnav" aria-label="Preview">
          <Link to="/" className="locked-topnav-brand" aria-label="FleetFit">
            <Wordmark size="nav" tone="light" decorative />
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
            <img
              src={heroCoastal}
              alt=""
              className="home-hero-plate-art"
            />
            <span className="home-hero-plate-chip">Demo package</span>
          </Link>
          <div className="locked-hero-actions">
            <Link to="/intake" className="btn btn-primary">
              Match my fleet
            </Link>
            <Link to={EXAMPLE} className="btn home-btn-quiet">
              View example package
            </Link>
          </div>
        </div>
      </header>

      <section className="locked-section home-dense" aria-label="Path">
        <p className="home-path-label">Path</p>
        <ul className="home-path-icons">
          {PATH.map((step) => (
            <li key={step.name}>
              <Link to={step.to} className="home-path-card">
                <PathIcon name={step.name} />
                <span>{step.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="locked-section home-ex" aria-label="Example packages">
        <p className="home-path-label">Example packages</p>
        <ul className="home-ex-strip">
          {EXAMPLES.map((ex) => (
            <li key={ex.kind}>
              <Link to={ex.to} className="home-ex-card">
                <TruckArt kind={ex.kind} />
                <span>{ex.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="home-ex-fact">Demo · composite · not shop inventory FACT</p>
      </section>

      <p className="home-quiet">Demo · composite examples · not a real shop</p>
    </div>
  )
}
