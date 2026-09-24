# VinNotDiesel — Income Model v1.1

Companion to `business-plan.md`. Spreadsheet: `income-model.csv`.

**Product lock (v0):** Buy Now + Make Offer (auctions later); mandatory battery SOH + method or Incomplete Data; work specs up top; all-in prices; **prefer seller-side monetization** over BaT/C&B-scale buyer premiums.

**Rule:** Competitor fees and published/team-verified listing stats are **SOURCED**. VinNotDiesel prices, volumes, and costs are **ASSUMPTIONS**.

---

## Snapshot

| | Conservative Y1 | Base Y1 | Upside Y1 | Base Y3 |
| --- | --- | --- | --- | --- |
| Avg listings / month | 4 | 8 | 15 | 50 |
| Sell-through | 40% | 55% | 65% | 65% |
| ASP | $45,000 | $50,000 | $55,000 | $52,000 |
| **Total revenue** | **~$37k** | **~$111k** | **~$265k** | **~$0.90M** |

**Base-case Year 1 range (one-pager):** **~$70k–$150k** (band around modeled ~$111k).  
**Base-case Year 3 range:** **~$0.7M–$1.15M** (band around modeled ~$904k).

---

## Revenue streams (v0 priority)

| Priority | Stream | Notes | Peer anchor (sourced) |
| --- | --- | --- | --- |
| 1 | **Seller success fee** on closed Buy Now / Make Offer | Primary take for private/fleet sellers | C&B buyer **5%** is a *ceiling to undercut*, not our v0 lead ([C&B](https://carsandbids.com/what-is/)) |
| 1b | **Dealer / fleet subscription** | Dealers may pay monthly instead of per-sale success | CarGurus dealer $ **not public** ([listings](https://dealers.cargurus.com/listings)) |
| 2 | **SOH documentation package** | Path to Complete listing; Incomplete Data if missing | Manheim VIN battery health in EV inspections ([Manheim](https://site.manheim.com/solutions/evcertification)); Recurrent/Black Book battery-adjusted values ([Black Book](https://www.blackbook.com/black-book-and-recurrent-collaborate-for-first-ev-specific-valuation-powered-by-battery-data/)) |
| 3 | **Listing + featured / promoted** | Quality gate + early cash | BaT **$99** / **$429** ([submit](https://bringatrailer.com/submit-a-vehicle/)); PSX **$9–$49** ([PSX](https://intercom.help/autotraderprivatesellerexchange/en/articles/12820777-how-much-does-it-cost-to-sell-a-car-through-psx)) |
| 4 | Financing / insurance / warranty referrals | After close path exists | No public bounty schedules fetched |
| 5 | Fit My Truck upfit referral | Sister brand; separate public face | Internal ASSUMPTION |
| 6 | Sponsored content | Charger / upfitter / insurer | Flat tests |
| Later | Buyer premium | Optional convenience only — **not** v0 lead | BaT/C&B 5% |

**Avoid v0:** Leading with 5% buyer premiums on fleet purchases (marketplace synthesis).

---

## Fee card ASSUMPTIONS (proposed)

| Item | Amount | Reasoning |
| --- | --- | --- |
| Seller success fee | **3%** of closed price, min **$500**, max **$3,000** | Material but below C&B/BaT buyer 5%; fleets hate buyer tax on POs |
| Dealer/fleet sub | **$299/mo** Y1 → **$349/mo** Y3 | Quote-only category (CarGurus); trial until first deals |
| Listing fee | **$79** (often $0 in Y1 seed) | Below BaT Classic $99 |
| Featured / promoted | **$149** | Placement only (BaT Plus $429 includes photos) |
| SOH documentation package | **$129** | Facilitated partner read / packaged report so listing can be Complete |
| Financing referral | **$250** flat | Until partner contract |
| Insurance / warranty | **$125** / **$200** | Until partner contract |
| Fit My Truck referral | **$100–$150** | Internal |

At **ASSUMPTION ASP $50,000**, seller success fee = **$1,500** (under $3,000 max).

---

## ASP anchor (sourced sample + assumption)

Team verified **101** used EV truck/van asks (2026-09-24 CSV):

| Slice | Median ask | Source |
| --- | --- | --- |
| All 101 rows | **$59,994** | Team inventory sample (fetched listing pages/JSON) |
| Work-relevant mix (Lightning, Silverado EV, Sierra EV, R1T, e-Transit, BrightDrop) | **~$51,635** | Same sample |
| F-150 Lightning (n=20) | **$44,595** | Same |
| e-Transit (n=8) | **$30,071** | Same |

Example primary listing URLs in sample:  
https://www.evauto.com/vehicle/used-2023-ford-f-150-lightning-lariat-1ftvw1ev9pwg10081/ ($50,900) ·  
https://www.greenwaveev.com/vehicle/used-2023-ford-rayo-f-150-xlt-1ftvw1ev1pwg42328/ ($48,400) ·  
https://www.cars.com/vehicledetail/6217c752-4d4e-404e-9212-f7c81d381a78/ (Silverado EV WT $51,387).

**ASSUMPTION — model ASP:** base Y1 **$50,000** (rounded toward work-relevant median; not Cybertruck/Hummer-skewed overall median).

Broader market size (aggregates, not de-duplicated census): Cars.com used Lightning **433**, R1T **354**, Silverado EV **161**, e-Transit **62** (URLs in business plan §7). CarGurus year-table sums are larger but additive caveats apply.

---

## Volume ASSUMPTIONS

| Driver | Conservative | Base | Upside | Reasoning |
| --- | --- | --- | --- | --- |
| Y1 listings/mo | 4 | 8 | 15 | Founder + FL dealer desk outreach (Maher, Nimnicht, Duval, Essential Stuart) |
| Y2 / Y3 listings/mo | 12 / 25 | 25 / 50 | 40 / 80 | SE then selective national from 137-dealer rolodex |
| Sell-through | 40→55% | 55→65% | 65→70% | Below C&B claimed **80%+** ([C&B](https://carsandbids.com/what-is/)) until density exists |
| SOH package attach | 70–95% of listings | | | Required for Complete; Incomplete listings don’t buy package |

---

## Scenario math (rounded)

### Year 1

| Metric | Conservative | Base | Upside |
| --- | --- | --- | --- |
| Listings / year | 48 | 96 | 180 |
| Units sold | 19 | 53 | 117 |
| GMV | $0.86M | $2.65M | $6.44M |
| Seller success fees | $25.7k | $79.5k | $193.1k |
| SOH packages | $4.4k | $10.6k | $22.1k |
| Listing + featured | $1.7k | $5.9k | $16.0k |
| Referrals + FMT + sponsored | $3.4k | $9.4k | $23.2k |
| Dealer/fleet subs | $1.8k | $5.4k | $10.8k |
| **Total revenue** | **~$37k** | **~$111k** | **~$265k** |

### Year 2–3 (base)

| | Base Y2 | Base Y3 |
| --- | --- | --- |
| Listings / year | 300 | 600 |
| Units sold | 180 | 390 |
| GMV | $9.4M | $20.3M |
| **Total revenue** | **~$411k** | **~$904k** |

Seller success fee remains the majority (~65–70%) of revenue.

---

## Costs (ASSUMPTIONS) and break-even

| Cost bucket | Y1 base | Y2 base | Y3 base |
| --- | --- | --- | --- |
| Hosting / tools / AI | $6,000 | $10,000 | $18,000 |
| Legal / compliance consult | $10,000 | $5,000 | $8,000 |
| Insurance / bond if licensed | $2,500 | $3,500 | $5,000 |
| SOH partner COGS (gap vs $129 retail) | $4,000 | $12,000 | $28,000 |
| Payment/title tooling | $2,000 | $4,000 | $8,000 |
| Marketing / FL→SE travel | $12,000 | $24,000 | $40,000 |
| Contingency | $3,000 | $5,000 | $8,000 |
| **Total opex (no salaries)** | **~$39.5k** | **~$63.5k** | **~$115k** |

**Break-even (base, cash opex only):** Y1 modeled ~$111k vs ~$40k opex → cash-positive *if* base volume hits — before founder living costs (**ASSUMPTION** founder draw $0 in model). Conservative Y1 (~$37k) ≈ break-even / slight loss vs lean opex.

---

## What moves the needle

1. **Complete listings/month** from Maher / Nimnicht / Duval / Essential desks.  
2. **Sell-through** on Buy Now / Make Offer (not auction).  
3. **SOH attach** — Incomplete Data cannot be the majority of the homepage.  
4. **Dealer subs** once audience exists.

---

## Sensitivity (base Y1)

| Change | Approx. impact |
| --- | --- |
| ASP $50k → $45k | Success fees −~$8k |
| Success fee 3% → 2% | Success fees −~$26k |
| Sell-through 55% → 40% | Success fees −~$22k |
| Add C&B-like 5% **buyer** fee instead | Higher take but fights v0 positioning / fleet PO friction |

---

## CSV guide

`income-model.csv`: `SOURCED` · `ASSUMPTION` · `CALC` rows; scenarios `conservative` / `base` / `upside`; years `1`–`3`.
