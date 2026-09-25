import { useFleetPick } from '../lib/fleetPick'

export default function AddToFleetButton({ pickId, size = '' }) {
  const fleet = useFleetPick()
  const inFleet = fleet.has(pickId)

  return (
    <button
      type="button"
      className={`btn ${size} ${inFleet ? 'btn-in-fleet' : 'btn-primary'}`.trim()}
      aria-pressed={inFleet}
      onClick={() => fleet.toggle(pickId)}
    >
      {inFleet ? 'In fleet' : 'Add to fleet'}
    </button>
  )
}
