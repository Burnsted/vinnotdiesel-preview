# FleetFit — remaining steps to finalize, release, and monetize

Plain outline for Ted. Each step says who prepares it and the one answer Ted must give. Domains, fee display, attorney/legal, and outreach stay on hold until Ted says go.

## What’s built vs not (from this repo + open PRs)

**On `main` today:** VinNotDiesel marketplace preview (home, shop, model, listing). Still has Buy Now / Make Offer. Demo inventory only. No fleet intake.

**Farthest FleetFit product work (open draft PRs, not merged):**

| Area | Status | Where |
|------|--------|--------|
| FleetFit public name / tagline | Draft copy rename | PR #6 |
| Home primary CTA **Match my fleet** → `/intake` | Built in preview | PR #5 |
| Fleet intake → package → unit drill-in | Built in preview | PR #5 (older path also in PR #4) |
| Side-by-side work compare (payload, bed, cab, tow); unknown = **—** | Built in preview | PR #5 |
| Select action **Add to fleet** / **In fleet** only (no Buy Now / Make Offer / one-click) | Built in preview | PR #5 |
| Compare tray, max **4** units | Built in preview | PR #5 |
| PATH + Budget (max spend optional; no invented KBB) | Built in preview | PR #5 |
| Checkout stub: facilitated sale; **Fee at checkout — amount TBD** | Stub only | PR #5 |
| Listing-photo lock (considered units = real listing photos) | Documented + wired in preview | PR #5 |
| Static concept screens | Concepts only | PR #3 |
| Photographic home polish | Visual R&D; diverges from fleet home | PR #1 |
| **Stay** / **Fleet Follow** (90-day re-check) | Not found in repo or open PRs | — |
| Intake end **Done** / “send me my fit summary” | Not found (intake ends at **Match a package**) | — |
| Real payments, live fee $, real shop data, production VINs | Not built | — |
| Domains, attorney/legal, outreach | On hold (Ted go) | — |

**Assumption:** “~75% done” means the PR #5 preview path is the product direction; `main` is still the older marketplace shell until Ted picks what to merge.

---

## A. Finalize (product ready for a first shop)

