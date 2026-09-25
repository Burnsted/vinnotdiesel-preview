/**
 * Official Franz wordmark v2 (2026-09-25) — L5 system, no truck/bolt.
 * VIN ALL CAPS Space Grotesk Bold · sky #68B0F0
 * not lowercase Satisfy script · neon mint #3DDC84
 * DIESEL ALL CAPS Space Grotesk Bold · white on dark / charcoal #0D1520 on light
 * Never mashed VINNOTDIESEL. No amber. No FMT chrome.
 */
const FILES = {
  dark: {
    nav: 'vnd-wordmark-nav-dark.svg',
    hero: 'vnd-wordmark-horizontal-dark.svg',
    eyebrow: 'vnd-wordmark-nav-dark.svg',
  },
  light: {
    nav: 'vnd-wordmark-horizontal-light.svg',
    hero: 'vnd-wordmark-horizontal-light.svg',
    eyebrow: 'vnd-wordmark-horizontal-light.svg',
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
