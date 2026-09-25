import CompareControl from './CompareControl'
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
  kbb,
}) {
  const thumbLabel = current
    ? 'YOUR TRUCK'
    : unit?.bodyType === 'van'
      ? 'EV VAN'
      : 'EV TRUCK'
  const ask = showAsk && !current ? formatAsk(unit?.askPrice) : null
  const showKbb = current && kbb?.known

  return (
    <div className={`unit-photo is-${size} ${current ? 'is-current' : ''}`}>
      <span className="unit-photo-glyph" aria-hidden="true">{thumbLabel}</span>
      {whisper && unit ? (
        <span className="unit-photo-whisper">{unitWhisper(unit)}</span>
      ) : null}
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
