# VinNotDiesel — Business Plan v1.1

**Brand:** VinNotDiesel (one *t*)  
**Founder:** Ted Burns · Vero Beach, FL (Treasure Coast)  
**What it is:** An independent **used EV work-truck marketplace** (web + app). CarGurus-style browse/comps clarity + BaT/Cars & Bids–style diligence culture — focused only on electric work vehicles.  
**Live preview (app owned elsewhere):** https://burnsted.github.io/vinnotdiesel-preview/  
**Related brand:** Fit My Truck (fleet TCO / upfit planner). **Separate public brand** — no FitMyTruck look, IA, or public affiliation ([team brief](https://burnsted.github.io/vinnotdiesel-preview/) product constraint). Referral sharing later is OK privately.  
**Domains / email:** On hold — do **not** assume vinnotdiesel.com is owned.

**How to read this doc:** **SOURCED** facts include a primary URL (fetched or from team research that cites one). **ASSUMPTION** rows include reasoning. Legal notes = **verify with a lawyer**. Product rules below match locked marketplace synthesis v0 (2026-09-24).

---

## One-page summary

**Problem.** Trades and small fleets shopping used EV trucks/vans hunt across general classifieds and enthusiast auctions that ignore payload, upfit, charger needs, and battery state-of-health (SOH).

**Who buys.** Landscapers, electricians, HVAC, plumbing, GCs, small fleets, municipalities, and prosumers — plus dealers/upfitters selling surplus.

**Locked product rules (v0).**  
- Commerce: **Buy Now + Make Offer** first; **auctions later**.  
- Every listing must show **battery health + how it was measured**, or it is marked **Incomplete Data**.  
- **Work specs up top** (payload/GVWR, range, charger kW, cab/bed, upfit).  
- Prices shown **all-in** / fee-transparent.  
- Not a fitment configurator. Not an enthusiast auction house that happens to have trucks.

**Where we start.** Florida first (Treasure Coast → statewide commercial desks), then Southeast, using a researched rolodex of **137** dealers nationwide that market EV work trucks (**21** in Florida). Top Florida names: **Maher Chevy / Maher Truck Center**, **Nimnicht Chevy**, **Duval Ford** (plus Essential Ford of Stuart as home-market first call).

**Supply signal (team verified sample, 2026-09-24):** **101** used EV truck/van listings with fetched prices — pickups 85 / vans 16. Sample median ask **$59,994** overall; **work-relevant mix** (Lightning, Silverado EV, Sierra EV, R1T, e-Transit, BrightDrop) median **~$51,635**. Broader market aggregates on CarGurus/Cars.com show hundreds–thousands of used listings per model (see §7) — this is not a census.

**Three most realistic Year 1 income streams** (seller-side first — avoid leading with BaT/C&B-scale **buyer** premiums on work trucks):

1. **Seller success fee** on completed Buy Now / Make Offer sales (dealers may use **subscription** instead). Peers still matter as ceiling: Cars & Bids buyer **5%** ($250–$7,500); BaT seller list **$99** / buyer **5%**. Sources: [carsandbids.com/what-is](https://carsandbids.com/what-is/), [bringatrailer.com/how-bat-works](https://bringatrailer.com/how-bat-works/).
2. **Battery SOH documentation package** — required path to a Complete listing (else Incomplete Data). Monetize facilitation / partner report, not fake SOH. Category trust anchor (Manheim already puts VIN-specific battery health into EV inspections — [Manheim EV certification](https://site.manheim.com/solutions/evcertification)).
3. **Listing + featured / promoted placement** — quality gate + cash before volume. Peer: BaT Classic **$99** / Plus **$429**; Autotrader PSX **$9–$49**. Sources: [BaT submit](https://bringatrailer.com/submit-a-vehicle/), [Autotrader PSX](https://intercom.help/autotraderprivatesellerexchange/en/articles/12820777-how-much-does-it-cost-to-sell-a-car-through-psx).

**Base-case Year 1 revenue range (modeled):** about **$70k–$150k**.  
**Base-case Year 3 range:** about **$0.7M–$1.15M**.  
Detail: `income-model.md` / `income-model.csv`.

**Team.** Ted + AI agents. No hires assumed.

**Immediate risk.** Florida dealer / advertising rules if VinNotDiesel advertises vehicles it does not own or runs retail auctions — **verify with a lawyer**. Preview is live; domains are not assumed owned.

---

## 1. Problem

- **Wrong marketplaces.** CarGurus/Autotrader optimize generic retail. BaT/Cars & Bids optimize enthusiast auctions. Neither answers: “Can I work with this truck tomorrow — battery, payload, warranty, all-in price?”
- **Battery opacity.** Used EV value tracks SOH and range. Manheim sold ~**106,000** used EVs in **2024** vs ~**51,000** in **2023** ([Manheim press](https://press.manheim.com/2025-02-06-Cox-Automotive-Launches-Manheim-Location-EV-Certification-Program,-Establishing-New-Standard-in-Managing-and-Servicing-Used-EVs-at-Scale)). Wholesale transparency is not a trades-facing retail marketplace.
- **Work-spec burial.** Payload after upfit, GVWR, charger kW, bed/cab, and known electrical/upfit issues are rarely first-class.
- **Fee / price opacity.** Pros need all-in asks (CarGurus fee-transparency lesson), not sticker games.

---

## 2. Customer segments

| Segment | Need | Why VinNotDiesel |
| --- | --- | --- |
| Trades owner-operators | One EV truck/van that fits the job | Work-spec hero + SOH + all-in price |
| Small fleets / municipalities | Comparable SKUs, diligence | Saved search/alerts; Incomplete Data filter |
| GCs / specialty contractors | Payload + range honesty | Filters for work, not “sport” |
| Prosumers | EV truck that still works | Same inventory, lighter upfit |
| Dealers / fleet / upfitters selling surplus | Reach buyers who want EV work trucks | Seller badges + dealer sub path |

**ASSUMPTION — Y1 buyer mix:** ~60% trades/fleet, ~25% prosumer, ~15% dealer/cross-shop. Reasoning: FL commercial GTM.

---

## 3. Value proposition

**Principle (locked):** A marketplace for used EV work trucks where every listing answers: *Can I work with this truck tomorrow — what’s the battery, the payload, the warranty, and the all-in price?*

| Unlike | Difference |
| --- | --- |
| CarGurus | Work/EV fields and SOH first-class — not generic lead-gen |
| BaT / Cars & Bids | Not enthusiast auction-first; commercial disclosures; **seller-side** economics in v0 |
| Fit My Truck | You **buy the truck** here — you don’t configure accessories as the core loop |

**Preview:** https://burnsted.github.io/vinnotdiesel-preview/

---

## 4. Product (locked v0 rules)

### Commerce
- **Must:** **Buy Now** (fixed) + **Make Offer** (expiry workflow).  
- **Later:** Auction (soft-close) for rare trims — do not lead with auction tax on tools.

### Listing standards (Complete vs Incomplete)
**Must for Complete listing:**
- Year/make/model/trim, VIN, mileage, location, title status, seller type (private / dealer / fleet / upfitter)
- **Battery SOH % + measurement method** (plus usable kWh if known, onboard charger kW, DC fast max)
- **Work specs up top:** payload / GVWR / curb, bed/cab, drivetrain, upfit description + photos
- Warranty remaining (battery + bumper) + transfer notes
- Known-issues checklist (modules, wreck, water, charger faults, upfit electrical)
- Photo minimum (exterior, bed/upfit, dash range, charge port, underbody/frame)
- **All-in price** (fee-transparent badge)

**If SOH missing or method unknown → status = Incomplete Data** (searchable but ranked down; “SOH-documented only” alert filter).

### Detail anatomy (priority order)
1. Hero: **all-in price · range · SOH · payload**  
2. Media + walk-around  
3. Work & EV facts strip  
4. Upfit package  
5. Warranty & battery docs  
6. History report  
7. Known issues  
8. Seller card  
9. Q&A  
10. Comps / Work Value band  
11. CTA: Message · Make Offer · Buy Now · Book PPI  

### Explicit non-goals
Fitment/parts configurator · horizontal ICE marketplace · personality auction livestream brand · requiring “cool” · opaque fees.

### Trust rails
In-platform messaging; optional escrow/title partner (peer pattern: Cars & Bids SafePay **$198** + **$99** loan payoff — [safepay](https://carsandbids.com/safepay/)); PPI hooks; sold archive from day one.

---

## 5. Go-to-market

### Phase A — Florida (0–90 days)

**Treasure Coast first call:** Essential Ford of Stuart — Lightning page  
https://www.essentialford.com/f-150-lightning.html

**Priority-5 commercial desks (statewide):**

| Dealer | Why | Evidence URLs |
| --- | --- | --- |
| **Maher Truck Center / Maher Chevrolet** (St. Petersburg) | Silverado EV **Work Truck** showroom / work-truck center | https://mahertruckcenter.com/showrooms/68c29ed0650b5ec880068e9f/ · https://maherchevrolet.worktrucksolutions.com/ |
| **Nimnicht Chevrolet** (Jacksonville) | Silverado EV WT on work-truck subdomain | https://worktrucks.nimnichtchevy.com/work-truck/2024-chevrolet-silverado-ev-crew-cab-awd-pickup-12921819 |
| **Duval Ford** (Jacksonville) | **Lightning PRO** + commercial sales | https://www.duvalford.com/ev-lightning/ · https://www.duvalford.com/2025-ford-f-150-lightning-pro-jacksonville-fl/ · https://www.duvalford.com/commercial-vehicles-sales-jacksonville/ |

**Next FL calls (priority 4):** Al Packer Ford WPB (https://www.alpackerford.net/ev-lightning), Mullinax Ford WPB, Bill Currie Ford (Lightning + E-Transit commercial), Tropical Ford Orlando (E-Transit), AutoNation Chevy Doral commercial, CDJR of Tampa Bay (ProMaster EV), AutoNation Chevy Airport (WT called out).

Florida shortlist researched: **21** dealers in rolodex / **23** in FL evidence table with public EV work-truck signals. Do **not** invent on-lot counts — marketing ≠ inventory; verify by phone/browser before quoting units.

### Phase B — Southeast (months 4–12)
Use nationwide index Phases 1B–3 (South Atlantic, East/West South Central). National top names outside FL include Capital Ford Raleigh, Chastang Ford (TX), etc. (**137** dealers in rolodex total across 10 Census divisions).

### Phase C — Selective national (Year 2+)
Only after FL/SE Complete-listing sell-through works. Recruit EV-only used specialists already in the inventory sample (e.g. EV Auto Brentwood TN, Green Wave Salem MA) for SOH-friendly stock.

**ASSUMPTION — CAC:** Founder time + ~$1k/mo paid reach Y1. No sales hire.

---

## 6. Competitors (honest)

| Player | Role | Public fees / notes | Our angle |
| --- | --- | --- | --- |
| Cars & Bids | Modern enthusiast auction | Buyer **5%** ($250–$7,500); free list; SafePay **$198** | Auction-first + cool-car ICP — we are Buy Now/Offer + work SOH |
| Bring a Trailer | Collector auction | Seller **$99** / Plus **$429** / White Glove **$2,500**; buyer **5%/10%** | Same — steal dossier culture, not “cool” gate |
| CarGurus | Mass retail | Dealer packages; U.S. $ not public ([dealers.cargurus.com/listings](https://dealers.cargurus.com/listings)); fee-transparency program | Steal all-in UX; don’t steal horizontal IA |
| Autotrader | Mass + PSX | PSX list **$9–$49**; close **1%** (min **$99**) | Breadth without work/SOH core |
| Recurrent | Battery intelligence | Range Score / reports; Black Book partnership | **Partner class**, not competitor marketplace |
| ACV / Manheim | Dealer wholesale | Manheim ~106k used EVs in 2024; VIN battery health in inspections | Wholesale — we serve trades retail |

Monetization preference vs peers: **seller success fee / dealer sub**, not a 5% buyer tax on fleet POs (marketplace synthesis v0).

---

## 7. Market & price signals

### New-vehicle U.S. sales (supply pipeline — not used counts)

| Model | 2024 U.S. | Source |
| --- | --- | --- |
| F-150 Lightning | **33,510** | [Ford SEC FY2024 sales](https://www.sec.gov/Archives/edgar/data/37996/000003799625000002/exhibit99q42024salesrele.htm) |
| E-Transit | **12,610** | Same |
| Silverado EV | **7,428** | [InsideEVs / GM table](https://insideevs.com/news/746177/general-motors-record-2024-ev-sales/) |
| Sierra EV | **1,788** | Same |
| Hummer EV (pickup+SUV in table) | **13,993** | Same |
| BrightDrop vans | **1,529** | Same |

### Used listing aggregates (team research 2026-09-24 — not de-duplicated national census)

| Model | Source | Count | URL |
| --- | --- | --- | --- |
| F-150 Lightning | CarGurus year Total Listings (sum≈1,790 if additive) | ~1,790 | https://www.cargurus.com/Cars/l-Used-Ford-F-150-Lightning-d3147 |
| F-150 Lightning | Cars.com used nationwide | **433** | https://www.cars.com/shopping/results/?stock_type=used&makes%5B%5D=ford&models%5B%5D=ford-f_150_lightning&maximum_distance=all&zip=10001 |
| Rivian R1T | Cars.com used nationwide | **354** | https://www.cars.com/shopping/results/?stock_type=used&makes%5B%5D=rivian&models%5B%5D=rivian-r1t&maximum_distance=all&zip=10001 |
| Cybertruck | Cars.com | **212** | https://www.cars.com/shopping/results/?stock_type=used&makes%5B%5D=tesla&models%5B%5D=tesla-cybertruck&maximum_distance=all&zip=10001 |
| Silverado EV | Cars.com | **161** | https://www.cars.com/shopping/results/?stock_type=used&makes%5B%5D=chevrolet&models%5B%5D=chevrolet-silverado_ev&maximum_distance=all&zip=10001 |
| e-Transit | Cars.com | **62** | https://www.cars.com/shopping/results/?stock_type=used&makes%5B%5D=ford&models%5B%5D=ford-e_transit&maximum_distance=all&zip=10001 |
| BrightDrop | Cars.com keyword+electric | **51** | https://www.cars.com/shopping/results/?stock_type=used&keyword=BrightDrop&maximum_distance=all&zip=10001&fuel_slugs[]=electric |

### Verified sample prices (101 CSV rows, fetch date 2026-09-24)

| Slice | n | Median ask | Mean ask | Min–Max |
| --- | --- | --- | --- | --- |
| All sample rows | 101 | **$59,994** | ~$57,776 | $23,999–$93,497 |
| Work-relevant mix* | 76 | **~$51,635** | ~$51,590 | $23,999–$77,685 |
| F-150 Lightning | 20 | **$44,595** | ~$43,986 | $33,080–$51,999 |
| e-Transit | 8 | **$30,071** | ~$30,548 | $23,999–$41,398 |
| BrightDrop | 8 | **$38,997** | ~$39,141 | $35,111–$45,640 |
| Silverado EV | 13 | **$67,990** | ~$64,873 | $51,387–$77,685 |

\*Lightning + Silverado EV + Sierra EV + R1T + e-Transit + BrightDrop.

**Example Complete-listing candidates already documented (EV-only dealers):**
- 2023 Lightning LARIAT · $50,900 · 45,627 mi · EV Auto — https://www.evauto.com/vehicle/used-2023-ford-f-150-lightning-lariat-1ftvw1ev9pwg10081/
- 2023 Lightning XLT · $48,400 · 26,542 mi · Green Wave — https://www.greenwaveev.com/vehicle/used-2023-ford-rayo-f-150-xlt-1ftvw1ev1pwg42328/
- 2024 Silverado EV Work Truck · $51,387 (Cars.com VDP in sample) — https://www.cars.com/vehicledetail/6217c752-4d4e-404e-9212-f7c81d381a78/

**ASSUMPTION — marketplace ASP Y1 base:** **$50,000**. Reasoning: near work-relevant sample median (~$51.6k); pulls Lightning/van weight without Cybertruck/Hummer skew ($77k/$70k medians in sample).

---

## 8. Operations

1. Curate to **Complete** standard (reject Incomplete for homepage merchandising).  
2. Buy Now / Make Offer tools; no auction ops in v0.  
3. SOH capture path: seller upload (OEM app / shop printout) **or** paid partner package.  
4. Optional escrow/title partner for remote fleet deals.  
5. Ted + AI support; escalate title/payment to partner.  
6. **Do not** hold inventory or run physical lanes early.

---

## 9. Legal — **verify with a lawyer**

- FL: dealing in **3+** vehicles / 12 months → presumed dealer; advertising **another’s** vehicle generally needs a license; owners may advertise own titled vehicles ([Fla. Stat. 320.27](https://www.flsenate.gov/Laws/Statutes/2025/320.27); [FLHSMV](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/)).  
- FL **VA** auction license = dealer buyers only; retail auctions need **VI** ([license types](https://www.flhsmv.gov/motor-vehicles-tags-titles/dealers-installers-manufacturers-distributors-importers/mv-rv-mh-dealer-broker-licenses/types-of-licenses-available/)). v0 Buy Now/Offer still needs counsel on consignment/advertising.  
- Garage liability mins + bond form **86020** per FLHSMV if licensed.  
- Escrow/holding funds → separate review.

---

## 10. Team

Ted Burns (founder/GTM) + AI agents. No hires in 365-day plan. Outside counsel/CPA/title partner as needed.

---

## 11. Milestones

### 30 days
- Counsel on FL operating model (**verify with a lawyer**).  
- Align preview (https://burnsted.github.io/vinnotdiesel-preview/) with Complete/Incomplete + Buy Now/Offer rules (app agent).  
- Outreach list: Essential Ford Stuart → Maher → Nimnicht → Duval → Bill Currie / Tropical.  
- Soft fee card: free seed listings; seller success fee drafted (see income model).

### 90 days
- **First 10 Complete listings** (§12).  
- First closed Buy Now or Make Offer (fee waived OK for learning).  
- SOH partner shortlist + escrow pilot decision.  
- Metrics: Complete rate, offer→close, time-to-sale.

### 365 days
- Steady FL Complete inventory; SE dealer expansion from 137-dealer rolodex.  
- Paid seller success + dealer subs live.  
- Manual Fit My Truck referral path.  
- Revisit auction only if rare-trim demand proves it.

---

## 12. First-10-listings plan

Goal: prove **Complete** standard with FL commercial sellers + 1–2 SOH-friendly used EV specialists. Prefer work trims over Cybertruck/Hummer traffic bait.

| # | Target | Source path | Notes |
| --- | --- | --- | --- |
| 1–2 | F-150 Lightning (Pro/XLT/work) | Essential Ford Stuart + Al Packer / Mullinax | Home market; Lightning pages linked above |
| 3–4 | Lightning PRO / commercial | **Duval Ford** | https://www.duvalford.com/2025-ford-f-150-lightning-pro-jacksonville-fl/ |
| 5–6 | Silverado EV **Work Truck** | **Maher Truck Center** + **Nimnicht Chevy** | WT showroom / work-truck VDP URLs above |
| 7 | E-Transit | Bill Currie Ford or Tropical Ford | Commercial van path; sample used e-Transits in CSV from ~$24k–$41k |
| 8 | BrightDrop / Chevy EV van | FL commercial Chevy or sample Cars.com stock | Sample BrightDrop asks ~$35k–$46k |
| 9 | Silverado EV WT (used) | National sample if FL dry — e.g. $51,387 WT VDP | https://www.cars.com/vehicledetail/6217c752-4d4e-404e-9212-f7c81d381a78/ |
| 10 | Lightning with SOH docs | EV Auto / Green Wave style seller | Force SOH+method before marking Complete |

**Per listing:** all-in price, SOH % + method, work-spec hero, upfit photos, known issues, Buy Now + Make Offer enabled.

**ASSUMPTION — seed fees:** Waive listing + success fee on first 3 closes; still require SOH for Complete.

---

## 13. Key risks

| Risk | Mitigation |
| --- | --- |
| Licensing / advertising | Counsel before consignment scale |
| Incomplete SOH compliance | Incomplete Data badge + no homepage boost |
| Thin FL used EV stock | Pull from 137-dealer rolodex + EV-only used dealers |
| Fee resistance | Seller-side story; undercut 5% buyer premiums |
| Domain lag | Preview URL live; don’t promise vinnotdiesel.com |
| FitMyTruck brand bleed | Hard IA/visual separation |
| Auction creep | Keep auction “later” until Buy Now/Offer works |

---

## 14. Sources

**Team research inputs (2026-09-24):** marketplace synthesis v0 · product brief · used EV truck inventory (101 rows) · nationwide dealer index (137) · Florida dealer shortlist. Primary URLs from those files are cited inline above.

**Also fetched for this plan:** Cars & Bids fees/SafePay · BaT fees/White Glove · Autotrader PSX · CarGurus dealer listings page · Ford SEC 2024 sales · InsideEVs GM EV table · KBB/iSeeCars price anchors · Manheim EV press · FLHSMV / Fla. Stat. 320.27 · Black Book/Recurrent.

---

*VinNotDiesel business plan v1.1 — docs only. App / styles / concept page owned elsewhere.*
