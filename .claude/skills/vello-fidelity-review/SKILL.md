---
name: vello-fidelity-review
description: The audit method for checking any generated or modified Vello component for design-system drift — token lint, accessibility scan, reference comparison, and how to handle unresolvable cases. Use this after generating or modifying a Vello UI component, before declaring Vello work "done," or whenever asked to audit/review/QA a Vello screen or component for fidelity. This is process, not data — pair it with vello-design-system, which holds the actual token values and component rules this process checks against. Trigger even if the user just says "does this look right?" or "check this against the design system" for Vello work — that's this skill.
---

# Vello Fidelity Review — Audit Method

This is Ravn's Friday engineering deliverable check for the Product Design
Round Robin: before any Vello component ships, it gets audited against the
design system, not just eyeballed. This skill is the *how* — the *what*
(actual token values, component rules) lives in `vello-design-system`; load
both together.

The core discipline here: a component can render pixel-perfect and still be
wrong, and a component can look slightly off and still be correct if it
traces cleanly to real tokens. Rendering is not the thing being judged — the
trace back to the system is.

Run these four checks, in order, on every component before calling it done.

## 1. Token lint

Every visual value — color, spacing, radius, type size, font-family — must
trace to a semantic token from `vello-design-system`. Walk the component's
styles (classes, inline styles, computed CSS) and for each visual property
ask: which token produced this?

A value that doesn't trace is drift, full stop — this includes:
- A hardcoded hex that happens to match a token's value but isn't applied
  via the token (fragile: breaks silently if the token changes).
- An inline style that overrides a token-driven class, even if the override
  renders identically to what the token would have produced.
- A "close enough" color or size that wasn't checked against the reference
  at all.

Looking visually correct does not exempt a value from this check. The
question is never "does this look right" — it's "what token produced this."

## 2. Accessibility scan

Run these as concrete, measured checks — not visual impressions:

- **Contrast ratio**: compute it against the actual rendered colors (get
  computed styles, don't eyeball). Check it against the specific number in
  `vello-design-system`'s contrast reference, not a general "looks readable"
  judgment. Remember `--text-muted` and `--accent` are both known
  near-threshold or failing cases — don't assume a token is safe just
  because it's a token.
- **Touch target**: measure against the real DOM box, accounting for any
  display/mockup scale transform. A visually-small target inside a scaled
  prototype frame can still be 44px logical — measure the underlying
  element, not the screenshot.
- **Semantic HTML**: real interactive elements (`<button>`, `<a>`), not
  `<div onClick>`. This affects keyboard access and screen readers, not just
  markup style.
- **Focus order**: must match visual/reading order, not "importance" order.
  Tab through it; don't infer this from the layout alone.
- **Color as a signal**: status, state, or meaning must never be conveyed by
  color alone — check for the accompanying icon/dot/text every time a status
  color is used.

## 3. Compare against the reference

Before declaring a component done, compare it against the real reference —
not a static screenshot in isolation, when better evidence is available:

- Pull actual computed styles from the live prototype
  (https://vello-design-system.vercel.app) rather than estimating from a
  screenshot.
- Pull actual rendered SVG paths for shape-sensitive elements (e.g. the
  Trust & Verification shield) rather than judging shape from a small image.
- A screenshot can misrepresent shape and scale at small sizes — treat it as
  one input, not the source of truth, whenever you can get closer to the
  real render.

## 4. Unresolvable is an answer

Sometimes a value won't trace to a token, or the design system's own
documented pairing fails its own stated standard (this has already happened
with Badge's `accent` variant — see the KNOWN GAP in `vello-design-system`).

When that happens:
- Do not invent a fix.
- Do not pick the "most plausible" nearby token and move on silently.
- Write it down as a named, specific question for the designer: what value
  was used, what it should trace to, and why it doesn't.

A guessed fix that looks confident is worse than an honest "unresolved" —
it hides the drift instead of surfacing it, and it's the kind of thing that
erodes trust in the audit itself.

## Reporting the audit

Don't accept "it renders" as "it's done." Structure findings as:

1. **Token lint failures** — value, where it appears, which token it should
   trace to (or "no matching token" if that's the honest answer).
2. **Accessibility findings** — the measured number/state, not a description
   ("3.3:1 persimmon-on-white for the CTA label" not "contrast looks low").
3. **Reference deltas** — what differs from the live prototype and how you
   verified it (computed styles / SVG path / DOM measurement).
4. **Unresolved questions** — anything from step 4, listed explicitly rather
   than silently fixed or silently ignored.

A component that passes all four checks is done. A component that "looks
right" but hasn't been run through them is not — that's the whole point of
this skill.
