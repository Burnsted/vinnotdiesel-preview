import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Wordmark from '../components/Wordmark'
import { matchPackageIdFromIntake } from '../data/package'

const TRADES = [
  'Electrical',
  'HVAC',
  'Plumbing',
  'Landscaping / lawn',
  'General contracting',
  'Other trade',
]

const REGIONS = [
  'Treasure Coast, FL',
  'South Florida',
  'Central Florida',
  'Gulf Coast, FL',
  'Other / multi-region',
]

const FLEET_SIZE_OPTIONS = [
  { value: '', label: 'Not surveyed yet' },
  { value: '1-2', label: '1–2 vehicles' },
  { value: '3-5', label: '3–5 vehicles (typical package)' },
  { value: '6-10', label: '6–10 vehicles' },
  { value: '10+', label: 'More than 10' },
]

export default function FleetIntake() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const adjusting = params.get('adjust') === '1'
  const [trade, setTrade] = useState('Electrical')
  const [fleetSize, setFleetSize] = useState('')
  const [region, setRegion] = useState('Treasure Coast, FL')
  const [dailyMiles, setDailyMiles] = useState('80-120')
  const [overnightCharge, setOvernightCharge] = useState('shop-l2')
  const [notes, setNotes] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    const intake = {
      trade,
      fleetSize: fleetSize || 'not-surveyed',
      region,
      dailyMiles,
      overnightCharge,
      notes,
    }
    navigate(`/package/${matchPackageIdFromIntake(intake)}`, { state: { intake } })
  }

  return (
    <div className="locked-page">
      <nav className="locked-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <span>Fleet intake</span>
      </nav>

      <header className="locked-page-header">
        <p className="locked-eyebrow locked-eyebrow-mark">
          <Wordmark size="eyebrow" tone="light" decorative />
          <span>Fleet swap</span>
        </p>
        <h1>{adjusting ? 'Adjust the mix' : 'Tell us about the work day'}</h1>
        <p className="locked-page-lead">
          Primary path: small-fleet used-EV packages for trade shops (typically 3–5, up to ~10).
          Fleet size can stay blank if you have not surveyed yet.
        </p>
      </header>

      <form className="intake-form" onSubmit={onSubmit}>
        <label className="intake-field">
          <span className="intake-label">Trade</span>
          <select value={trade} onChange={(e) => setTrade(e.target.value)} required>
            {TRADES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        <label className="intake-field">
          <span className="intake-label">Fleet size</span>
          <select value={fleetSize} onChange={(e) => setFleetSize(e.target.value)}>
            {FLEET_SIZE_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>{o.label}</option>
            ))}
          </select>
          <span className="intake-hint">Blank / “Not surveyed yet” is allowed.</span>
        </label>

        <label className="intake-field">
          <span className="intake-label">Region</span>
          <select value={region} onChange={(e) => setRegion(e.target.value)} required>
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>

        <fieldset className="intake-fieldset">
          <legend>Work-day constraints</legend>
          <label className="intake-field">
            <span className="intake-label">Typical daily miles</span>
            <select value={dailyMiles} onChange={(e) => setDailyMiles(e.target.value)}>
              <option value="under-60">Under 60 mi</option>
              <option value="80-120">80–120 mi</option>
              <option value="120-180">120–180 mi</option>
              <option value="180+">180+ mi</option>
              <option value="mixed">Mixed / not sure</option>
            </select>
          </label>
          <label className="intake-field">
            <span className="intake-label">Overnight charging</span>
            <select value={overnightCharge} onChange={(e) => setOvernightCharge(e.target.value)}>
              <option value="shop-l2">Shop Level 2 available</option>
              <option value="home-l2">Home / depot L2 mixed</option>
              <option value="l1-only">Level 1 only today</option>
              <option value="unknown">Not surveyed yet</option>
            </select>
          </label>
        </fieldset>

        <label className="intake-field">
          <span className="intake-label">Notes (optional)</span>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Payload, van vs pickup preference, ladder racks…"
          />
        </label>

        <div className="intake-actions">
          <button type="submit" className="btn btn-primary">
            Match a package
          </button>
          <p className="intake-hint">
            Preview opens an anonymized composite for the selected trade
            (electrical → 4-unit service package; landscaping → 2-unit hauler + lead).
          </p>
        </div>
      </form>
    </div>
  )
}
