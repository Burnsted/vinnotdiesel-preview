# VinNotDiesel — Business Plan v1

**Brand:** VinNotDiesel (one *t*)  
**Founder:** Ted Burns · Vero Beach, FL (Treasure Coast)  
**What it is:** An independent marketplace for EV work trucks and vans — CarGurus-style discovery crossed with Bring a Trailer / Cars & Bids–style auctions and buy-now, focused only on electric work vehicles.  
**Related brand:** Fit My Truck (fleet TCO / upfit planner). Separate public brand; referral sharing later.  
**Domains / email:** On hold — do **not** assume vinnotdiesel.com is owned.

**How to read this doc:** Sourced market facts include a URL we fetched. Anything else is labeled **ASSUMPTION** with reasoning so you can separate facts from guesses. Legal items are flagged **verify with a lawyer**.

---

## One-page summary

**Problem.** Trades and small fleets shopping used EV trucks/vans have to hunt across general classifieds and enthusiast auctions that do not speak “payload, range under load, charger at the shop, upfit.” Battery health and trade-fit are hard to compare.

**Who buys.** Landscapers, electricians, HVAC, plumbing, GCs, small fleets, and prosumers who need a work truck that plugs in — not a weekend toy.

**What we sell (product).** Listings with auction and/or buy-now; VIN + battery-health reports; trade-fit tags (payload, towing, bed/van config, charger needs). Later: financing / insurance / warranty referrals and Fit My Truck upfit handoffs.

**Where we start.** Florida first (founder on the Treasure Coast), then Southeast corridor markets with trades density and growing used EV supply.

**Three most realistic Year 1 income streams**

