/**
 * Official Franz FleetFit wordmark v1 (2026-09-25).
 * Compound FleetFit — Fleet white (#FFFFFF on dark / charcoal #0B1220 on light)
 * · Fit teal #1BB6A8. Space Grotesk Bold. No script, no gap, no truck/bolt.
 * Vin Not Diesel L5 joke mark is parked. No FMT chrome in this lockup.
 */
const FILES = {
  dark: {
    nav: 'fleetfit-wordmark-nav-dark.svg',
    hero: 'fleetfit-wordmark-horizontal-dark.svg',
    eyebrow: 'fleetfit-wordmark-nav-dark.svg',
  },
  light: {
    nav: 'fleetfit-wordmark-horizontal-light.svg',
    hero: 'fleetfit-wordmark-horizontal-light.svg',
    eyebrow: 'fleetfit-wordmark-horizontal-light.svg',
  },
}

function brandSrc(tone, size) {
  const palette = tone === 'light' ? FILES.light : FILES.dark
  const file = palette[size] || palette.nav
  const base = import.meta.env.BASE_URL || '/'
  return `${base}brand/${file}`
}

export default function Wordmark({
  size = 'nav',
  tone = 'dark',
  className = '',
  decorative = false,
}) {
  const src = brandSrc(tone, size)
  return (
    <img
      src={src}
      alt={decorative ? '' : 'FleetFit'}
      aria-label={decorative ? undefined : 'FleetFit'}
      aria-hidden={decorative ? true : undefined}
      className={`wordmark wordmark-${size} wordmark-${tone} ${className}`.trim()}
      draggable={false}
    />
  )
}
