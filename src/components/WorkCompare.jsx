import { WORK_SPEC_ROWS } from '../lib/workSpec'

/**
 * On-page side-by-side vs the shop's current non-EV work vehicle.
 * Not a compare tray / edge drawer.
 */
export default function WorkCompare({ current, candidates, title, lead }) {
  return (
    <section className="work-compare" aria-labelledby="work-compare-title">
      <h2 id="work-compare-title" className="work-compare-title">
        {title}
      </h2>
      <p className="work-compare-lead">{lead}</p>
      <div className="work-compare-scroll">
        <table className="work-compare-table">
          <caption className="sr-only">
            Payload, bed / cab, and tow versus your current work truck
          </caption>
          <thead>
            <tr>
              <th scope="col" className="work-compare-stub">
                Spec
              </th>
              <th scope="col" className="is-current">
                <span className="work-compare-col-kicker">{current.kind}</span>
                <span className="work-compare-col-name">{current.heading}</span>
                <span className="work-compare-col-role">{current.role}</span>
              </th>
              {candidates.map((col) => (
                <th scope="col" key={col.id} className="is-candidate">
                  <span className="work-compare-col-kicker">{col.kicker}</span>
                  <span className="work-compare-col-name">{col.heading}</span>
                  <span className="work-compare-col-role">{col.role}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WORK_SPEC_ROWS.map((row) => (
              <tr key={row.key}>
                <th scope="row">{row.label}</th>
                <td className="is-current">
                  <SpecCell field={current.spec[row.key]} />
                </td>
                {candidates.map((col) => (
                  <td key={`${col.id}-${row.key}`}>
                    <SpecCell field={col.spec[row.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="work-compare-note">
        Figures come from listing specs already in this preview. A dash means that
        figure is not on file — we do not invent payload or tow.
      </p>
    </section>
  )
}

function SpecCell({ field }) {
  return (
    <span className={field.known ? 'work-spec-value is-known' : 'work-spec-value is-dash'}>
      {field.text}
      {field.known ? <span className="fact-badge">FACT</span> : null}
    </span>
  )
}
