import CompareControl from './CompareControl'
import ListingPhoto, { PhotoPending } from './ListingPhoto'
import { formatAsk } from '../lib/workSpec'
import { unitWhisper } from '../lib/compareSet'

export default function UnitPhoto({
  unit,
  packageId,
  size = 'hero',
  showAsk = false,
  showCompare = true,
  whisper = false,
  current = false,
  bodyType,
  kbb,
  headline,
}) {
  const body = current
    ? (bodyType || 'truck')
    : unit?.bodyType === 'van'
      ? 'van'
      : 'truck'
  const thumbLabel = current
    ? 'YOUR TRUCK'
    : body === 'van'
      ? 'EV VAN'
      : 'EV TRUCK'
  const ask = showAsk && !current ? formatAsk(unit?.askPrice) : null
  const showKbb = current && kbb?.known

  return (
    <div className={`unit-photo is-${size} is-${body} has-photo ${current ? 'is-current' : ''}`}>
      {current ? (
        <PhotoPending current />
      ) : (
        <ListingPhoto vehicle={unit} className="unit-photo-img" />
      )}
      <span className="unit-photo-glyph sr-only">{thumbLabel}</span>
      {whisper && unit ? (
        <span className="unit-photo-whisper">{unitWhisper(unit)}</span>
      ) : null}
      {headline ? <span className="unit-photo-headline">{headline}</span> : null}
      {ask?.known ? <span className="unit-photo-ask">{ask.text}</span> : null}
      {showKbb ? (
        <span className="unit-photo-kbb">KBB trade-in ~{kbb.text}</span>
      ) : null}
      {showCompare && packageId && unit && !current ? (
        <CompareControl packageId={packageId} unitId={unit.id} />
      ) : null}
    </div>
  )
}
