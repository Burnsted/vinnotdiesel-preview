# VinNotDiesel — Business Plan v1.2

**Brand:** VinNotDiesel (one *t*)  
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
- **Complete** also requires an **open-recall check by VIN** (e.g. F-150 Lightning NHTSA **25V-131** / Ford **25S18** — HV battery; Ford recommends limiting charge to **80%** until remedied). Source: [NHTSA Part 573 report 25V-131](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V131-1389.PDF); [owner notice PDF](https://static.nhtsa.gov/odi/rcl/2025/RIONL-25V131-1511.pdf).  
- **Work specs up top**; prices shown **all-in**.

**Where we start.** Florida first, then Southeast. Use the researched rolodex of dealers that *market* EV work vehicles (**137** nationwide / **21** Florida) for outreach — but **seed listings only from verified used stock**, not new-truck showroom pages.

**Supply signals (team-verified 2026-09-24):**  
- **101** used EV truck/van sample rows (pickups 85 / vans 16 in that CSV) with fetched asks — work-relevant median ~**$51,635**.  
- **Separate van inventory:** **249** verified used EV vans — **113** E-Transits, **68** BrightDrops; used Rivian vans listed from **$34,995** to **$46,299** (team-verified 2026-09-24).

**Three most realistic Year 1 income streams**

1. **Dealer / fleet subscriptions** — dealers rarely pay per-sale success fees and often close off-platform; sub is how dealer inventory pays.  
2. **Seller success fee on private + fleet closes** — Buy Now / Make Offer completed *on* VinNotDiesel. Peer fee *ceilings* (not our lead model): Cars & Bids buyer **5%** ([source](https://carsandbids.com/what-is/)); BaT seller **$99** + buyer **5%** ([source](https://bringatrailer.com/how-bat-works/)).  
3. **SOH documentation package + listing/featured** — required path to Complete; Incomplete if SOH/method or recall check missing.

**Base-case Year 1 revenue range (modeled):** about **$70k–$140k**.  
**Base-case Year 3 range:** about **$0.55M–$0.95M**.  
See `income-model.md` / `income-model.csv`.

**Immediate risk.** Florida dealer/advertising rules if the marketplace advertises vehicles it does not own — **verify with a lawyer**. **Dealer off-platform close** is an explicit revenue risk (see §13).

---

## 1. Problem

- Wrong marketplaces for work EVs (generic retail or enthusiast auction).  
- Battery opacity + **open recalls** that change usable range (e.g. Lightning **25V-131** 80% charge limit until repair).  
- Work specs buried; fees opaque.

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
- **Open-recall check by VIN** — result recorded on listing (open / none found / check failed). Example: certain 2022–2024 F-150 Lightnings under NHTSA **25V-131** (Ford **25S18**); Ford recommends limiting HV charge to **80%** until arrays inspected/replaced ([NHTSA 25V-131 Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V131-1389.PDF), [owner notice](https://static.nhtsa.gov/odi/rcl/2025/RIONL-25V131-1511.pdf)).  
- Work specs **up top** (payload/GVWR, range, cab/bed or van cargo, upfit)  
- Warranty remaining + known-issues checklist  
- Photo minimum + **all-in** price  

Missing SOH/method **or** missing recall check → **Incomplete Data**.

### Monetization preference
Dealer **subscription** for dealer inventory. **Success fee** mainly on private/fleet on-platform closes. Avoid leading with 5% buyer premiums.

---

## 5. Go-to-market

### 5A. Pickups / work trucks (Florida → Southeast)
- Outreach to dealers that publicly market EV work trucks (**21** FL / **137** nationwide in team rolodex) — ask for **used** consignments or subscription seats, not new DEMO/PRO pages as listings.  
- Recruit **EV-only used** retailers already in the verified sample (e.g. EV Auto, Green Wave, Ever) who have live used VDPs.  
- Private/fleet sellers via trades networks and used classifieds.

### 5B. Vans (own line)
Team-verified used EV van inventory (**2026-09-24**):

| Metric | Value |
| --- | --- |
| Verified used EV vans | **249** |
| E-Transit | **113** |
| BrightDrop | **68** |
| Used Rivian vans (listed ask range) | **$34,995 – $46,299** |

**GTM implication:** Treat vans as a parallel category with van-specific filters (roof height, cargo length, GVWR, charger), separate saved searches, and seller outreach to commercial Ford/Chevy van desks **for used/surplus**, plus fleet off-lease. Do not bury vans under pickup merchandising. The smaller 16-van slice inside the 101-row truck CSV is a sample only; the **249** count is the van program signal.

### 5C. Sequencing
Florida → Southeast → selective national after Complete sell-through works.

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

**30 days:** Counsel on FL model; Complete checklist includes recall-by-VIN; outreach for **used** stock (EV-only used retailers + private/fleet); draft sub + success-fee card.  
**90 days:** First **10 Complete used listings** (§12); first on-platform private/fleet close; first paying dealer sub.  
**365 days:** FL + SE Complete inventory (trucks + vans); paid mix live; revisit auction only if needed.

---

## 12. First-10-listings plan (**used stock only**)

Built from the verified used inventory CSV (fetch date **2026-09-24**). **No new-truck dealer showroom / PRO / WT marketing pages** as listing sources. Dealer names appear only where the sample shows a **used** VDP.

| # | Unit (used) | Ask | Miles | Seller | Listing URL |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023 F-150 Lightning Pro | $35,500 | 37,675 | Unknown (Cars.com) | https://www.cars.com/vehicledetail/525c7e0f-fc2e-453d-bd73-a61fa7b0f3ac/ |
| 2 | 2023 F-150 Lightning XLT | $36,994 | 33,479 | Unknown (Cars.com) | https://www.cars.com/vehicledetail/33a6498f-3cd4-4d7f-88b2-ab41e40a43ba/ |
| 3 | 2023 F-150 Lightning XLT | $48,400 | 26,542 | **Green Wave Electric Vehicles** (EV-only dealer, used) | https://www.greenwaveev.com/vehicle/used-2023-ford-rayo-f-150-xlt-1ftvw1ev1pwg42328/ |
| 4 | 2023 F-150 Lightning LARIAT | $50,900 | 45,627 | **EV Auto** (EV-only dealer, used) | https://www.evauto.com/vehicle/used-2023-ford-f-150-lightning-lariat-1ftvw1ev9pwg10081/ |
| 5 | 2023 Ford e-Transit Base | $23,999 | 56,127 | Unknown (Cars.com) | https://www.cars.com/vehicledetail/4fcfeb75-16a6-496e-a599-309d9e451129/ |
| 6 | 2022 Ford e-Transit T-350 Low Roof | $25,999 | 13,566 | Unknown (Cars.com) | https://www.cars.com/vehicledetail/24ce3204-9e61-4998-9cf5-7e4de61b78ea/ |
| 7 | 2025 BrightDrop 600 | $35,111 | 15,833 | Unknown (Cars.com) | https://www.cars.com/vehicledetail/dcfbefed-91d5-4d4e-a32c-a59ccab14d86/ |
| 8 | 2024 Silverado EV Work Truck | $51,387 | 4,170 | Unknown (Cars.com) | https://www.cars.com/vehicledetail/6217c752-4d4e-404e-9212-f7c81d381a78/ |
| 9 | 2022 Rivian R1T Adventure Package | $56,600 | 33,987 | **EV Auto** (used) | https://www.evauto.com/vehicle/used-2022-rivian-r1t-adventure-package-7fctgaaa2nn006912/ |
| 10 | 2024 Rivian R1T Adventure Dual Motor (FL) | $60,550 | 22,003 | Unknown (CarGurus; Ocoee, FL) | https://www.cargurus.com/Cars/l-Used-Rivian-R1T-Newark-d2837_L4760 |

**Before marking Complete:** SOH % + method, VIN open-recall check (Lightning rows: screen for **25V-131**), work-spec hero, all-in price, Buy Now + Make Offer.

**ASSUMPTION — seed fees:** Waive success fee on first 3 private/fleet closes; still require Complete fields. Dealer used partners start on subscription trial.

---

## 13. Key risks

| Risk | Why it matters | Mitigation |
| --- | --- | --- |
| **Dealers close off-platform** | Buyer finds unit on VinNotDiesel, deals at the store; **no success fee** | Price dealer value as **subscription + featured**; track assisted leads; success fee aimed at private/fleet |
| Licensing / advertising | FL dealer rules | Counsel before consignment scale |
| Incomplete SOH / recall gaps | Trust failure | Incomplete Data badge; no homepage boost |
| Thin Complete inventory | Empty marketplace | Seed from verified used URLs; EV-only used dealers |
| Van category neglect | 249-van supply ignored | Separate van GTM + filters |
| Fee resistance | Sellers compare to free ads | Seller-side story; undercut 5% buyer premiums |
| Domain lag | Domains on hold | Use preview URL; don’t promise production domain |

---

## 14. Sources

Fetched: [NHTSA 25V-131 Part 573](https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V131-1389.PDF), [NHTSA/Ford owner notice 25V131](https://static.nhtsa.gov/odi/rcl/2025/RIONL-25V131-1511.pdf), Cars & Bids / BaT / PSX / CarGurus / Ford SEC / InsideEVs / Manheim / FLHSMV as linked above.  
Team-verified (2026-09-24): 101-row used truck CSV; **249** used van program counts; 137/21 dealer rolodex (outreach only — not first-10 new-stock sources).

---

*VinNotDiesel business plan v1.2 — docs only. App owned elsewhere.*
