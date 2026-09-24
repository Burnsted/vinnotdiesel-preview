# VinNotDiesel — Business Plan v1.2

**Brand:** VinNotDiesel (one *t*) · **Plan version:** v1.3  
**What it is:** An independent **used EV work-truck and work-van marketplace** (web + app). CarGurus-style browse/comps clarity + BaT/Cars & Bids–style diligence — electric work vehicles only.  
**Live preview (app owned elsewhere):** https://burnsted.github.io/vinnotdiesel-preview/  
**Domains / email:** On hold — do **not** assume vinnotdiesel.com is owned.  
**Team:** Founder + AI agents. No hires assumed. Keep public docs brand-neutral apart from VinNotDiesel.

**How to read this doc:** **SOURCED** facts include a primary URL (fetched) or are labeled as **team-verified** with date. **ASSUMPTION** rows include reasoning. Legal = **verify with a lawyer**. Product rules match locked marketplace synthesis v0 (2026-09-24).

---

## One-page summary

**Problem.** Trades and small fleets shopping used EV trucks/vans hunt across general classifieds and enthusiast auctions that ignore payload, upfit, charger needs, open recalls, and battery state-of-health (SOH).

**Who buys.** Landscapers, electricians, HVAC, plumbing, GCs, small fleets, municipalities, and prosumers — plus private sellers and fleets exiting EV units. Dealers may list used stock via subscription.

