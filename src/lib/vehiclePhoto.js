/**
 * Demo-composite vehicle photos (Wikimedia Commons, resized webp).
 * Never treat these as shop inventory or FACT capacity.
 *
 *   lightning.webp   2023 Ford F-150 Lightning Pro
 *   cybertruck.webp  Tesla Cybertruck
 *   r1t.webp         2022 Rivian R1T Launch Green
 *   etransit.webp    Ford E-Transit
 *   silverado.webp   2024 Chevrolet Silverado EV WT
 *   transit.webp     Ford Transit 250 cargo
 *   promaster.webp   2018 Ram ProMaster 1500 cargo
 *   hummer.webp      GMC Hummer EV Pickup
 *   current.webp     2018 Ford F-150 Crew Cab (current non-EV stand-in)
 */

import lightning from '../assets/vehicles/lightning.webp'
import cybertruck from '../assets/vehicles/cybertruck.webp'
import r1t from '../assets/vehicles/r1t.webp'
import etransit from '../assets/vehicles/etransit.webp'
import silverado from '../assets/vehicles/silverado.webp'
import transit from '../assets/vehicles/transit.webp'
import promaster from '../assets/vehicles/promaster.webp'
import hummer from '../assets/vehicles/hummer.webp'
import current from '../assets/vehicles/current.webp'

export const HERO_PLATE_PHOTO = lightning

export const EXAMPLE_STRIP = {
  lightning,
  cyber: cybertruck,
  r1t,
}

function norm(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
}

function keyOf(vehicle) {
  return `${norm(vehicle?.make)}|${norm(vehicle?.model)}`
}

const EXACT = {
  'ford|f 150 lightning': lightning,
  'ford|lightning': lightning,
  'tesla|cybertruck': cybertruck,
  'rivian|r1t': r1t,
  'ford|e transit': etransit,
  'chevrolet|silverado ev': silverado,
  'gmc|sierra ev': silverado,
  'ram|promaster ev': promaster,
  'ram|promaster': promaster,
  'ford|transit': transit,
  'gmc|hummer ev': hummer,
}

export function vehiclePhotoFor(vehicle = {}) {
  const exact = EXACT[keyOf(vehicle)]
  if (exact) return exact

  const model = norm(vehicle.model)
  if (model.includes('lightning')) return lightning
  if (model.includes('cyber')) return cybertruck
  if (model.includes('r1t')) return r1t
  if (model.includes('e transit') || model.includes('etransit')) return etransit
  if (model.includes('silverado')) return silverado
  if (model.includes('sierra')) return silverado
  if (model.includes('promaster')) return promaster
  if (model.includes('hummer')) return hummer
  if (model.includes('transit')) return transit
  if (vehicle.bodyType === 'van') return etransit
  return lightning
}

export function currentWorkPhoto({ bodyType } = {}) {
  return bodyType === 'van' ? transit : current
}

export function exampleStripPhoto(kind) {
  return EXAMPLE_STRIP[kind] || lightning
}
