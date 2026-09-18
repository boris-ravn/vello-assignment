# Fidelity Audit — Grace Lin Profile Screen

Audit method: `vello-fidelity-review` (token lint → accessibility scan →
reference comparison → unresolved-is-an-answer). Data source:
`vello-design-system` skill plus live verification against
https://vello-design-system.vercel.app/docs for every fix below. Each fix
below is its own commit; commit messages name the principle restored, not
just what changed.

Baseline audited: the full-fidelity rebuild committed as `init` (drift
included) — a faithful reproduction of the live prototype screenshot, built
without cross-checking the design system.

## Token-drift table

| Element | Was | Now | Token / principle satisfied |
|---|---|---|---|
| "Available" badge | `accent` variant (coral-700 on coral-100) | `success` variant (green-700 on green-100) via a real `Badge` component (`vl-badge`) | Badge: "do not use accent badges for anything but a time-limited offer" |
| "14 min walk" badge | Hand-rolled `nb__walk` class: green tint, green border, JetBrains Mono | `Badge variant="neutral"` (surface-sunken / text-muted, sans) | Badge: "use neutral for plain metadata like distance or duration" |
| Reviews heading | `className="section__title" style={{ fontSize: 17 }}` — inline override shadowing a 20px class that didn't belong in this context | Plain `<span>Reviews</span>`, inherits `.nbd__h`'s 17px like its sibling headings | "Semantic tokens should never be shadowed by a hardcoded value in the component itself" |
| Back / Save IconButtons | `variant="ghost"` (transparent, borderless) | `variant="default"` (white, bordered) — matching the Message IconButton on the same screen | IconButton: `ghost` is documented for "toolbars over imagery"; this app bar sits on plain `--color-bg` |
| Message IconButton | `variant="secondary"` — not a real variant in the design system | `variant="default"` | Token/API fidelity: the real API is `'default' \| 'solid' \| 'ghost'` only |
| Trust signal | One `nbd__since` pill: "On Vello since 2025 · Background-checked by Vello" (7 words, body-copy weight) | `VerifiedBadge status="verified"` ("Background-checked", first-class pill) + plain `--text-muted` metadata text ("On Vello since 2025") alongside it | Badge: "keep badge text to three words"; system principle: "trust is visible… never fine print" |
| Hero rating stat | Bare text `5.0` | `Rating` component: amber stars + `5.0` (count omitted — already shown as "39 reviews" below) | Rating: default is "stars + numeric value + count" |
| Availability / review states | No way to represent an unavailable or brand-new provider | `available` and `reviewCount` props: `available=false` hides the Available badge (documented `ProviderCard.available` default); `reviewCount=0` swaps the Rating for a `Badge variant="info"` "New" | Rating: "do not show a rating with zero reviews — show a New badge instead"; ProviderCard: `available: boolean` default `false` |

## Accessibility table

| Issue | Standard violated | Fix |
|---|---|---|
| "Available" badge text/tint contrast measured at **4.105:1** | WCAG AA 4.5:1 for text; Badge's own "every variant meets 4.5:1" claim | Switched to `success` variant → **5.698:1**, verified by computing relative luminance on the live docs' own rendered colors |
| Ghost IconButtons (`border-color: transparent` at rest) had no visible boundary against the cream page | WCAG 1.4.11 non-text contrast (UI component boundaries, 3:1) | Switched to `default` variant, which keeps the 1.5px `--border-strong` boundary visible at rest |
| Favorite (save) toggle button had no `aria-pressed` | IconButton docs: "Toggle buttons (favorite, save) should also set aria-pressed from product code" | Added `aria-pressed={saved}`, wired to existing toggle state |
| Trust signal rendered at body-copy weight, indistinguishable from surrounding prose | System principle: "Verification, ratings and distance are first-class UI, never fine print" | Split into a visually distinct `VerifiedBadge` pill + separate metadata text |
| "14 min walk" badge (`neutral` variant), the variant Badge's own guideline prescribes for this content, measures **4.319:1** | WCAG AA 4.5:1; Badge's own "every variant meets 4.5:1" claim | **Not fixed** — no neutral-adjacent token in the current palette clears 4.5:1 without a designer-approved change. Recorded in `UNRESOLVED-QUESTIONS.md` as a second (now third, with `warning`) instance of the same system-level gap |

## Unresolved questions

See [`UNRESOLVED-QUESTIONS.md`](./UNRESOLVED-QUESTIONS.md) for the full
write-up: the `--text-muted` contrast margin, the Badge tint-pairing gap
found across `neutral`/`accent`/`warning`, the undocumented CTA behavior
for unavailable providers, and the backlog of missing states not
implemented in this pass (loading/skeleton, verification-pending,
archived/inactive).

## Commits in this pass

1. `fix(badge)` — Available badge: `accent` → `success`
2. `fix(badge)` — walk-distance badge: brand-green → `neutral`
3. `fix(typography)` — removed inline font-size override on Reviews heading
4. `fix(iconbutton)` — app-bar actions unified on the real `default` variant
5. `fix(trust)` — split combined trust pill into `VerifiedBadge` + metadata text
6. `fix(rating)` — hero stat now shows stars, matching Rating's default
7. `feat(states)` — implemented zero-review and unavailable states
