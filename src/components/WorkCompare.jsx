import { COMPARE_SPEC_ROWS } from '../lib/workSpec'

/**
 * On-page side-by-side vs the shop's current non-EV work vehicle.
 * Product-bar rows: Role · Payload · Bed / capacity · Cab · Tow / pull.
 * Not a compare tray / edge drawer.
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
          current
        />
        {candidates.map((col) => (
          <CompareCard
            key={col.id}
            kicker={col.kicker}
            heading={col.heading}
            role={col.role}
            spec={col.spec}
          />
        ))}
      </div>
      <p className="work-compare-note">
        Figures come from listing specs already in this preview. A dash means that
        figure is not on file — we do not invent payload or tow.
      </p>
    </section>
  )
}

function CompareCard({ kicker, heading, role, spec, current = false }) {
  return (
    <article
      className={`work-compare-card ${current ? 'is-current' : 'is-candidate'}`}
      role="listitem"
    >
      <p className="work-compare-col-kicker">{kicker}</p>
      <h3 className="work-compare-col-name">{heading}</h3>
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
                {field.known ? <span className="fact-badge">FACT</span> : null}
              </dd>
            </div>
          )
        })}
      </dl>
    </article>
  )
}