1. **Pick the shippable preview**  
   What: Choose which draft PR is the product truth (PR #5 is the locked FleetFit path; PR #4 still has Buy Now / Make Offer).  
   Who prepares: Cursor / agent — short side-by-side of open PRs.  
   Needs Ted: **Yes.**  
   Ted’s one answer: “Ship from PR #5 (or name the PR).”

2. **Brand on the public surface**  
   What: FleetFit name/tagline live; VinNotDiesel parked.  
   Who prepares: Cursor — finish/merge brand copy (PR #6 or fold into #5).  
   Needs Ted: **Yes** (quick look).  
   Ted’s one answer: “FleetFit public name is approved.”

3. **Intake Done step**  
   What: End intake with a clear Done — e.g. button **Send me my fit summary** (email capture stub OK).  
   Who prepares: Cursor — UI + stub.  
   Needs Ted: **Yes.**  
   Ted’s one answer: “Yes, use ‘Send me my fit summary’ (or paste your exact words).”

4. **Work-compare honesty pass**  
   What: Confirm every package screen compares current gas/diesel truck vs candidates on payload, bed, cab, tow; never invent numbers (use —). Gas-twin savings inputs Ted locked: **20,000 miles / vehicle / year**; vehicles **charge at the shop overnight**; **insurance is an unconfirmed placeholder** until Ted gets quotes **Monday 10/6**.  
   Who prepares: Cursor — checklist against PR #5.  
   Needs Ted: **Only if something looks wrong** (insurance after Monday quotes).  
   Ted’s one answer: “Compare screens look honest” / after 10/6: “Use this insurance figure: ___” or “Keep insurance as placeholder.”

5. **Voice check**  
   What: Concierge tone — helpful, never anti-diesel, never blaming shops; no Ted personal EV history in public copy.  
   Who prepares: Cursor — copy sweep.  
   Needs Ted: **Yes** (skim).  
   Ted’s one answer: “Tone is fine” or “Fix these lines: ….”

6. **Fleet Follow name (secondary)**  
   What: Park Stay; label the future 90-day re-check **Fleet Follow**. No full build required to finalize Acquire.  
   Who prepares: Cursor — name note in product docs / stub label only.  
   Needs Ted: **Yes.**  
   Ted’s one answer: “Call it Fleet Follow.”

7. **Define “releasable”**  
   What: Write Ted’s minimum bar in one sentence (e.g. “one trade can complete intake → package → Add to fleet on Pages”).  
   Who prepares: Cursor — draft sentence.  
   Needs Ted: **Yes.**  
   Ted’s one answer: “Releasable means: ___.”

---

## B. Release (go live for a tiny audience)

8. **Merge + deploy gate**  
   What: Merge chosen PR(s); refresh GitHub Pages preview.  
   Who prepares: Cursor — merge plan; Ted or repo owner clicks merge if required.  
   Needs Ted: **Yes.**  
   Ted’s one answer: “Merge and deploy the preview.”

9. **Domains (ON HOLD)**  
   What: Custom domain vs keep `burnsted.github.io/vinnotdiesel-preview/`.  
   Who prepares: Cursor — options list only until go.  
   Needs Ted: **Yes, when ready.**  
   Ted’s one answer: “Go on domains” + which domain, or “Stay on Pages URL.”

10. **Fee display (ON HOLD)**  
    What: Whether/when package or checkout shows any fee language beyond “amount TBD.”  
    Who prepares: Cursor — mock options after Ted picks a fee model.  
    Needs Ted: **Yes, when ready.**  
    Ted’s one answer: “Show fees: no / TBD only / this amount: ___.”

11. **Attorney / legal (ON HOLD)**  
    What: Terms, privacy, “we don’t hold vehicle funds,” facilitation wording.  
    Who prepares: Cursor — question list for counsel; attorney drafts.  
    Needs Ted: **Yes, when ready.**  
    Ted’s one answer: “Start legal now” or “Wait until after first trade talk.”

12. **First-trade outreach (ON HOLD)**  
    What: One short email to one shop (draft in `DRAFT-EMAIL-FIRST-TRADE.md`). Do not send until go.  
    Who prepares: Cursor — draft; Ted approves.  
    Needs Ted: **Yes.**  
    Ted’s one answer: “Send to [trade/shop]” or “Do not send.”

---

## C. Monetize (options only — nothing decided)

Present as choices. Do not treat any as final. No invented prices or partner names (Sherlock is still sourcing charger partners and incentives).

**Charger context (Ted’s idea, not decided):** Most trade vehicles go home or to the shop overnight, so nearly every package needs a home or shop charger — and employee electricity compensation if they charge at home. Locked savings baseline for gas-twin math: **20,000 miles / vehicle / year**, **shop overnight charging**; insurance stays a placeholder until Monday 10/6 quotes.

13. **Choose how money starts**  
    What: Pick a first money path (options below).  
    Who prepares: Cursor — one-pager of options.  
    Needs Ted: **Yes.**  
    Ted’s one answer: “First money is: ___.”

    **Options (not decided):**
    - Paid fit report ≈ **$19.99–$25**, or ≈ **$1,999** if bundled with more service  
    - Concierge time explaining EV vs current truck for first-time buyers  
    - Per-vehicle commission example **~$250 / vehicle** on closed units  
    - Small recurring piece to cover site costs  
    - **Charger bundle (idea):** sell a charger with each vehicle through a volume-discount partnership with a non-Chinese charger maker  

14. **Package add-on: Charger (idea)**  
    What: Optional **Charger** line on the package so almost every fit includes home/shop charging (and notes home-charge employee electricity pay if needed).  
    Who prepares: Cursor — stub add-on after Ted says explore it; Sherlock sources partner.  
    Needs Ted: **Yes.**  
    Ted’s one answer: “Add Charger as a package add-on” or “Skip for now.”

15. **Charger partner as first-page sponsor (idea)**  
    What: Option to make the charger partner the first-page sponsor (no partner name until Sherlock finishes sourcing).  
    Who prepares: Cursor — placement mock only after Ted wants it.  
    Needs Ted: **Yes.**  
    Ted’s one answer: “Yes, offer the sponsor slot” or “No sponsor.”

16. **Wire the chosen path into the product (after Ted picks)**  
    What: Stub or real paywall / invoice / commission / charger-bundle tracking — only for the chosen option(s).  
    Who prepares: Cursor.  
    Needs Ted: **Yes** (confirm scope).  
    Ted’s one answer: “Build the stub for ___ only.”

17. **Recurring cover for site costs (optional later)**  
    What: Lightweight subscription or retainers so hosting/tools aren’t Ted’s hobby bill.  
    Who prepares: Cursor — tiny menu after first paid use.  
    Needs Ted: **Later.**  
    Ted’s one answer: “Yes, add a recurring option” or “Skip for now.”

---

## Open questions only Ted can answer

1. **Easiest first trade** — electrical, landscaping/lawn, HVAC, or other?  
2. **Final fee** — report, concierge, per-vehicle, charger bundle, recurring, or mix? (ideas above are not final)  
3. **Legal** — start attorney now, or after first shop conversation?  
4. **What “releasable” means** — his one-sentence bar for “good enough to show a shop.”  
5. **Charger partner + sponsor** — which partner (once Sherlock has options), and is the first-page sponsor slot wanted?

---

## Assumptions (not verified as Ted decisions)

- PR #5 is the intended product spine; other open PRs are R&D or older locks.  
- Agent/Cursor does prep; Ted only answers and gives go/no-go.  
- Sunshine Mountain LLC / rentals / family stay higher priority — no step assumes Ted runs day-to-day ops.  
- Pricing numbers in section C are examples from Ted’s idea list, not approved rates.  
- Charger bundle, Charger add-on, and sponsor slot are ideas only until Ted decides.
