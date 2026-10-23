# Project Summary — Hammad Ahmad Portfolio

A running log of this project: what it is, what's been built, and what's still open.

## What this is

A personal portfolio site for Hammad Ahmad, Business Development Executive at Deep Dev Solutions, built with Next.js (App Router), TypeScript, and Tailwind CSS. Originally scoped from a PRD (`PRD.md`) as a 5-page light-theme site; it has since evolved into a 6-page dark-theme site based on Hammad's ongoing direction in this chat.

**Stack:** Next.js 16, TypeScript (strict), Tailwind CSS v4, `@calcom/embed-react`, Resend (contact form email), `@vercel/analytics`, `lucide-react` icons.

**Pages:** Home, About, Work, How I Work, Content (built but hidden), Contact.

## How content is organized

All copy and structured data lives in `data/` (`site.ts`, `caseStudies.ts`, `process.ts`, `contentPieces.ts`), not hardcoded in components. Any remaining `[BRACKETED]` placeholder gets listed automatically by `npm run build` (via `scripts/check-placeholders.mjs`).

## Chronological log of changes

### 1. Initial build (per PRD.md)
Scaffolded the full 5-page site exactly as specified: light theme (warm white / lime accent), Home/Work/How I Work/Content/Contact, case study template, Cal.com embed with fallback, contact form with zod validation + honeypot + rate limiting, SEO basics (sitemap, robots, OG image, Person JSON-LD), accessibility basics. All 5 original case studies were anonymized per the PRD's confidentiality rule.

### 2. Dark theme override
Hammad shared reference UI screenshots (dark background, emerald/teal accent, glowing orb behind a hero photo) and explicitly asked to override the PRD's "light theme only" rule. Rebuilt the design system: near-black background, dark surface cards, emerald accent (`#34D399`), pill-shaped buttons with arrow icons, ambient radial-gradient page background, decorative glow + curved accent lines in the hero.

### 3. Real project names (overriding PRD confidentiality)
Hammad again explicitly overrode the PRD's "never name a real client" rule for his own projects (distinct from confidential client work). The Work page now lists his actual named, linked projects:
- Shahzaib Electronics (shahzaibelectronics.pk)
- Mukham Construction (mmuhkamconstruction.com)
- Vova Even — 4 regional sites: English (.com), Russian (.net), Ukrainian (.com.ua), Hebrew (.co.il), each verified by checking the live site's own language tag
- Free Hindi Audiobooks (freehindiaudiobooks.com)
- Behind The Grill (behindthegrill.com)

All 8 unused/anonymized placeholder case studies from the original PRD were removed. A new "project slider" (auto-scrolling marquee) was added to the Home page showing all projects; each links out to its live site in a new tab (or falls back to its internal case study page if no live URL is confirmed yet).

### 4. Hero photo iterations
Went through several rounds: an initial placeholder → a formal photo Hammad supplied → a composited portrait with a decorative background → finally a **genuinely transparent (alpha-channel) cutout** Hammad supplied directly, which let us drop an earlier CSS "mask-image" feathering workaround entirely. A second photo was added in an oval crop as an accent on the Home page's About section. `next.config.ts` was updated to allow `quality=90` image optimization (blocked by Next's default security allowlist otherwise).

### 5. Polish pass
- Every green (accent) button now turns white on hover instead of a darker green, including the contact form's submit button (which had its own hardcoded styling, now unified with the shared `Button` component).
- Fixed a CSS cascade-layer bug where the project slider's hover-to-pause behavior silently never worked (an unlayered custom CSS rule was beating a Tailwind `@layer utilities` rule) — rebuilt with dedicated `.marquee-group` / `.marquee-track` classes; also tuned the scroll speed (28s → 70s → 45s, based on feedback) and made it pause on keyboard focus too, not just mouse hover.
- Forced the hero heading onto exactly two lines ("Right buyers." / "Real conversations.") instead of relying on font-size tuning.

### 6. Real contact & bio details
Hammad confirmed real details that replaced placeholders: LinkedIn URL, a WhatsApp number (added as a `wa.me` link on the Contact page), and his exact title ("Business Development Executive," not "partner and business developer" — updated everywhere: header, hero, page titles, meta descriptions, and the Person JSON-LD schema). The About copy was rewritten from a fuller bio Hammad supplied (in the site's plain, direct voice) to mention his in-progress BS Computer Science and the full range of services Deep Dev Solutions covers.

### 7. About page overhaul — in progress
Hammad flagged that the About page still reads as generic ("nothing about me here — my education or experience"). Agreed direction:
- Add a real career/education timeline (animated, scroll-reveal HTML — not Three.js, to keep it fast, accessible, and SEO-friendly)
- **Blocked on real data from Hammad**: education (institution, degree, years), work/experience timeline (role, company, dates, one-line description per entry), and any certifications or skills to tag.

## Still open (real placeholders, not yet resolved)

- `[WORKING HOURS]` — Contact page
- `[CAL.COM EVENT PATH]` — `NEXT_PUBLIC_CAL_LINK` env var, booking embed shows a fallback link until set
- Resend API key / sender / recipient env vars — contact form returns an error until configured
- Mukham Construction, Vova Even (and its 3 language variants), Free Hindi Audiobooks, and Behind The Grill case study pages: industry/region confirmed from briefly checking each live site, but the "problem," "what we built," and "my role" narrative fields are still placeholders — only Hammad knows that story
- The About page career/education timeline (see above — needs real data)
- Content page (LinkedIn posts/carousels/ads) stays hidden (`showContent: false`) until there are 6 real pieces

## Where things stand technically

Lint, typecheck, and production build all pass as of the latest commit. The site was verified throughout via isolated `next start` servers on scratch ports — Hammad's own local dev server (port 3001) was deliberately left untouched after an earlier incident where a stray verification request crashed it.
