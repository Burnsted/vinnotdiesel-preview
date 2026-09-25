/**
 * Official Franz wordmark v1 (2026-09-25).
 * VIN white · NOT amber #DBB24A · DIESEL white. Transparent outlines
 * (Barlow Condensed ExtraBold). Light chrome swaps VIN/DIESEL to charcoal
 * #0E1B1F so the same lockup reads on white. No FMT chrome. Never mashed
 * VINNOTDIESEL.
 */
const FILES = {
  dark: {
    nav: 'vnd-wordmark-nav-dark.svg',
    hero: 'vnd-wordmark-horizontal-dark.svg',
    eyebrow: 'vnd-wordmark-nav-dark.svg',
  },
  light: {
    nav: 'vnd-wordmark-nav-light.svg',
    hero: 'vnd-wordmark-horizontal-light.svg',
    eyebrow: 'vnd-wordmark-nav-light.svg',
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
      alt={decorative ? '' : 'Vin Not Diesel'}
      aria-label={decorative ? undefined : 'Vin Not Diesel'}
      aria-hidden={decorative ? true : undefined}
      className={`wordmark wordmark-${size} wordmark-${tone} ${className}`.trim()}
      draggable={false}
    />
  )
}
