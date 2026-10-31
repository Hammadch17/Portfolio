# Portfolio Update Brief

Nov 1, 2026 · @Deep Dev Solutions

A brief for Claude Code to update Hammad's portfolio: new photos with a hover effect, and five full case studies. Read it all before changing anything. Do not add features it does not ask for.

## Overview and ground rules

### Three changes

1. New photos on the Home hero and the About page, with a hover effect.
2. Five full case studies in place of the current entries: Shahzaib Electronics, Muhkam Construction, Vova Even Network, Behind The Grill and Free Hindi Audiobooks.
3. A redesigned Work page and case study page to present them.

Do not touch the About timeline, the footer, the contact form, the design tokens, or the hidden Content page (showContent stays false).

### Ground rules

1. The copy in this brief is final. Put it in the data files exactly as written. Do not rewrite it or add claims.
2. Numbers appear only where this brief gives them. Never estimate or round up. If a stat is missing, leave the stat block out.
3. vovaeven.co.il is part of the Vova Even Network entry and the project slider. If any earlier change removed it, restore it.
4. Spell it "Muhkam Construction" everywhere. Replace any "Mukham".
5. Use the existing Button component, tokens and fonts. No new hex values. Keep the dark emerald theme.
6. Keep the placeholder check working. Do not leave [BRACKETED] text in anything shown to visitors.
7. Animate only transform and opacity. Never animate blur radius, because the large glow effects have caused slow frames before.

## Photos and hover effect

- Home hero: use hammad-cutout.png (transparent cutout) with the glow and curved accent lines behind it. Not wider than ~520px.
- About page: second photo if available; otherwise the same file with a different crop/object-position.
- next/image, quality 90, width/height set, Home hero photo gets priority. Alt text "Hammad Ahmad".
- Hover/focus: scale to 1.03 over 500ms ease-out, glow layer rises to full opacity; About oval ring turns accent color.
- Animate only transform and opacity (never blur radius). Wrap in `@media (hover: hover)`. Remove scale/transition under `prefers-reduced-motion: reduce`. Decorative only, no click behavior.
- Delete old photo files only if nothing else references them.

## Work page and case study pages

New `CaseStudy` type (slug, title, subtitle, industry, timeline, role, liveUrl?, cardResult, overview, challenge[], myRole[], solution[], stats[], statsNote?, outcomes[], services[], links?, timelineSteps?, quote?, cover, gallery[], featured, order).

### Work page (/work)
H1 "Work", intro "Five client projects I managed from the first conversation to delivery." Cards in order: Shahzaib Electronics, Muhkam Construction, Vova Even Network, Behind The Grill, Free Hindi Audiobooks. 3/2/1 column grid.

### Case study page (/work/[slug])
Back link, header (industry, title, subtitle, meta cards, live site button), cover, overview, stats row (only if present), challenge/role columns, solution grid, timeline (if present), results, gallery (lightbox), services chips, links (if present), quote (if present), prev/next, closing CTA to /contact#book.

## Case studies (summarized — see full copy applied directly in data/caseStudies.ts)

1. **Shahzaib Electronics** — e-commerce website, cart/checkout/admin panel, WhatsApp ordering. Stats: 4,500 clicks / 63,100 impressions / 7.1% CTR / 6.5 avg position (GSC, last 3 months, as of Nov 2026).
2. **Muhkam Construction** — corporate portfolio site. No stats.
3. **Vova Even Network** — Next.js + Sanity CMS migration across vovaeven.com/.net/.com.ua/.co.il. Stat: 3,600 articles migrated across the project (incl. Behind The Grill, Free Hindi Audiobooks).
4. **Behind The Grill** — BBQ blog migrated to Next.js + Sanity, affiliate links preserved. No stats.
5. **Free Hindi Audiobooks** — Hindi audiobook site migrated to Next.js + Sanity. No stats.

Full field-by-field copy is implemented directly in `data/caseStudies.ts` per the original brief (not re-transcribed here to avoid drift).

## Acceptance criteria

- [ ] Home hero and About show the new photos; hover effect works with mouse/keyboard, not on touch, nothing under reduced motion
- [ ] Work page shows exactly five case studies in the specified order
- [ ] Each case study page shows only sections with data
- [ ] All copy matches the brief; no "Mukham" anywhere
- [ ] vovaeven.co.il present in Vova Even Network links, gallery and slider
- [ ] Old case study URLs redirect to the new pages
- [ ] Home slider shows the eight live sites, each opens in a new tab
- [ ] Images optimized WebP with alt text; lightbox works by keyboard
- [ ] Placeholder check, lint, type check and production build all pass
