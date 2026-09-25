import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getModels, HERO_SLIDES } from '../data/models'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return reduced
}

function formatFrom(price) {
  if (price == null) return 'Price on request'
  return `From $${price.toLocaleString()}*`
}

export default function Home() {
  const navigate = useNavigate()
  const models = getModels()
  const reduced = usePrefersReducedMotion()
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const trackRef = useRef(null)

  // Hero auto-advance
  useEffect(() => {
    if (paused || reduced) return
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length)
    }, 5500)
    return () => clearInterval(t)
  }, [paused, reduced])

  // Carousel auto-advance via scroll
  useEffect(() => {
    if (carouselPaused || reduced) return
    const el = trackRef.current
    if (!el) return
    const t = setInterval(() => {
      setCarouselIdx((i) => {
        const next = (i + 1) % models.length
        const card = el.children[next]
        if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
        return next
      })
    }, 4500)
    return () => clearInterval(t)
  }, [carouselPaused, reduced, models.length])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const cards = [...el.children]
      if (!cards.length) return
      const mid = el.scrollLeft + el.clientWidth / 2
      let best = 0
      let bestDist = Infinity
      cards.forEach((c, i) => {
        const center = c.offsetLeft + c.offsetWidth / 2
        const d = Math.abs(center - mid)
        if (d < bestDist) { bestDist = d; best = i }
      })
      setCarouselIdx(best)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const motionOff = paused || reduced

  return (
    <div className={`home-page ${motionOff ? 'motion-paused' : ''}`}>
      {/* ── Full-bleed hero ── */}
      <section className="home-hero" aria-roledescription="carousel" aria-label="Featured models">
        <div className="home-hero-slides">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={`home-hero-slide ${i === slide ? 'is-active' : ''}`}
              aria-hidden={i !== slide}
            >
              <div
                className={`home-hero-img ${motionOff ? '' : 'ken-burns'}`}
                style={{ backgroundImage: `url(${s.image})` }}
              />
            </div>
          ))}
        </div>
        <div className="home-hero-gradient" aria-hidden="true" />

        <header className="overlay-header">
          <button type="button" className="overlay-icon-btn" aria-label="Menu" onClick={() => navigate('/shop')}>
            <span className="burger light" aria-hidden="true"><span /><span /><span /></span>
          </button>
          <Link to="/" className="overlay-wordmark" aria-label="FleetFit home">
            FleetFit
          </Link>
          <button type="button" className="overlay-icon-btn" aria-label="Account (stub)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 19c0-3.5 3-6 7-6s7 2.5 7 6" />
            </svg>
          </button>
        </header>

        <div className="home-hero-content">
          <h1 className="home-hero-title">{HERO_SLIDES[slide]?.title}</h1>
          <div className="home-hero-actions">
            <Link to={HERO_SLIDES[slide]?.href || '/shop'} className="btn-frost">
              Discover more
            </Link>
            <button
              type="button"
              className="btn-round-control"
              aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><path d="M3 2l9 5-9 5V2z" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1" y="1" width="3.5" height="10" rx="0.5" /><rect x="7.5" y="1" width="3.5" height="10" rx="0.5" /></svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ── Stacked model photo cards ── */}
      <section className="home-model-stack" aria-label="Models">
        {models.map((m) => (
          <Link
            key={m.slug}
            to={`/model/${m.slug}`}
            className={`home-stack-card ${motionOff ? '' : 'zoom-on-view'}`}
          >
            <div className="home-stack-img" style={{ backgroundImage: `url(${m.image})` }} />
            <div className="home-stack-grad" aria-hidden="true" />
            <span className="home-stack-label">{m.label}</span>
            <span className="home-stack-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </section>

      {/* ── Journey carousel ── */}
      <section className="home-journey" aria-label="Model explorer">
        <h2 className="home-journey-title">Your work truck starts now.</h2>

        <div className="home-carousel-wrap">
          <div className="home-carousel" ref={trackRef}>
            {models.map((m) => (
              <article key={m.slug} className="home-carousel-card">
                <div className="home-carousel-name" aria-hidden="true">{m.model}</div>
                <div className="home-carousel-media">
                  <div
                    className={`home-carousel-img ${motionOff ? '' : 'ken-burns-slow'}`}
                    style={{ backgroundImage: `url(${m.heroImage})` }}
                  />
                  <div className="home-carousel-overlay">
                    <span className="pill-dark">{m.tag}</span>
                    <p className="home-carousel-desc">{m.description}</p>
                    <p className="home-carousel-price">{formatFrom(m.fromPrice)}</p>
                    <Link to={`/model/${m.slug}`} className="btn-carousel-explore">
                      Explore the {m.model}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-carousel-controls">
            <div className="home-carousel-dots" role="tablist" aria-label="Carousel pages">
              {models.map((m, i) => (
                <button
                  key={m.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === carouselIdx}
                  className={i === carouselIdx ? 'is-active' : ''}
                  aria-label={`Show ${m.model}`}
                  onClick={() => {
                    const el = trackRef.current
                    const card = el?.children[i]
                    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
                    setCarouselIdx(i)
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              className="btn-round-control on-dark"
              aria-label={carouselPaused ? 'Play carousel' : 'Pause carousel'}
              onClick={() => setCarouselPaused((p) => !p)}
            >
              {carouselPaused ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><path d="M3 2l9 5-9 5V2z" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="1" y="1" width="3.5" height="10" rx="0.5" /><rect x="7.5" y="1" width="3.5" height="10" rx="0.5" /></svg>
              )}
            </button>
          </div>
        </div>

        <p className="home-price-footnote">
          *From price is the lowest all-in price among demo listings for that model. Fees and taxes vary; not real inventory.
        </p>

        <div className="home-shop-all">
          <Link to="/shop" className="btn btn-primary home-shop-btn">
            Shop all trucks
          </Link>
        </div>
      </section>
    </div>
  )
}
