---
name: vello-design-system
description: Verified source of truth for Vello's design tokens (colors, typography, spacing) and component rules (Badge, IconButton, Rating, Trust & Verification, accent usage). Use this whenever building or reviewing ANY Vello UI component, whenever a color/type/spacing/contrast value needs to be checked against a real token, or whenever you're about to write a hex code, font-family, or size for Vello work — even if the user doesn't say "design system" or "tokens" explicitly. Pairs with vello-fidelity-review for the audit process; this skill is the data that process checks against. All values here were verified directly against https://vello-design-system.vercel.app/docs — do not substitute guessed or "close enough" values.
---

# Vello Design System — Verified Reference

This is data, not process. Every value below was checked directly against the
live docs at https://vello-design-system.vercel.app/docs this week — treat it
as ground truth, not something to re-derive or approximate from memory or from
a screenshot. If you need the audit *method* (how to check a component against
these values), use the `vello-fidelity-review` skill alongside this one.

If you're about to write a hex code, a font-family, a pixel size, or a spacing
value for Vello work, check it against this file first. A value that "looks
about right" is drift if it doesn't trace to one of these tokens.

## Semantic color tokens

### Surfaces
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F6F2E7` | page/app background (cream) |
| `--surface-card` | `#FFFFFF` | card and panel surfaces |
| `--surface-brand` | `#557E26` | brand-colored surfaces (olive) |
| `--surface-brand-tint` | `#EBF1DB` | light olive tint surface |
| `--surface-accent-tint` | `#FCE3D9` | light persimmon tint surface |

### Actions
| Token | Value | Use |
|---|---|---|
| `--brand-primary` | `#557E26` | primary actions (olive) |
| `--accent` | `#F0623B` | persimmon — see Accent-usage rules below, exactly 3 legitimate uses |
| `--accent-tint` | `#FCE3D9` | tint pairing for accent |

### Status
| Token | Value | Use |
|---|---|---|
| `--success` | `#557E26` | success state (shares value with brand-primary) |
| `--success-tint` | `#EBF1DB` | success tint |
| `--danger` | `#D64545` | error/danger state |
| `--rating` | `#F4B740` | star rating amber |

### Text
| Token | Value | Use |
|---|---|---|
| `--text-strong` | `#1B1C18` | headings, prices, names |
| `--text-body` | `#3D3F37` | default body copy |
| `--text-muted` | `#6E7064` | secondary/metadata text — **computes to only ~4.51:1 on `--color-bg`, essentially zero margin.** Flag any *new* use of this token for small text; it's one contrast regression away from failing. |
| `--text-brand` | `#466621` | brand-colored text on cream — passes 4.5:1 safely. Note `--brand-primary` (`#557E26`) itself is borderline at body text size — prefer `--text-brand` over `--brand-primary` when coloring text, not just surfaces. |

### Raw ramp (reference only — not semantic, use sparingly)
| Token | Value | Use |
|---|---|---|
| `--coral-700` | `#C5421F` | text color on the "Available" badge's accent-tint pairing — computes to ~4.1:1, FAILS 4.5:1 even as Badge's own best-documented pairing. This is the flagged fix (accent → success), not a correct usage. |
| `--green-50` | `#F5F8EC` | tint background on the "walk distance" badge, paired with `--text-brand` text — contrast passes, but the *variant* is wrong (should be `neutral`, not brand-green, per Badge's own metadata rule) |

A raw ramp value used outside a semantic token, or used incorrectly even
where noted above, is a token lint failure — see `vello-fidelity-review`.

## Typography

- **Bricolage Grotesque** — display / headings
- **Hanken Grotesk** — body / UI text
- **JetBrains Mono** — data: prices, distances, ratings, timestamps

This mapping was confirmed via computed styles on the live prototype, not
just read off the brief — treat a heading or price rendered in the wrong
family as drift even if it "looks like" the right weight/size.

## Contrast reference

- `--accent` (persimmon `#F0623B`) on white/cream is **3.3:1** — never use
  for small text on a light surface.
- Body text and UI labels need **4.5:1** against their surface, no exceptions.
- Tap targets never below **44px**.
- `--text-muted` is technically passing (~4.51:1) but has essentially zero
  margin — treat any new small-text use as worth a second look.

## Component rules

### Badge
- Variants: `neutral` / `brand` / `success` / `info` / `warning` / `danger` /
  `accent` / `solid`.
- Use `neutral` for plain metadata (distance, duration) — not `accent` or
  `brand`.
- `accent` variant is reserved for a time-limited offer/promo — never use it
  for anything else (see Accent-usage below).
- Badge text: three words max, one fact per badge.
- Pair status color with an icon or dot — color alone is never sufficient.
- **KNOWN GAP:** the `accent` variant's documented best-case text/tint pairing
  (`--coral-700` on `--accent-tint`) computes to ~4.1:1 — short of the
  component's own stated "every variant meets 4.5:1." Treat any small
  persimmon-on-tint text as suspect until independently verified, even when
  it's the variant the docs call "correct."

### IconButton
- Circular, **44px tap target at every size**.
- Before flagging a size issue, verify against the phone-mockup's scale
  transform — a 39–40px measurement inside a scaled prototype frame is often
  exactly 44px logical. Measure the underlying DOM box, not the rendered
  pixels in a scaled screenshot.
- Variants:
  - `default` — white / bordered
  - `secondary` — visible-bordered
  - `ghost` — transparent-bordered, intended for toolbars over imagery.
    Using `ghost` on a plain (non-imagery) surface is a real inconsistency
    worth flagging — not a sizing defect, a variant-choice defect.
- `label` prop is required (becomes `aria-label`).
- Toggle buttons (favorite/save) must set `aria-pressed`.

### Rating
- Shows amber stars + numeric value + review count by default.
- Never show a rating with zero reviews — show a "New" badge instead.
- Round to one decimal.
- The numeric value is the accessible content — keep `showValue` on; stars
  alone are not sufficient accessible content.

### Trust & Verification
- The only correct verified mark is an **olive shield shape** — not a green
  dot/circle/checkmark (that's a named anti-pattern).
- Verify the actual rendered SVG path before flagging a shape issue — a small
  screenshot can make a shield look round. Don't fail this on a screenshot
  alone.

### Accent-usage (persimmon, `--accent`)
Persimmon has exactly **3** legitimate uses. If you see it anywhere else,
that's drift:
1. A standalone urgent CTA
2. A single promo badge
3. A save/favorite state

Never a second CTA next to olive, and never a status/availability color.
