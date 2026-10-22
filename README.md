# Hammad Ahmad — Portfolio

A five-page personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS, per `PRD.md`. The goal of every page is one primary action: **Book a call**.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy lives in typed files under `data/`, not inside components. To change text, edit the matching file and save — no CMS, no deploy step required to preview locally.

| File | Controls |
| --- | --- |
| `data/site.ts` | Name, email, LinkedIn, working hours, hero copy, proof strip, "What I do" cards, About paragraphs, the `showContent` flag |
| `data/caseStudies.ts` | The 5 Work case studies (Shahzaib Electronics, Mukham Construction, Vova Even, Free Hindi Audiobooks, Behind The Grill) — title, problem, what was built, role, optional result, `liveUrl`, and `otherUrls` for a project with multiple regional domains. Hammad has cleared all 5 to be shown with their real names and links |
| `data/process.ts` | The 4 "How I Work" steps (also used as the Home page teaser) |
| `data/contentPieces.ts` | The 6 Content gallery pieces (only shown once `showContent` is `true`) |

Any remaining `[BRACKETED]` placeholder in `data/` is listed by `npm run build` (via the `prebuild` script, `scripts/check-placeholders.mjs`). Set `STRICT_PLACEHOLDERS=true` in the Vercel production environment once all placeholders are replaced — the build will then fail if any remain, so it can't ship with unresolved content.

### Turning on the Content page

The Content page is built but hidden in version 1 (`showContent: false` in `data/site.ts`) because there isn't real content yet. Set it to `true` once `data/contentPieces.ts` has 6 real pieces — this also adds Content to the header, footer and sitemap.

### Case study images

Case studies render a plain typographic panel unless a `coverImage` path is set. A real screenshot is fine here since all 5 current projects are named with Hammad's permission — add one to `public/` and set `coverImage` on the matching entry whenever he wants.

### Hero photo

`data/site.ts`'s `photo` field points at `public/images/hammad-photo.webp`. Swap the file (keep it roughly square) and the path stays the same, or point `photo` at a new path.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata, sitemap and the share image |
| `NEXT_PUBLIC_CAL_LINK` | Cal.com event path, e.g. `username/intro-call`. Until this is set, the Contact page shows a plain link instead of the embed |
| `RESEND_API_KEY` | Sends contact form emails via [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender address on your domain in Resend |
| `STRICT_PLACEHOLDERS` | Set to `true` on Vercel production only, once `data/` has no `[BRACKETED]` placeholders left |

Without `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` set, the contact API route returns an error and the form shows its failure state — it will not silently drop messages.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Add the environment variables above in the Vercel project settings (set `STRICT_PLACEHOLDERS=true` for Production once content is final).
4. Deploy — no other manual steps are required.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build (runs the placeholder check first) |
| `npm run start` | Start the production server after a build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## What's in scope

Five pages (Home, Work, How I Work, Content, Contact), one case study template, a Cal.com booking embed with a fallback link, a contact form backed by `/api/contact` (zod validation, honeypot, a 5-per-hour-per-IP in-memory rate limit, Resend delivery), SEO basics (metadata, sitemap, robots, a generated OG image, Person JSON-LD on Home), and accessibility basics (skip link, visible focus, keyboard-operable menu and lightbox, `prefers-reduced-motion` support).

Note: `PRD.md` originally required every case study to stay anonymized (no real client names, logos, or links). Hammad has since cleared all 5 current projects to be shown by name with live links — this supersedes that section of the PRD for those 5 entries. Keep that rule in mind if more confidential (unnamed) client work gets added later.
