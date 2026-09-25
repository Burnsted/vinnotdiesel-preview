import AddToFleetButton from './AddToFleetButton'
import { COMPARE_SPEC_ROWS } from '../lib/workSpec'

/**
 * On-page side-by-side vs the shop's current non-EV work vehicle.
 * Energy is one row. Ask lives on the EV thumb. No compare tray.
 */
export default function WorkCompare({ current, candidates, title, lead }) {
  return (
    <section className="work-compare" aria-labelledby="work-compare-title">
      <h2 id="work-compare-title" className="work-compare-title">
        {title}
      </h2>
      <p className="work-compare-lead">{lead}</p>
      <div className="work-compare-grid" role="list">
        <CompareCard
          kicker={current.kind}
          heading={current.heading}
          role={current.role}
          spec={current.spec}
          bodyType={current.bodyType}
          current
        />
        {candidates.map((col) => (
          <CompareCard
            key={col.id}
            kicker={col.kicker}
            heading={col.heading}
            role={col.role}
            spec={col.spec}
            bodyType={col.bodyType}
            pickId={col.pickId}
          />
        ))}
      </div>
      <p className="work-compare-note">
        Energy is one row: range (pack size) on the EV, tank range (MPG) on
        your current work vehicle. A dash means that figure is not on file —
        we do not invent range, tank gallons, MPG, or KBB.
      </p>
    </section>
  )
}

function CompareCard({ kicker, heading, role, spec, current = false, pickId, bodyType }) {
  const thumbLabel = current
    ? 'YOUR TRUCK'
    : bodyType === 'van'
      ? 'EV VAN'
      : 'EV TRUCK'
  const showAsk = !current && spec.ask?.known
  const showKbb = current && spec.kbbTradeIn?.known

  return (
    <article
      className={`work-compare-card ${current ? 'is-current' : 'is-candidate'}`}
      role="listitem"
    >
      <p className="work-compare-col-kicker">{kicker}</p>
      <h3 className="work-compare-col-name">{heading}</h3>
      <div className="work-compare-photo">
        <span className="work-compare-thumb-label" aria-hidden="true">{thumbLabel}</span>
        {showAsk ? (
          <span className="work-compare-ask">{spec.ask.text}</span>
        ) : null}
        {showKbb ? (
          <span className="work-compare-kbb">KBB trade-in ~{spec.kbbTradeIn.text}</span>
        ) : null}
      </div>
      <dl className="work-spec-rows">
        <div className="work-spec-row">
          <dt>Role</dt>
          <dd>
            <span className="work-spec-value is-known">{role}</span>
          </dd>
        </div>
        {COMPARE_SPEC_ROWS.map((row) => {
          const field = spec[row.key]
          return (
            <div key={row.key} className="work-spec-row">
              <dt>{row.label}</dt>
              <dd>
                <span className={field.known ? 'work-spec-value is-known' : 'work-spec-value is-dash'}>
                  {field.text}
                </span>
              </dd>
            </div>
          )
        })}
      </dl>
      {current || !pickId ? null : (
        <div className="work-compare-cta">
          <AddToFleetButton pickId={pickId} size="btn-sm" />
        </div>
      )}
    </article>
  )
}
