import { useEffect, useRef } from 'react'

/**
 * Full-bleed photo or muted looping video with poster.
 * `paused` stops playback; `reduced` skips video entirely (prefers-reduced-motion).
 * Ken Burns applies only to still posters when motion is allowed.
 */
export default function MediaFrame({
  image,
  video,
  active = true,
  paused = false,
  reduced = false,
  className = '',
  kenBurns = false,
}) {
  const ref = useRef(null)
  const useVideo = Boolean(video) && !reduced

  useEffect(() => {
    const el = ref.current
    if (!el || !useVideo) return
    if (active && !paused) {
      const p = el.play()
      if (p && typeof p.catch === 'function') p.catch(() => {})
    } else {
      el.pause()
    }
  }, [active, paused, useVideo, video])

  const stillKen = kenBurns && !useVideo && !reduced && !paused

  return (
    <div className={`media-frame ${className}`}>
      {useVideo ? (
        <video
          ref={ref}
          className="media-frame-video"
          src={video}
          poster={image}
          muted
          loop
          playsInline
          preload={active ? 'auto' : 'metadata'}
          aria-hidden="true"
          style={{ zIndex: 1 }}
        />
      ) : null}
      <div
        className={`media-frame-img ${stillKen ? 'ken-burns' : ''}`}
        style={{
          backgroundImage: `url(${image})`,
          // Poster stays behind video as decode/fallback layer
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </div>
  )
}
