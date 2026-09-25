# FleetFit Preview

Public static web preview of **FleetFit** — small-fleet used-EV swap packages for trade shops. Vin Not Diesel / VND L5 joke wordmark is parked.

> Used EV fleet packages that fit the work day.

## Locked product (v5 — this preview)

- **Primary:** fleet intake → package match (typically **3–5**, up to ~10) → unit drill-in → per-unit Buy Now / Make Offer, plus reserve / offer on the package
- **Secondary:** Couples Match / single-vehicle shop — word of mouth. Not the home. No inventory carousel on `/`
- **Money:** buyer’s fee on **closed units only** (BaT / Cars & Bids–style). Package browse shows listing asks only; checkout shows **Fee at checkout — amount TBD**. Never invent a fee $ or % on package cards. Buyer pays the seller / dealer. FleetFit never holds vehicle funds.
- **Free EV layer** on each unit: battery (often “Not reported by dealer”), VIN recall placeholder, charging/trade fit, FIT SCORE (`worth it` / `worth it if…` / `pass` / `not enough data`)
- Package screens mirror private-concept **structure and honesty** (FACT sticker sum, battery unknown, recalls unchecked, open items, trade-in pending) with **anonymized** public copy
- Never claims FleetFit inspected the truck
- Brand: **FleetFit** (Franz SVG lockup — Fleet white/charcoal · Fit teal). No Fit My Truck chrome. No VND L5 joke mark.

## Privacy / public preview (HARD)

Real shop concepts stay private. This PR / deploy is **UI preview only**.

- No real shop names (no King, TrueLawn, Miranda, Happy Home, Star Quality, Gary Roberts)
- No real VINs, phones, or emails
- Composite labels only (e.g. “Treasure Coast electrical — ~4 service vans”)
- Explicit: “We have not seen this truck in person.” / “Not a real shop.”
- Shop-path seed listings use `DEMO-STOCK-00x` IDs, not 17-character VIN strings

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

## Demo path for review (hash routes)

1. `/` or `/#/` — fleet-value-prop home (not Porsche / model wallpaper)
2. `/#/intake` — fleet intake (fleet size may be blank / “Not surveyed yet”)
3. `/#/package/pkg-tc-electrical-4` — anonymized 4-unit electrical package
4. `/#/package/pkg-tc-electrical-4/unit/unit-e2` — unit drill-in (Silverado EV WT)
5. `/#/checkout?package=pkg-tc-electrical-4&unit=unit-e2&action=buy` — Buy Now DEMO
6. Optional: landscaping intake or `/#/package/pkg-tc-landscape-2` — 2-unit hauler + lead

## Deploy

GitHub Pages from this repo (`Burnsted/vinnotdiesel-preview`). **Do not merge to `main` / `gh-pages` without Ted.**