1. **Buyer premium / success fee** on completed sales (auction or buy-now) — the primary cash engine once sell-through exists. Peers: Cars & Bids charges buyers **5%** (min **$250**, max **$7,500**); BaT charges buyers **5%** or **10%** by category (min **$250**, caps **$7,500** / **$4,000**). Sources: [carsandbids.com/what-is](https://carsandbids.com/what-is/), [bringatrailer.com/how-bat-works](https://bringatrailer.com/how-bat-works/).
2. **Seller listing fees + featured placement** — smaller dollars early, useful for quality control and cash before volume. Peer anchors: BaT Classic **$99** list / Plus **$429**; Autotrader Private Seller Exchange listing **$9–$49** by price band. Sources: [bringatrailer.com/submit-a-vehicle](https://bringatrailer.com/submit-a-vehicle/), [bringatrailer.com/how-bat-works](https://bringatrailer.com/how-bat-works/), [Autotrader PSX fees](https://intercom.help/autotraderprivatesellerexchange/en/articles/12820777-how-much-does-it-cost-to-sell-a-car-through-psx).
3. **VIN + battery-health report upsell** — high trust value for EV work buyers; pairs with trade-fit tags. Recurrent/Black Book published that battery-informed reports improve used-EV transparency (early results: vehicles with Recurrent Reports “can sell for thousands more”). Source: [Black Book / Recurrent](https://www.blackbook.com/black-book-and-recurrent-collaborate-for-first-ev-specific-valuation-powered-by-battery-data/).

**Base-case Year 1 revenue range (modeled):** about **$90k–$160k** total marketplace revenue.  
See `income-model.md` / `income-model.csv` for conservative / base / upside and Year 2–3. Numbers that are not competitor fee schedules or published sales stats are **ASSUMPTIONS**.

**Team.** Ted + AI agents. No hires assumed in this plan.

**Immediate risk to manage.** Florida dealer / auction / advertising rules if VinNotDiesel holds inventory, takes title, or advertises vehicles it does not own — **verify with a lawyer** before go-live (see Legal).

---

## 1. Problem

Buying a used EV *work* vehicle is not the same as buying a used EV car or a diesel F-250.

- **Signal mismatch.** General sites (CarGurus, Autotrader) optimize for consumer search. Enthusiast auctions (BaT, Cars & Bids) optimize for rare / cool cars. Neither is built around “will this Lightning or E-Transit run my landscaping route with a 6-kW inverter and a ladder rack?”
- **Battery risk.** For EVs, range and battery condition drive value. Manheim has been building VIN-specific battery health into EV inspections and reported ~**106,000** used EVs sold through Manheim in **2024** vs ~**51,000** in **2023**. Source: [Manheim press release (Feb 6, 2025)](https://press.manheim.com/2025-02-06-Cox-Automotive-Launches-Manheim-Location-EV-Certification-Program,-Establishing-New-Standard-in-Managing-and-Servicing-Used-EVs-at-Scale). That wholesale surge does not give a trades buyer a retail marketplace that explains battery health in work terms.
- **Trade-fit opacity.** Payload, towing under EV conditions, cargo volume, upfit compatibility, Level 2 / DC fast needs at the shop, and fleet TCO are rarely first-class filters.
- **Trust friction.** High ASP vehicles (tens of thousands of dollars) need clean title path, escrow-like payment, and history — not Facebook Marketplace vibes.

---

## 2. Customer segments

| Segment | Need | Why VinNotDiesel |
| --- | --- | --- |
| **Trades owner-operators** (landscaping, electrical, HVAC, plumbing) | One reliable EV truck/van that fits tools and job sites | Trade-fit tags + battery report + local FL / SE inventory |
| **Small fleets (2–25 units)** | Replace diesels carefully; standardize on a few SKUs | Comparable listings, fleet seller channel later |
| **GCs / specialty contractors** | Payload + range honesty | Filter by work specs, not “sport” trims |
| **Prosumers** | Want EV truck that still works weekends | Same inventory, lighter upfit needs |
| **Sellers** (individuals, dealers, fleet managers exiting EV units) | Reach buyers who *want* EV work trucks | Niche audience + listing/report packaging |

**ASSUMPTION — segment mix Year 1:** ~60% trades / small fleet buyers, ~25% prosumers, ~15% dealers shopping retail-adjacent inventory. Reasoning: founder GTM is trades-first in FL; dealer channel usually follows once listing quality is proven.

---

## 3. Value proposition

**For buyers:** “Find electric work trucks and vans that fit the job — with VIN history, battery-health context, and trade-fit tags — then buy via auction or buy-now with a clear close path.”

**For sellers:** “Reach trades and fleets who already want EV work vehicles, not tire-kickers shopping sports cars.”

**Positioning line (working):** Independent marketplace for EV work trucks and vans — not diesel classifieds, not enthusiast auctions.

**Brand note:** Separate public brand from Fit My Truck. Later: “need an upfit / TCO plan?” → Fit My Truck; “need the truck?” → VinNotDiesel.

---

## 4. Product

### Core

- **Listings** for in-scope EV work trucks and vans (examples: Ford F-150 Lightning, E-Transit; Rivian R1T / EDV; Chevy Silverado EV / BrightDrop; GMC Sierra EV / Hummer EV; Tesla Cybertruck). Scope can expand later; keep work-use filter strict early.
- **Auction and/or buy-now.** Auction for price discovery on scarce / desirable units; buy-now for fleet refresh and time-sensitive sellers.
- **VIN report** (history / title / odometer style third-party).
- **Battery-health report** (partner or packaged data — Recurrent-class insight is the category, not a signed deal).
- **Trade-fit tags** — payload, towing, bed/van layout, charger dependency, common upfit notes, “shop L2 ready?” style flags.

### Trust / close

- Clear post-sale checklist.
- Optional escrow / payment + title partner (peer pattern: Cars & Bids SafePay powered by KeySavvy at **$198** total, plus **$99** loan-payoff surcharge if applicable). Source: [carsandbids.com/safepay](https://carsandbids.com/safepay/).

### Later (not required for launch)

- Financing, insurance, warranty referral widgets.
- Dealer / fleet subscription inventory feeds.
- Sponsored content (charger OEMs, upfitters, insurers).
- Deep Fit My Truck referral for TCO + upfit planning.

---

## 5. Go-to-market

### Phase A — Florida (days 0–90)

- Founder-led outreach on Treasure Coast / I-95 / I-4 corridors: trades associations, Ford Pro / Chevy / Rivian commercial peer groups, independent dealers with EV trucks, fleet managers cycling E-Transit / BrightDrop / Lightning.
- Seed **first 10 listings** with white-glove help (photos, trade-fit tags, reports) — see §12.
- Content: “what to check on a used Lightning for landscaping” style guides — SEO + Facebook/Nextdoor trades groups. No domain assumed; use temporary hosting / email until domains clear.

### Phase B — Southeast (roughly months 4–12)

- Expand listing acquisition to GA, AL, SC, NC, TN — same trades verticals.
- Partner with 1–2 Southeast upfitters and 1 payment/title partner.

### Phase C — Selective national (Year 2+)

- Only after FL/SE sell-through and ops playbook work. Do not dilute niche with passenger EVs.

**ASSUMPTION — CAC:** Founder time + ~$1k/mo paid social/classifieds Year 1. Reasoning: solo founder, AI-assisted content; no sales hire.

---

## 6. Competitors and honest positioning

| Player | What they are | Fee / model (sourced where public) | VinNotDiesel angle |
| --- | --- | --- | --- |
| **Cars & Bids** | Modern enthusiast auctions | Buyer **5%** (min **$250**, max **$7,500**); sellers list free, keep 100% of hammer; site cites **80%+** sell-through | They win cool cars. We win *work* EVs. Do not pretend to out-Doug Doug. |
| **Bring a Trailer** | Collector / enthusiast auctions | Seller Classic **$99**, Plus **$429**, White Glove **$2,500**/vehicle; buyer **5%** or **10%** (min **$250**; caps **$7,500** / **$4,000**) | Same: enthusiast DNA. We filter for trades utility. |
| **CarGurus** | Mass retail marketplace | Dealer packages; public U.S. price sheet not posted — “contact sales” ([dealers.cargurus.com/listings](https://dealers.cargurus.com/listings)) | Breadth without trade-fit / battery-first EV work UX. |
| **Autotrader** | Mass retail + private seller tools | PSX private listing **$9 / $29 / $49** by ask; closing fee **1%** (min **$99**), waived on Direct Offer | Same breadth problem; fee schedule is consumer-classified, not niche auction. |
| **Recurrent** | Battery data / Range Score / reports | Consumer Range Score / Sell-with-Recurrent model; Black Book partnership for battery-adjusted values | Partner / complement, not clone. We are the *marketplace*; they are battery intelligence. |
| **ACV Auctions** | Dealer-to-dealer wholesale, digital | Licensed dealers only; condition reports, transport, flooring ([acvauctions.com](https://www.acvauctions.com/)) | Wholesale B2B. We are retail / trades-facing (unless we later add a dealer lane — legal review first). |
| **Manheim** | Large wholesale auction + EV ops | ~**106k** used EVs sold via Manheim in 2024; VIN-specific battery health in inspections; EV location certification program | Wholesale / fleet remarketing giant. We serve the trades buyer Manheim does not market to directly. |

**Honest takeaway:** Do not compete with BaT/Cars & Bids on enthusiast volume or with CarGurus on national SKU count. Win on **category clarity** (EV work vehicles only) + **trade-fit + battery trust**.

---

## 7. Market context (sourced supply signals)

These are **new-vehicle U.S. sales** (not used-market registrations). They show that a used pool of EV work trucks/vans is forming — not that VinNotDiesel can capture X%.

| Model / line | 2024 U.S. figure | Source |
| --- | --- | --- |
| Ford F-150 Lightning | **33,510** (+39% YoY) | [Ford SEC exhibit / Q4 2024 sales release](https://www.sec.gov/Archives/edgar/data/37996/000003799625000002/exhibit99q42024salesrele.htm) |
| Ford E-Transit | **12,610** (+64% YoY) | Same Ford release |
| Chevy Silverado EV | **7,428** | [InsideEVs summary of GM 2024 EV sales](https://insideevs.com/news/746177/general-motors-record-2024-ev-sales/) |
| GMC Sierra EV | **1,788** | Same |
| GMC Hummer EV (pickup + SUV combined in table) | **13,993** | Same |
| BrightDrop vans | **1,529** | Same |

**Used price anchors (examples, not ASP targets):**

- KBB Fair Purchase Price for a **2025 F-150 Lightning XLT** (example ZIP 10001 at fetch): **$47,240**; private-party excellent estimate **~$46,430**. Source: [KBB](https://www.kbb.com/ford/f150-lightning/2025/xlt-pickup-4d-5-1-2-ft/).
- iSeeCars: used **2025** Lightning range **$49,042–$79,279** (avg **$66,261**); used **2025** R1T **$64,990–$89,965** (avg **$76,402**). Source: [iSeeCars compare page](https://www.iseecars.com/compare/ford-f__150_lightning-vs-rivian-r1t).

**ASSUMPTION — marketplace ASP Year 1:** **$48,000**. Reasoning: blends KBB XLT-like work trims with higher R1T/Cybertruck outliers and lower-mileage van units; deliberately below iSeeCars category averages that skew premium.

---

## 8. Operations

**Launch posture (lean):**

1. Curated listings (human + AI draft QA) — reject junk photos and incomplete VINs.
2. Standard listing checklist: VIN, mileage, battery report status, charger history if known, upfit list, payload/tow claims with caveats.
3. Auction calendar or rolling buy-now — start with whatever inventorizes faster.
4. Buyer/seller messaging templates; post-sale checklist.
5. Optional payment/title partner (KeySavvy-class) rather than building escrow Day 1.
6. Support: Ted + AI triage; escalate title/payment issues to partner.

**What we will not do early:** Hold large inventory on balance sheet, run physical auction lanes, or hire ops staff.

---

## 9. Legal and regulatory notes — **verify with a lawyer**

*Not legal advice. Florida-specific notes from fetched public sources; counsel must map VinNotDiesel’s exact operating model (classifieds vs. consignment vs. auction vs. taking title).*

### Dealer licensing trigger (FL)

- FLHSMV: any entity that buys, sells, offers, displays, or deals in **three or more** motor vehicles in any **12-month** period requires a dealer license. Source: [FLHSMV dealer licenses](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/).
- Fla. Stat. **320.27**: person who buys/sells/deals in **three or more** motor vehicles in 12 months is *prima facie* presumed a dealer; advertising a vehicle **belonging to another** generally requires a licensed dealer (owners may advertise vehicles titled in their own names). Source: [Fla. Stat. 320.27](https://www.flsenate.gov/Laws/Statutes/2025/320.27).

### Auction vs. retail license types (FL)

- **Vehicle Auction (VA):** bid sales where **buyers are licensed dealers**.
- Auctions that sell **at retail** need an **Independent (VI)** license. Source: [FLHSMV license types](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/types-of-licenses-available/).

### Insurance / bond / application (FL)

- Garage liability (or GL + business auto) minimums cited by FLHSMV: **$25,000** combined single-limit liability + **$10,000** PIP (with stated exceptions). Surety bond via form **86020** (or letter of credit alternative). Source: [FLHSMV dealer licenses](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/).
- **ASSUMPTION / secondary:** Bonding agencies commonly describe the motor vehicle dealer bond face amount as **$25,000** (e.g. [Ashton Agency summary](https://bonds.ashtonagency.com/florida-motor-vehicle-dealer-bond-requirements-2026/)). Confirm current face amount and whether VinNotDiesel’s model requires dealer licensure at all — **verify with a lawyer / FLHSMV**.

### Escrow and payments

- Peer approach: optional third-party payment + title (e.g. SafePay / KeySavvy **$198** + **$99** loan payoff). Source: [Cars & Bids SafePay](https://carsandbids.com/safepay/).
- If VinNotDiesel ever holds funds or titles itself, money-transmission / dealer / escrow rules may apply — **verify with a lawyer**.

### Practical launch paths to discuss with counsel

1. **True peer marketplace** — owners list their own titled vehicles; platform fees for software/marketing; no advertising “for” others in the statutory sense.
2. **Licensed dealer / broker / auction** — if consigning, taking possession, or running retail auctions.
3. **Hybrid** — software marketplace + licensed partner for titled transactions.

---

## 10. Team

| Role | Who | Notes |
| --- | --- | --- |
| Founder / GTM / seller ops | Ted Burns | Vero Beach, FL |
| Product / content / research / drafting | AI agents | No headcount assumed |
| Legal / accounting / title partner | Outside vendors | As needed |

No hires in the 365-day plan. Revisit only after sustained sell-through and cash-flow cover.

---

## 11. Milestones

### Next 30 days

- Lock operating model recommendation with a Florida motor-vehicle attorney (**verify with a lawyer**).
- Temporary brand presence (hosting + email) without assuming vinnotdiesel.com.
- Listing template: VIN, photos, trade-fit tags, report fields.
- Target list of 30 FL sellers (dealers, fleets, owners).
- Draft fee card (see income model ASSUMPTIONS) — soft-launch free listings OK.

### Next 90 days

- First **10 live listings** (see §12).
- First completed sale (even if fee waived for learning).
- Payment/title partner pilot decision.
- Battery-report vendor shortlist (Recurrent-class or inspection shops).
- Measure: listing → inquiry → sale conversion; time-to-sale.

### Next 365 days

- Steady FL inventory + SE expansion of seller acquisition.
- Paid fee card live (listing + buyer premium + reports).
- 2–5 dealer or fleet supply relationships.
- Fit My Truck referral path live (manual is fine).
- Revisit: license status, whether to add auction-only vs. buy-now mix, first sponsored content test.

---

## 12. First-10-listings plan

Goal: prove category clarity and learn ops — not maximize fees.

| # | Target unit type | Why | How to source |
| --- | --- | --- | --- |
| 1–3 | F-150 Lightning (work trims / Pro / XLT-like) | Largest EV truck volume signal (33,510 U.S. sales in 2024 — Ford) | FL dealers, lease returns, owner Facebook/Forum outreach |
| 4–5 | E-Transit or BrightDrop / Chevy EV van | Clear trades / delivery story | Fleet managers, Ford Pro commercial dealers |
| 6–7 | Rivian R1T or EDV | Brand gravity + work/adventure crossover | Owner groups; keep trade-fit honest |
| 8 | Silverado EV or Sierra EV | GM work-truck path | Dealer used inventory |
| 9 | Cybertruck or Hummer EV (only if work-use story is real) | Traffic magnet — do not let it redefine the brand | Only with work upfit or commercial buyer angle |
| 10 | Wildcard FL trades EV already upfitted | Best demo of trade-fit tags | Direct outreach to landscapers / HVAC shops |

**Execution checklist per listing:** 40+ photos, cold-start video, VIN report, battery-health status (even if “pending shop test”), trade-fit tags, reserve/buy-now guidance, shipping note.

**ASSUMPTION — first 10 fee policy:** Waive seller listing fees; optional buyer premium at half rate or waived on first 3 sales for testimonials. Reasoning: inventory seeding > revenue in month 1–2.

---

## 13. Key risks

| Risk | Why it matters | Mitigation |
| --- | --- | --- |
| **Licensing / advertising rules** | Can shut down GTM overnight | Lawyer before scale; choose model deliberately |
| **Thin inventory** | Empty marketplace = no buyers | Founder-led seeding; free listings early; FL focus |
| **Thin demand** | EV work adoption still niche vs diesel | Stay niche; educate on TCO via Fit My Truck later |
| **Battery distrust** | Kills high-ASP deals | Report upsell + clear caveats; shop PPI path |
| **Fee resistance** | Sellers compare to free Craigslist | Earn it with buyer quality; stay under enthusiast auction buyer fees where possible |
| **Domain / brand ops lag** | Domains on hold | Temporary stack; do not over-promise URLs |
| **Founder bandwidth** | Solo + AI | Ruthless scope; no early hires |
| **OEM / policy swings** | EV truck sales can drop (e.g. Lightning discontinuation chatter in trade press) | Used market still cycles units already sold; diversify models |

---

## 14. Sources fetched for this plan

- [Cars & Bids — What’s Cars & Bids / fees](https://carsandbids.com/what-is/)
- [Cars & Bids — SafePay](https://carsandbids.com/safepay/)
- [Bring a Trailer — How it works / fees](https://bringatrailer.com/how-bat-works/)
- [Bring a Trailer — Submit a vehicle](https://bringatrailer.com/submit-a-vehicle/)
- [Autotrader PSX — seller fees](https://intercom.help/autotraderprivatesellerexchange/en/articles/12820777-how-much-does-it-cost-to-sell-a-car-through-psx)
- [CarGurus dealer listings (no public U.S. price sheet)](https://dealers.cargurus.com/listings)
- [Ford U.S. Q4/FY 2024 sales — SEC exhibit](https://www.sec.gov/Archives/edgar/data/37996/000003799625000002/exhibit99q42024salesrele.htm)
- [InsideEVs — GM 2024 EV sales table](https://insideevs.com/news/746177/general-motors-record-2024-ev-sales/)
- [KBB — 2025 F-150 Lightning XLT values](https://www.kbb.com/ford/f150-lightning/2025/xlt-pickup-4d-5-1-2-ft/)
- [iSeeCars — Lightning vs R1T used pricing](https://www.iseecars.com/compare/ford-f__150_lightning-vs-rivian-r1t)
- [Black Book / Recurrent battery valuation](https://www.blackbook.com/black-book-and-recurrent-collaborate-for-first-ev-specific-valuation-powered-by-battery-data/)
- [Manheim EV certification / used EV volume](https://press.manheim.com/2025-02-06-Cox-Automotive-Launches-Manheim-Location-EV-Certification-Program,-Establishing-New-Standard-in-Managing-and-Servicing-Used-EVs-at-Scale)
- [Manheim EV certification page](https://site.manheim.com/solutions/evcertification)
- [ACV Auctions](https://www.acvauctions.com/)
- [FLHSMV — dealer license overview](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/)
- [FLHSMV — license types](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/types-of-licenses-available/)
- [Fla. Stat. 320.27](https://www.flsenate.gov/Laws/Statutes/2025/320.27)

---

*VinNotDiesel business plan v1 — docs only. App / styles / concept page owned elsewhere.*
