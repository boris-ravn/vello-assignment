# Unresolved Questions

Per the `vello-fidelity-review` audit method: when a value doesn't trace to a
token, or the design system's own documented pairing fails its own stated
standard, that gets written down as a named question for a designer — not
silently fixed with a guessed value, and not silently ignored.

Every number below was computed directly (relative-luminance contrast
formula against actual rendered/computed colors, or pulled straight from
https://vello-design-system.vercel.app/docs), not estimated.

---

## 1. `--text-muted` has almost no contrast margin

`--text-muted` (`#6E7064`) on `--color-bg` (`#F6F2E7`) computes to **4.508:1**
— technically over the 4.5:1 floor, but by less than a hundredth of a point.
This token is used throughout this screen for secondary text (subtitle,
stat labels, timestamps, metadata).

**Question for a designer:** is this margin intentional, or should there be
a distinct, safer secondary-text token for small sizes (e.g. a slightly
darker `--text-muted-2`) so a future minor palette tweak doesn't silently
drop this below AA?

---

## 2. Badge's tint pairings don't uniformly meet Badge's own claimed standard

Badge's docs state "every variant meets 4.5:1 for its text on its tint."
Independently computing contrast for all 8 variants (relative luminance,
using the docs' own live rendered examples) found:

| Variant | Text / tint | Computed contrast | Meets 4.5:1? |
|---|---|---|---|
| `neutral` | `#6E7064` / `#EFEEE1` | **4.319:1** | **No** |
| `accent` | `#C5421F` / `#FCE3D9` | **4.105:1** | **No** |
| `warning` | `#C77F12` / `#FCEFCF` | **2.841:1** | **No, badly** |
| `brand` / `success` | `#466621` / `#EBF1DB` | 5.698:1 | Yes |
| `info` | `#235A93` / `#E1ECF7` | 5.936:1 | Yes |
| `danger` | `#B23636` / `#FBE3E3` | 4.951:1 | Yes |
| `solid` | `#FFFFFF` / `#557E26` | 4.774:1 | Yes |

This directly affects two fixes in this pass:

- **Fix #1 (Available badge → `success`)**: confirmed safe, 5.698:1. Not a
  gap.
- **Fix #2 (walk-distance badge → `neutral`)**: `neutral` is the variant
  Badge's own guideline prescribes for "plain metadata like distance or
  duration" — and it fails the docs' own accessibility claim at 4.319:1.
  Switching to the *documented-correct* variant did not produce a
  compliant result. This is not a one-off (the previously-known `accent`
  gap) — it's now three variants (`neutral`, `accent`, `warning`) failing a
  standard the component's own docs assert all eight variants meet.

**Question for a designer:** is the "every variant meets 4.5:1" claim
aspirational/stale, or were `neutral`, `accent`, and `warning` never
re-verified after a token change? Either the claim needs correcting, or
these three tint pairings need darker text tokens.

---

## 3. No documented CTA behavior for an unavailable provider

`ProviderCard`'s docs specify `available: boolean` (default `false`) and
say it "shows the live Available badge" — i.e. the prop controls whether
that badge renders. Implemented that exact behavior here (see
`FIDELITY-AUDIT.md`).

What the docs do **not** say: whether the primary CTA ("Book Grace") changes
label, disables, or redirects to a waitlist/notify flow when a provider is
unavailable. Guessing this (e.g. graying out the button, relabeling it
"Notify me") would be inventing product behavior, not restoring a
documented one.

**Question for a designer:** what should the Book CTA do when `available`
is `false`? Left unchanged in this pass — toggle "Available" off in the
`AuditDemo` controls in `components.jsx` to see the current (unchanged)
CTA next to the now-hidden badge.

---

## Backlog: missing states not implemented in this pass

Scoped to the two highest-value states (zero-review, unavailable) per the
audit brief. Named here rather than rushed:

- **Loading / skeleton** — no documented placeholder state for this screen
  while provider data is fetching.
- **Verification pending** — `VerifiedBadge` documents a `pending` status
  (amber dashed circle) that this screen never exercises; worth a real
  example once a pending-verification provider exists in test data.
- **Archived / inactive provider** — no documented treatment for a provider
  who is no longer bookable at all (distinct from merely `unavailable` right
  now).
