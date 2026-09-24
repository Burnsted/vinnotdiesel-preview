# VinNotDiesel — Income Model v1.3

Companion to `business-plan.md`. Spreadsheet: `income-model.csv`.

**Product lock:** Buy Now + Make Offer; Complete = SOH % + method + **VIN open-recall check** (incl. Lightning **25V-131**, E-Transit **25V-860**) + work specs + all-in price.

**Monetization lock:** Dealer **subscriptions** (incl. franchise desks with no used stock yet). **Success fees** mainly private/fleet. **SOH package** is the Incomplete→Complete unlock — and the key early metric after the FL field check.

**Florida field check (team-verified 2026-09-24):** **0%** of checked FL listings had battery health % + measurement method → every FL unit would be Incomplete today. **ASSUMPTION change:** Y1 base SOH attach lowered from **85% → 40%** (conservative 25%, upside 55%); Y2/Y3 ramp toward 70%/85%.

---

## Snapshot

| | Conservative Y1 | Base Y1 | Upside Y1 | Base Y3 |
| --- | --- | --- | --- | --- |
| Avg listings / month | 5 | 10 | 18 | 55 |
| Sell-through | 40% | 50% | 55% | 60% |
| SOH package attach | **25%** | **40%** | **55%** | **85%** |
| ASP | $48,000 | $50,000 | $52,000 | $52,000 |
| **Total revenue** | **~$32k** | **~$99k** | **~$218k** | **~$721k** |

**Base-case Year 1 range:** **~$65k–$130k** (around modeled ~$99k; updated after lower SOH attach).  
**Base-case Year 3 range:** **~$0.55M–$0.95M** (around modeled ~$721k).

### Base Y1 revenue mix (modeled)

| Stream | ~$ | Share |
| --- | --- | --- |
| Seller success fee (mostly private/fleet) | $40.5k | ~41% |
| Dealer / fleet subscriptions | $35.9k | ~36% |
| SOH documentation packages | $6.2k | ~6% |
| Listing + featured | $6.5k | ~7% |
| Financing / insurance / warranty | $4.5k | ~5% |
| Sponsored + upfit partner referral | $5.0k | ~5% |
| **Total** | **~$99k** | 100% |

### Base Y3 revenue mix (modeled)

| Stream | ~$ | Share |
| --- | --- | --- |
| Dealer / fleet subscriptions | $269k | ~37% |
| Seller success fee | $245k | ~34% |
| SOH packages | $72k | ~10% |
| Listing + featured | $51k | ~7% |
| Other | $84k | ~12% |
| **Total** | **~$721k** | 100% |

---

## Fee card ASSUMPTIONS

Unchanged vs v1.2 except **SOH attach rates** (see above). Seller success **3%** (min $500 / max $3,000) on private/fleet; dealer success attach **10–20%**; dealer sub **$349–$499/mo**.

---

## Explicit risks (income-relevant)

1. **Dealers close off-platform** → subscriptions, not success fees.  
2. **FL battery-doc gap** → SOH attach may stay low without onboarding execution; Y1 SOH revenue is intentionally modest.

---

## CSV guide

Includes SOURCED rows for **25V-860**, FL field SOH baseline **0%**, Jacksonville E-Transit band, Miami Rivian van note, and demotion of Maher/Nimnicht/Duval/Essential to subscription targets.

---

## Fee card ASSUMPTIONS

| Item | Amount | Reasoning |
| --- | --- | --- |
| Seller success fee | **3%** of closed price, min **$500**, max **$3,000** | Charged when private/fleet deals close on-platform; low attach on dealer sales |
| Success attach — private/fleet sales | **90%** base | On-platform close expected |
| Success attach — dealer sales | **10–20%** | Most dealer deals finish at the store (**off-platform close risk**) |
| Dealer / fleet subscription | **$349–$499/mo** by year/scenario | Primary dealer monetization |
| Listing / featured / SOH package | **$79** / **$149** / **$129** | Same Complete-path logic as v1.1 |
| Upfit partner referral | **$100–$175** | Generic third-party upfitter handoff (not a named sister brand) |

ASP base **$50,000** — ASSUMPTION near work-relevant sample median ~$51,635 (101-row CSV, 2026-09-24).

---

## Volume ASSUMPTIONS

| Driver | Conservative | Base | Upside |
| --- | --- | --- | --- |
| Y1 listings/mo | 5 | 10 | 18 |
| Y3 listings/mo | 28 | 55 | 90 |
| Dealer listing share | 55–70% | | Inventory volume from subs; success fee not the dealer story |
| Sell-through | Below C&B claimed 80%+ | | [C&B](https://carsandbids.com/what-is/) |

Van program supply (team-verified **2026-09-24**): **249** used vans (**113** E-Transit, **68** BrightDrop; Rivian vans **$34,995–$46,299**) — supports listing growth ASSUMPTIONS, not a take-rate claim.

---

## Scenario totals (rounded)

| | Cons Y1 | Base Y1 | Ups Y1 | Base Y2 | Base Y3 |
| --- | --- | --- | --- | --- | --- |
| Listings / year | 60 | 120 | 216 | 336 | 660 |
| Units sold | 24 | 60 | 119 | 185 | 396 |
| Success-fee units | 11 | 27 | 55 | 76 | 157 |
| Dealer subs (count × mo) | 4 × 6 | 10 × 9 | 18 × 10 | 25 × 12 | 45 × 12 |
| **Revenue** | **~$36k** | **~$106k** | **~$228k** | **~$350k** | **~$727k** |

Detail in CSV.

---

## Costs (ASSUMPTIONS) and break-even

Y1 base opex ~**$42k** (legal, tools, SOH COGS, marketing; no salaries; founder draw **$0**). Base Y1 revenue ~$106k → cash-positive *if* subs + private closes hit — before founder living costs. Conservative Y1 (~$36k) ≈ break-even / slight loss.

---

## Explicit risk: dealers closing off-platform

Franchise dealers commonly take the lead from a marketplace listing and finish paperwork on their DMS. Model response:

1. Monetize dealers with **subscriptions + featured**, not per-sale success.  
2. Keep success fee aimed at **private/fleet**.  
3. Optionally add assisted-lead reporting later (not in v0 revenue).  
4. Conservative scenarios assume **low** dealer success attach (10%).

---

## Sensitivity (base Y1)

| Change | Impact |
| --- | --- |
| Dealer success attach 15% → 0% | Success revenue −~$8k |
| Paying dealer subs 10 → 6 | Sub revenue −~$14k |
| Private listing share rises (more success units) | Success revenue up; depends on acquisition |

---

## CSV guide

`SOURCED` · `ASSUMPTION` · `CALC`. Metrics include `dealer_listing_share`, `success_attach_private`, `success_attach_dealer`, `rev_dealer_fleet_subscriptions`, `rev_seller_success_fee`, `rev_upfit_partner_referral`.
