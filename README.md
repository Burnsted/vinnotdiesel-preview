# VinNotDiesel Preview

Public static web preview of **VinNotDiesel** — small-fleet used-EV swap packages for trade shops.

> Replace the mismatched fleet with used EVs that fit the work day.

## Locked product (this preview)

- **Primary:** fleet intake → package match (typically 3–7 vehicles) → per-unit Buy Now / Make Offer
- **Secondary:** single-vehicle trade match (word of mouth / shop path)
- **Money:** buyer’s fee on close (BaT-style). Package screens show listing asks only; checkout shows **fee at checkout — amount TBD**
- **Free EV layer** on each unit: battery (often “Not reported by dealer”), VIN recall placeholder, charging/trade fit, FIT SCORE
- Never claims VinNotDiesel inspected the truck; never holds vehicle funds copy
- Brand: **VinNotDiesel only** (no co-brand)

## Privacy / public preview

Real shop concepts stay private. This PR / deploy is **UI preview only**.

Public examples are composite and anonymized (e.g. “Treasure Coast electrical — ~4 service vans”). Do **not** name real shops or use real dealer VIN strings in this repo.

## Stack

- Vite + React (JSX)
- Hash router (GitHub Pages friendly)
- Base path: `/vinnotdiesel-preview/`

## Local

```bash
npm install
npm run dev
npm run build
```

## Demo path for review

1. Home education framing  
2. `/intake` — fleet intake (fleet size may be blank / “not surveyed yet”)  
3. `/package/pkg-tc-electrical-4` — anonymized 4-unit package  
4. Unit drill-in — open items + “We have not seen this truck in person.”  
5. `/checkout` — fee placeholder only  

## Deploy

GitHub Pages from this repo (`Burnsted/vinnotdiesel-preview`).