**Locked product rules (v0).**  
- Commerce: **Buy Now + Make Offer** first; **auctions later**.  
- Every listing must show **battery health + how it was measured**, or it is **Incomplete Data**.  
- **Complete** also requires an **open-recall check by VIN**. Examples:  
  - F-150 Lightning NHTSA **25V-131** / Ford **25S18** — HV battery; limit charge to **80%** until remedied ([Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V131-1389.PDF), [owner notice](https://static.nhtsa.gov/odi/rcl/2025/RIONL-25V131-1511.pdf)).  
  - E-Transit NHTSA **25V-860** / Ford **25SD9** — left rear axle half-shaft may disengage from the drive unit; loss of drive / rollaway risk ([Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V860-8209.pdf), [NHTSA ack](https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V860-1053.pdf)).  
- **Work specs up top**; prices shown **all-in**.

**Where we start.** Florida first, then Southeast. **First listings** come from Florida sellers that already have **verified used** EV work stock — not from franchise desks that only market new EV trucks. Those franchise names stay as **dealer subscription targets** only (see §5 / §12).

**Florida field check (team-verified 2026-09-24):** Not one checked FL listing shows battery health **% plus how it was measured** (one seller shows only a 1–5 grade). **Every FL unit would be Incomplete Data today.** Battery documentation is therefore the core seller pitch and onboarding step; **SOH package attach rate is the key early metric**.

**Supply signals (team-verified 2026-09-24):**  
- **101** used EV truck/van sample rows nationally (pickups 85 / vans 16) — work-relevant median ~**$51,635**.  
- **249** verified used EV vans nationally — **113** E-Transits, **68** BrightDrops; Rivian vans **$34,995–$46,299**.  
- FL used examples: Jacksonville EV-only used dealer with ~**11** used E-Transits at **$27k–$31k**; Miami truck center with the **only used Rivian van in FL** (seller names kept generic in this public doc).

**Three most realistic Year 1 income streams**

1. **Dealer / fleet subscriptions** — including franchise desks with no used stock yet (subscription targets).  
2. **Seller success fee on private + fleet closes** — on-platform Buy Now / Make Offer.  
3. **SOH documentation package** (+ listing/featured) — the path from Incomplete → Complete; early attach is the unlock metric.

**Base-case Year 1 revenue range (modeled):** about **$65k–$130k**.  
**Base-case Year 3 range:** about **$0.55M–$0.95M**.  
See `income-model.md` / `income-model.csv` (Y1 SOH attach lowered after FL field check).

**Immediate risk.** Florida dealer/advertising rules if the marketplace advertises vehicles it does not own — **verify with a lawyer**. **Dealer off-platform close** is an explicit revenue risk (see §13).

---

## 1. Problem

- Wrong marketplaces for work EVs (generic retail or enthusiast auction).  
- Battery opacity + **open recalls** that change usable range or drivability (e.g. Lightning **25V-131** 80% charge limit; E-Transit **25V-860** half-shaft).  
- Work specs buried; fees opaque.
- **Florida listing gap:** field check found **no** SOH % + method on checked FL ads — marketplace trust has to be built, not scraped.

---

## 2. Customer segments

| Segment | Need |
| --- | --- |
| Trades / small fleets / municipalities | Work-ready EV truck or van with SOH + recall honesty |
| Prosumers | Same inventory, lighter upfit |
| Private / fleet sellers | Reach buyers who want EV work units; pay success fee on close |
| Franchise / independent / EV-only dealers with **used** stock | Audience + subscription listing seat (not per-sale tax) |

---

## 3. Value proposition

Every Complete listing answers: *Can I work with this truck or van tomorrow — battery, recalls, payload, warranty, all-in price?*

Unlike CarGurus: SOH + work fields + recall check first-class.  
Unlike BaT / Cars & Bids: not auction-first; seller-side economics for tools.  
Unlike horizontal ICE classifieds: EV work category only.

---

## 4. Product (locked v0)

### Commerce
**Buy Now + Make Offer** (must). Auction (later).

### Complete vs Incomplete
**Complete requires all of:**
- Identity hygiene (VIN, miles, title, seller type, location)  
- **Battery SOH % + measurement method** (+ usable kWh / charger kW when known)  
- **Open-recall check by VIN** — result recorded on listing (open / none found / check failed). Examples:  
  - Certain 2022–2024 F-150 Lightnings — NHTSA **25V-131** (Ford **25S18**); limit HV charge to **80%** until arrays inspected/replaced ([Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V131-1389.PDF), [owner notice](https://static.nhtsa.gov/odi/rcl/2025/RIONL-25V131-1511.pdf)).  
  - Certain 2022–2025 E-Transits — NHTSA **25V-860** (Ford **25SD9**); left rear half-shaft may not be fully seated in the PDU → loss of drive / rollaway risk ([Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V860-8209.pdf), [NHTSA ack](https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V860-1053.pdf)).  
- Work specs **up top** (payload/GVWR, range, cab/bed or van cargo, upfit)  
- Warranty remaining + known-issues checklist  
- Photo minimum + **all-in** price  

Missing SOH/method **or** missing recall check → **Incomplete Data**.

**Florida reality check (team field check 2026-09-24):** zero checked FL listings meet SOH % + method. A 1–5 battery “grade” alone is **not** Complete. Treat battery documentation as onboarding step #1 for every FL seller.

### Monetization preference
Dealer **subscription** for dealer inventory. **Success fee** mainly on private/fleet on-platform closes. Avoid leading with 5% buyer premiums.

---

## 5. Go-to-market

### 5A. Core seller pitch (Florida first): battery documentation
**Pitch:** “Listings without battery health **% + measurement method** stay Incomplete and get buried. We help you document SOH so trades buyers can trust the van or truck.”  
**Onboarding step 1:** capture SOH % + method (shop printout, OEM app export, or paid SOH package).  
**Key early metric:** **SOH package / Complete attach rate** on FL listings (field baseline = **0%** Complete on checked units, 2026-09-24).

### 5B. Pickups / work trucks — two tracks
**Track 1 — First listings (verified used stock):** Florida sellers that already hold used EV work inventory (see §12). Do **not** treat new-truck marketing pages as listing sources.

**Track 2 — Dealer subscription targets (no verified used EV work stock in FL field check):** Maher Chevy / Maher Truck Center, Nimnicht Chevy, Duval Ford, and Essential Ford Stuart — demoted to **subscription / future used-feed** outreach only. They market EV work trucks but had **no verifiable used EV work stock** in the 2026-09-24 Florida field check. Sell them audience + Incomplete→Complete tooling, not “we’ll list your new PRO/WT page.”

Broader rolodex (**21** FL / **137** nationwide) remains useful for the same subscription conversation once used stock appears.

### 5C. Vans (own line)
Team-verified used EV van inventory (**2026-09-24**):

| Metric | Value |
| --- | --- |
| Verified used EV vans | **249** |
| E-Transit | **113** |
| BrightDrop | **68** |
| Used Rivian vans (listed ask range) | **$34,995 – $46,299** |

**FL van seed:** Jacksonville EV-only used dealer (~**11** used E-Transits, asks ~**$27k–$31k**); Miami truck center (only used Rivian van found in FL). Screen E-Transits for **25V-860** on VIN recall check.

**GTM:** Van filters, saved searches, and surplus/off-lease outreach — do not bury vans under pickup merchandising.

### 5D. Sequencing
Florida used-stock sellers + battery onboarding → Southeast → selective national.

---

## 6. Competitors

| Player | Notes | Our angle |
| --- | --- | --- |
| Cars & Bids | Buyer **5%** ($250–$7,500); SafePay **$198** | Auction + cool-car ICP |
| Bring a Trailer | Seller **$99** / Plus **$429** / White Glove **$2,500**; buyer **5%/10%** | Steal dossier culture only |
| CarGurus | Dealer packages; U.S. $ not public | Steal all-in UX |
| Autotrader PSX | List **$9–$49**; close **1%** | General classifieds |
| Recurrent / Manheim | Battery data / wholesale EV ops | Partner class / wholesale |

Sources: [C&B](https://carsandbids.com/what-is/), [SafePay](https://carsandbids.com/safepay/), [BaT](https://bringatrailer.com/how-bat-works/), [BaT White Glove](https://bringatrailer.com/whiteglove/), [PSX](https://intercom.help/autotraderprivatesellerexchange/en/articles/12820777-how-much-does-it-cost-to-sell-a-car-through-psx), [CarGurus dealers](https://dealers.cargurus.com/listings).

---

## 7. Market & used price signals

### New-vehicle pipeline (not used counts)
Lightning **33,510** / E-Transit **12,610** (2024) — [Ford SEC](https://www.sec.gov/Archives/edgar/data/37996/000003799625000002/exhibit99q42024salesrele.htm). Silverado EV **7,428** — [InsideEVs GM table](https://insideevs.com/news/746177/general-motors-record-2024-ev-sales/).

### Used aggregates (team research 2026-09-24)
Cars.com used nationwide: Lightning **433**, R1T **354**, Silverado EV **161**, e-Transit **62** (URLs in prior plan research / inventory doc). CarGurus year-table sums are larger with additive caveats.

### 101-row verified sample medians (fetched asks)
Overall median **$59,994**; work-relevant mix median ~**$51,635**; Lightning median **$44,595**; e-Transit median **$30,071**.

**ASSUMPTION — model ASP:** **$50,000** base (near work-relevant sample median).

---

## 8. Operations

Curate to Complete (SOH + method + VIN recall check + work hero + all-in). Buy Now / Make Offer. Optional escrow/title partner. Founder + AI support. No inventory holding early.

---

## 9. Legal — **verify with a lawyer**

FL 3+ vehicles / advertising another’s vehicle rules — [Fla. Stat. 320.27](https://www.flsenate.gov/Laws/Statutes/2025/320.27); [FLHSMV](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/). VA vs VI license types if auction ever launches. Escrow/funds handling if self-operated.

---

## 10. Team

Founder + AI agents. No hires in the 365-day plan. Outside counsel / title partner as needed.

---

## 11. Milestones

**30 days:** Counsel on FL model; battery-doc onboarding live; VIN recall check includes **25V-131** + **25V-860**; approach Jacksonville / Miami used-stock sellers; franchise desks as **subscription targets** only.  
**90 days:** First **10 FL used listings** (§12) with SOH path in progress; measure **Complete attach rate** vs 0% field baseline; first paying sub.  
**365 days:** FL + SE Complete inventory (trucks + vans); paid mix live.

---

## 12. First-10-listings plan (**Florida used stock only**)

**Source rule:** First 10 come from **Florida sellers that have verified used EV work stock** (team field check **2026-09-24**). Seller names kept **generic** in this public doc.

**Not listing sources:** Maher Chevy / Maher Truck Center, Nimnicht Chevy, Duval Ford, Essential Ford Stuart — **dealer subscription targets only** (no verifiable used EV work stock in that field check).

| # | Unit type (used) | Ask guidance | FL seller (generic) | Notes |
| --- | --- | --- | --- | --- |
| 1–8 | Ford E-Transit | ~**$27,000–$31,000** | Jacksonville EV-only used dealer (~**11** used E-Transits on lot) | Team field check 2026-09-24. Screen each VIN for **25V-860**. |
| 9 | Rivian van | Team FL find | Miami truck center | **Only used Rivian van in FL** in that field check. |
| 10 | Additional E-Transit (or other FL used work EV from same Jacksonville lot) | Within dealer’s ~$27k–$31k E-Transit band | Jacksonville EV-only used dealer | Prefer staying on verified FL used stock vs out-of-state seeds. |

**Status today:** All of these would publish as **Incomplete Data** until SOH **% + method** is captured (field check: no FL listing met that bar; a 1–5 grade is insufficient).

**Onboarding before Complete:** (1) battery SOH % + method, (2) VIN open-recall check, (3) work-spec hero + all-in price, (4) Buy Now + Make Offer.

**ASSUMPTION — seed fees:** Waive success fee on first 3 private/fleet closes; heavily subsidize or include SOH package on first-10 to create Complete exemplars. Franchise subscription targets start on trial seats with no fake used inventory.

**Key early metric:** share of FL listings that reach **Complete** (SOH attach). Model ASSUMPTION after field baseline: Y1 base SOH attach **40%** (was 85%) — labeled in `income-model.csv`.

---

## 13. Key risks

| Risk | Why it matters | Mitigation |
| --- | --- | --- |
| **Dealers close off-platform** | Buyer finds unit on VinNotDiesel, deals at the store; **no success fee** | Price dealer value as **subscription + featured**; success fee aimed at private/fleet |
| **FL battery-doc gap** | Field check: **0%** of checked FL listings have SOH % + method → all Incomplete | Battery onboarding as core pitch; track Complete attach as #1 early metric |
| Licensing / advertising | FL dealer rules | Counsel before consignment scale |
| Franchise desks without used stock | Wasted listing ops if treated as inventory sources | Keep Maher / Nimnicht / Duval / Essential as **subscription targets** only |
| Thin Complete inventory | Empty trustworthy marketplace | Seed Jacksonville / Miami used stock; subsidize first SOH packages |
| Van category neglect | 249-van supply ignored | Separate van GTM + **25V-860** checks |
| Fee resistance | Sellers compare to free ads | Seller-side story; undercut 5% buyer premiums |
| Domain lag | Domains on hold | Use preview URL; don’t promise production domain |

---

## 14. Sources

Fetched: [NHTSA 25V-131 Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V131-1389.PDF), [25V-131 owner notice](https://static.nhtsa.gov/odi/rcl/2025/RIONL-25V131-1511.pdf), [NHTSA 25V-860 Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V860-8209.pdf), [25V-860 NHTSA ack](https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V860-1053.pdf), Cars & Bids / BaT / PSX / CarGurus / Ford SEC / InsideEVs / FLHSMV as linked above.  
Team-verified (2026-09-24): 101-row used truck CSV; **249** used van counts; FL field check (battery-doc gap; Jacksonville ~11 E-Transits; Miami Rivian van; Maher/Nimnicht/Duval/Essential = subscription targets only).

---

*VinNotDiesel business plan v1.2 — docs only. App owned elsewhere.*
