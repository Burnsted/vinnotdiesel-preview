import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [q, setQ] = useState(params.get('q') || '')

  useEffect(() => {
    setQ(params.get('q') || '')
  }, [params])

  function onSubmit(e) {
    e.preventDefault()
    const next = new URLSearchParams(params)
    if (q.trim()) next.set('q', q.trim())
    else next.delete('q')
    navigate({ pathname: '/shop', search: next.toString() ? `?${next}` : '' })
  }

  const onBrowse = location.pathname === '/shop'

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          type="button"
          className="header-menu-btn"
          aria-label="Menu"
          onClick={() => navigate('/shop')}
        >
          <span className="burger" aria-hidden="true">
            <span /><span /><span />
          </span>
          <span className="menu-label">Menu</span>
        </button>

        {onBrowse && (
          <form className="header-search" onSubmit={onSubmit} role="search">
            <div className="search-input-wrap">
              <span aria-hidden="true" style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>⌕</span>
              <input
                type="search"
                placeholder="Search make, model, upfit…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search inventory"
              />
            </div>
          </form>
        )}

        <Link to="/" className="logo" aria-label="VinNotDiesel home">
          <span className="logo-mark">
            <span className="vin">Vin</span>
            <span className="not">Not</span>
            <span className="diesel">Diesel</span>
          </span>
        </Link>

        <nav className="header-nav" aria-label="Primary">
          <Link className="header-icon-btn" to="/" title="Browse" aria-label="Browse">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14 2 9.2h7.6z" />
            </svg>
          </Link>
          <button type="button" className="header-icon-btn" title="Saved" aria-label="Saved (stub)">
            <svg width="16" height="18" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 1.5h10a1 1 0 011 1v15.2l-6-3.4-6 3.4V2.5a1 1 0 011-1z" />
            </svg>
          </button>
          <span className="badge-demo">Demo</span>
        </nav>
      </div>
    </header>
  )
}
