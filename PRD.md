# Hammad Portfolio PRD

Oct 22, 2026 · @Deep Dev Solutions

Build a five page personal portfolio site for Hammad, a business developer at Deep Dev Solutions, to the specification below. Anything in [BRACKETS] is a placeholder Hammad supplies later; build it so he can swap it in one file.

## Product summary

**Goal.** Turn founders and CEOs who land on this site into booked 20 minute intro calls with Hammad.

**Who it is for.** Hammad is a partner and business developer at Deep Dev Solutions, a Lahore engineering agency serving US, UK and Gulf B2B clients. Primary visitors are founders and CEOs who reach the site through LinkedIn, referrals and Deep Dev Solutions outreach. Recruiters also visit and read the same pages. There is no recruiter button in version 1.

**Success metric.** Clicks on Book a call and completed bookings, plus visitors who go from Home to Work.

### Hard constraints

1. Hammad's 5 clients are confidential. The site never shows a client name, logo, URL or identifying screenshot.
2. No invented claims, numbers, awards or testimonials. Anything unknown is a [PLACEHOLDER] in the content file.
3. Every page has one primary action: Book a call.

### In scope for version 1

1. Five pages: Home, Work, How I Work, Content, Contact.
2. One case study detail page template, rendered from local content.
3. Cal.com booking embed and a working contact form.
4. SEO basics, share images, analytics, accessibility and mobile layout.
5. Deployable to Vercel with no manual steps beyond environment variables.

### Out of scope for version 1

CMS, blog, login, dark mode, multiple languages, pricing page, recruiter call to action, client logos, any page naming a real client.

## Tech stack and project setup

A React app built with Next.js (App Router) and TypeScript. All page content lives in typed local files so Hammad can change text by editing one file or asking Claude Code, with no CMS to maintain in version 1.

| Concern | Choice |
| --- | --- |
| Framework | Next.js, current stable, App Router, TypeScript strict mode |
| Styling | Tailwind CSS, design tokens defined once as CSS variables |
| Fonts | next/font: Space Grotesk (headings), Inter (body) |
| Booking | @calcom/embed-react, inline on Contact |
| Contact form | Route handler at /api/contact, zod validation, Resend for email |
| Analytics | @vercel/analytics |
| Animation | CSS transitions only. Optional light fade in on scroll. No heavy libraries |
| Icons | lucide-react |
| Hosting | Vercel |

### Folder structure

```
app/
  layout.tsx
  page.tsx                  Home
  work/page.tsx             Work grid
  work/[slug]/page.tsx      Case study detail
  how-i-work/page.tsx
  content/page.tsx          Content gallery
  contact/page.tsx
  api/contact/route.ts
  sitemap.ts
  robots.ts
  opengraph-image.tsx
components/                 Header, Footer, Button, Section, CaseStudyCard,
                            ProcessStep, ContentCard, CalEmbed, ContactForm
data/                       site.ts, caseStudies.ts, process.ts, contentPieces.ts
lib/                        seo.ts, validators.ts
public/                     images
```

Use data/ for content files, not content/, so it never clashes with the /content route.

### Environment variables

| Variable | Purpose |
| --- | --- |
| NEXT_PUBLIC_SITE_URL | Canonical site URL, used in metadata and sitemap |
| NEXT_PUBLIC_CAL_LINK | Cal.com event path, for example username/intro-call |
| RESEND_API_KEY | Sends contact form emails |
| CONTACT_TO_EMAIL | Inbox that receives form submissions |
| CONTACT_FROM_EMAIL | Verified sender address on Hammad's domain |

Create a .env.example with these keys and no values. Never commit real keys.

## Design system

Warm white, soft black and one lime accent, matching the Deep Dev Solutions site so Hammad and the company read as one brand. Light theme only. No blue, no neon hacker look, no stock photos of handshakes or laptops, no gradients.

### Colors

Define each token as a CSS variable with the name shown and map it into the Tailwind theme.

| Token | Hex | Use |
| --- | --- | --- |
| --bg | #FAF8F3 | Page background |
| --surface | #FFFFFF | Cards, form fields |
| --text | #141414 | Headings and body |
| --muted | #5C5C57 | Secondary text, captions |
| --border | #E6E2D8 | Dividers, card outlines |
| --accent | #B8F34A | Primary button fill, one highlight per screen |
| --accent-hover | #A6E032 | Primary button hover |
| --accent-text | #141414 | Text on lime. Never white on lime |
| --green | #1E4D2B | Links, small labels, focus ring |

Lime is never used for body text or links, because it fails contrast on the warm white background. Use it on one or two elements per screen.

### Typography

| Element | Font | Size | Weight | Line height |
| --- | --- | --- | --- | --- |
| H1 | Space Grotesk | clamp(2.5rem, 6vw, 4.5rem) | 600 | 1.05 |
| H2 | Space Grotesk | clamp(1.75rem, 4vw, 2.75rem) | 600 | 1.15 |
| H3 | Space Grotesk | 1.25rem | 600 | 1.3 |
| Body | Inter | 1rem (1.0625rem for long text) | 400 | 1.6 |
| Small and captions | Inter | 0.875rem | 400 | 1.5 |
| Button | Inter | 1rem | 600 | 1 |

### Layout and components

1. Max content width 1120px, centered, 16px side padding on mobile and 24px from tablet up.
2. Spacing on an 8px grid. Section padding 96px vertical on desktop, 56px on mobile.
3. Cards: white surface, 1px --border, 12px radius, 24px padding, no heavy shadows. On hover, border darkens slightly and the card lifts 2px.
4. Primary button: --accent fill, --accent-text label, 10px radius, 14px by 24px padding. Secondary button: transparent with a 1px --text outline.
5. Links: --green with underline on hover. Visible 2px --green focus ring with a 2px offset on every interactive element.
6. Motion: 150 to 200ms ease transitions only. Respect prefers-reduced-motion by turning any fade in off.
7. Images: Hammad's photo with 12px radius. Everything else is real work or simple typographic panels. Missing images render a neutral --border placeholder, never a stock photo.

## Routes and global layout

| Route | Page | Title tag | Meta description |
| --- | --- | --- | --- |
| / | Home | [FULL NAME] \| Business Developer at Deep Dev Solutions | Right buyers, real conversations. Hammad Ahmad is a business developer at Deep Dev Solutions and runs SEO campaigns. |
| /work | Work | Work \| [FULL NAME] | Selected client work, anonymized to protect confidentiality. |
| /work/[slug] | Case study | [Case study title] \| [FULL NAME] | [One line from the case study problem] |
| /how-i-work | How I Work | How I Work \| [FULL NAME] | How I take a client from first conversation to a scoped project and a managed build. |
| /content | Content | Content \| [FULL NAME] | LinkedIn posts, carousels and ad creatives I have written and designed. |
| /contact | Contact | Book a call \| [FULL NAME] | Book a 20 minute intro call or send a message. |

Add a simple 404 page with a link back to Home.

### Header

1. Left: the name [FULL NAME] as a text wordmark in Space Grotesk 600, linking to Home.
2. Right: links to Work, How I Work, Content and Contact, then a primary Book a call button linking to /contact#book.
3. Sticky. Transparent at the top of the page, with a --bg background and a 1px --border bottom once scrolled.
4. Mobile: the links collapse into a menu button that opens a full width panel. The Book a call button stays visible in the header on mobile.
5. The current page link is marked with a --green underline.

### Footer

1. Name and one line: Business Developer at Deep Dev Solutions.
2. Links: LinkedIn [LINKEDIN URL], email [EMAIL], and Deep Dev Solutions at https://deepdevsolutions.com.
3. Small print: © 2026 [FULL NAME].
4. No recruiter button and no social icons beyond LinkedIn.

## Home page

Seven sections in this order. All copy below is draft for Hammad to approve. Put it in data/site.ts so it can be edited in one place.

### 1. Hero

1. Small label above the headline: Business Developer at Deep Dev Solutions
2. H1: Right buyers. Real conversations.
3. Subhead: I bring clients to an engineering team and run SEO campaigns. When a business needs custom software, my team builds it.
4. Primary button: Book a 20 minute call (links to /contact#book). Secondary button: See my work (links to /work).
5. Right side on desktop, below on mobile: Hammad's photo [PHOTO], 12px radius.

### 2. Proof strip

Three short facts in a row, each a bold line and a small caption. Hammad confirms every one before launch.

1. [5 client engagements] and the caption: across business development, web and SEO
2. [Clients in Pakistan, the UK and the Netherlands] and the caption: where my clients are based [CONFIRM the country of the second SEO site]
3. [Engineering team behind every build] and the caption: Deep Dev Solutions, Lahore

### 3. What I do

H2: What I do. Three cards.

| Card | Title | Text |
| --- | --- | --- |
| 1 | Client management | Keeping the client and our engineering team aligned from the first call to delivery. |
| 2 | SEO campaigns | Search campaigns that help a business show up when its customers look for what it sells. |
| 3 | Business development | Finding clients who need custom software and working out what they actually need. |

### 4. Selected work

H2: Selected work. Show the 3 case studies marked featured as cards (industry label, title, one line problem, Read more). Link: View all work, to /work.

### 5. How I work teaser

H2: How I work. Four steps in a row, each with a number, a title and one sentence, taken from data/process.ts (first four steps). Link: See the full process, to /how-i-work.

### 6. About

H2: About me. Three short paragraphs.

1. I'm [FULL NAME], a partner and business developer at Deep Dev Solutions, an engineering agency in Lahore that builds websites, business systems and automation for companies in the UK, US and Gulf.
2. My job is the part around the build: finding the client, working out what they actually need, and managing the relationship with our engineering team from first call to delivery.
3. I only say what I can back up. If we are not the right fit, I will tell you on the first call.

### 7. Closing call to action

H2: Want to talk about your business? Text: Book a 20 minute call and tell me what you are working on. Button: Book a call.

## Work page and case studies

### Work page (/work)

1. H1: Work.
2. Intro: Selected client work. Every client is confidential, so each case study is anonymized: no names, no logos, no links.
3. A grid of case study cards, 2 columns on desktop and 1 on mobile, sorted by order. Each card shows the industry label, the title, the problem in one line, the services as small chips, and a Read more link.
4. Below the grid: a closing call to action. H2: Want results like these for your business? Button: Book a call.

### Case study page (/work/[slug])

Generate pages statically with generateStaticParams. Layout from top to bottom:

1. Back link to /work.
2. Header: client descriptor, industry and region as small labels, the H1 title, and the services as chips.
3. Cover panel: the cover image if present, otherwise a typographic panel on --surface with the industry name.
4. Block: The problem.
5. Block: What we built or ran.
6. Block: My role. This states what Hammad personally did, separate from what the engineering team did.
7. Block: Result. Render only if result has text. Never show an empty or placeholder result.
8. Closing call to action: Talk about something similar? Button: Book a call.
9. Links to the previous and next case study.

### Content data shape

```ts
export type CaseStudy = {
  slug: string
  title: string
  clientDescriptor: string // anonymized, e.g. "Construction firm, Pakistan". Never a real name
  industry: string
  region: string
  services: string[]
  problem: string
  whatWeBuilt: string
  myRole: string
  result?: string // only if real and defensible
  coverImage?: string // generic panel or redrawn layout, never a client screenshot
  featured: boolean
  order: number
}
```

Seed data/caseStudies.ts with 5 entries. Every text field is a placeholder such as [CASE STUDY 1 TITLE] or [PROBLEM IN 2 TO 3 SENTENCES]. Entries 1 to 3 are featured. Leave result undefined on all of them. Hammad replaces the placeholders with his real, anonymized content.

**Confirmed starting content for data/caseStudies.ts (Hammad, 22 October 2026).** Use this in place of the matching placeholders. Fields still in [BRACKETS] stay placeholders. Hammad's role on entries 1 and 2 is business developer, so the copy must never imply he built those sites.

| # | Client descriptor | Industry | Region | Hammad's role | Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | Electronics importer | Electronics import and retail | Pakistan | Business development: found the client, handled the deal and managed the relationship | Featured. The live site exists but is not linked |
| 2 | Construction firm | Construction and civil engineering | Pakistan | Business development: found the client, handled the deal and managed the relationship | Featured. The live site exists but is not linked |
| 3 | [CONFIRM] business with a WordPress site | [CONFIRM] | Scotland, UK | [CONFIRM] | The client later removed the site. Say so plainly, show no screenshot or link, and write only what Hammad can state |
| 4 | Electrical services business | Electrical services | Netherlands | Ran the SEO campaign personally for 3 months | Featured. Hammad no longer has account access, so there are no screenshots. State no rankings, traffic or other numbers |
| 5 | [CONFIRM] | [CONFIRM] | [CONFIRM] | Ran the SEO campaign personally | Details still needed |

Regions are widened on purpose where a narrower one could identify the client.

## How I Work page

This page carries the most weight because Hammad has no personal result numbers yet, so the process is the proof. Hammad confirms every step matches what he actually does before launch.

### Layout

1. H1: How I work.
2. Intro: From the first conversation to delivery, I manage the relationship.
3. Four steps in a vertical list. Each step has a large number in Space Grotesk, a title and one or two sentences. A thin --border line connects the numbers on desktop.
4. Closing call to action. H2: Want to see how this would look for your business? Button: Book a call.

### Steps (put in data/process.ts as an array of { n, title, text }; Home shows the first four)

| # | Title | Text |
| --- | --- | --- |
| 1 | Find | I find businesses that need custom software or stronger search visibility. |
| 2 | Understand | A call to work out what the business actually needs. If we are not the right fit, I say so. |
| 3 | Scope | Our engineering team reviews the requirement and I come back with a clear scope and quote. |
| 4 | Manage | Once you approve, the build starts and I manage the relationship between you and the team. |

## Content and Contact pages

### Content page (/content)

**Status: hidden in version 1.** Hammad has no posts yet, so an empty gallery would hurt more than help. Build this page, but add showContent: false to data/site.ts. While it is false, leave Content out of the header, footer, sitemap and every link on the site, and return a 404 for /content. Hammad sets it to true once there are 6 real pieces.

1. H1: Content. Intro: Posts, carousels and ad creatives I have written and designed. Client details are removed.
2. Filter tabs above the grid: All, Posts, Carousels, Ads. Filtering happens on the client with no page reload.
3. Grid of cards: 3 columns on desktop, 2 on tablet, 1 on mobile. Each card shows the image, the type label, the title, a one line note on what it was for, and the month and year.
4. Clicking a card opens a larger image in an accessible lightbox. Escape closes it, focus is trapped while open, and focus returns to the card on close.
5. Empty state if a filter has no items: Nothing here yet.
6. Closing call to action: Book a call.

```ts
export type ContentPiece = {
  id: string
  title: string
  type: 'post' | 'carousel' | 'ad'
  image: string // path in /public, no client names in the file name
  alt: string // describes the design, no client names
  note: string
  date: string // ISO date
}
```

Seed data/contentPieces.ts with 6 placeholder entries using neutral --border image panels.

### Contact page (/contact)

1. H1: Let's talk. Intro: Book a 20 minute call, or send a message and I will reply within [REPLY TIME].
2. Booking block with id book. Cal.com inline embed using NEXT_PUBLIC_CAL_LINK, brand color #141414. If the embed fails to load, show a plain link to the Cal.com page instead.
3. Message form below it. Fields: name (required), email (required), company (optional), message (required, 10 to 2000 characters). Add a hidden honeypot field named website. Submit button: Send message.
4. Direct details: email [EMAIL], LinkedIn [LINKEDIN URL], Lahore, Pakistan, and working hours [WORKING HOURS].

### Form behavior

1. Validate with zod on the client and again in /api/contact.
2. Reject any request where the honeypot field is filled, and respond as if it succeeded.
3. Add a basic per IP limit of 5 submissions per hour. An in memory limit is fine for version 1.
4. Send through Resend to CONTACT_TO_EMAIL from CONTACT_FROM_EMAIL, with the sender's address as reply to and the subject: New message from [name] via portfolio.
5. While sending, disable the button and show Sending. On success show: Thanks, I will reply within [REPLY TIME]. On failure show: Something went wrong. Email me at [EMAIL] instead.
6. Never log message contents.

## SEO, accessibility and performance

### SEO

1. Use the Next.js metadata API with titles and descriptions from the routes table, built through one helper in lib/seo.ts. Set a canonical URL on every page from NEXT_PUBLIC_SITE_URL.
2. Add Person JSON-LD on Home with Deep Dev Solutions as worksFor and the LinkedIn profile in sameAs.
3. Generate sitemap.ts with every route and every case study. Generate robots.ts that allows everything except /api.
4. Generate a 1200 by 630 share image in opengraph-image.tsx: --bg background, the name in Space Grotesk, the role line below it, and a thin lime bar. Set the Twitter card to summary_large_image.
5. One H1 per page and a logical heading order.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[FULL NAME]",
  "jobTitle": "Business Developer",
  "url": "[SITE URL]",
  "worksFor": { "@type": "Organization", "name": "Deep Dev Solutions", "url": "https://deepdevsolutions.com" },
  "sameAs": ["[LINKEDIN URL]"]
}
```

### Accessibility (target WCAG 2.2 AA)

1. Semantic landmarks: header, nav, main, footer. A skip to content link as the first focusable element.
2. Visible focus on every interactive element. The menu and lightbox work fully by keyboard.
3. Every image has alt text. Every form field has a label, and errors are tied to their fields with aria-describedby.
4. Check text contrast against the tokens. Fix any muted text that fails.
5. Honor prefers-reduced-motion.

### Performance

1. Target 90 or above on mobile Lighthouse for performance, accessibility, best practices and SEO.
2. Server components by default. Client components only for the menu, filters, lightbox, form and booking embed.
3. next/image for all images with set dimensions, so nothing shifts. Fonts through next/font.
4. Load the Cal.com embed only on /contact. Analytics loads async.

## Placeholders and content rules

Every placeholder is written in [BRACKETS] and lives in data/ files or environment variables, never hard coded in components.

**Confirmed by Hammad on 22 October 2026.** Use these values now. The matching rows in the table below are resolved.

| Item | Value |
| --- | --- |
| [FULL NAME] | Hammad Ahmad |
| [EMAIL] | hammadahmadch17@gmail.com |
| [SITE URL] | https://hammadahmadch.com |
| [REPLY TIME] | within one day |
| Slogan, used as the Home H1 | Right buyers. Real conversations. |
| Content page | Hidden in version 1 with showContent set to false, because Hammad has no posts yet |
| Case study content | See the confirmed starting content under Work page and case studies |
| How I Work page | Four steps: Find, Understand, Scope, Manage. Hammad does not personally run outreach, so no outreach steps or claims appear anywhere on the site |

Still open: [LINKEDIN URL], [PHOTO], [WORKING HOURS], the Cal.com link, the Resend key and sender, the details for case studies 3 and 5, and the country of the second SEO site.

| Placeholder | Where it appears | Supplied by |
| --- | --- | --- |
| [FULL NAME] | Header, titles, footer, schema, share image | Hammad, exactly as on LinkedIn |
| [SITE URL] | Metadata, sitemap, schema | Hammad, the personal domain once chosen |
| [EMAIL] | Footer, Contact, error message | Hammad |
| [LINKEDIN URL] | Footer, Contact, schema | Hammad |
| [PHOTO] | Home hero | Hammad |
| [REPLY TIME] | Contact intro and success message | Hammad |
| [WORKING HOURS] | Contact details | Hammad |
| Proof strip facts | Home | Hammad confirms each one |
| About sentence in his own words | Home | Hammad |
| Process step 6 confirmation | How I Work | Hammad |
| 5 anonymized case studies | Work, Home | Hammad |
| 6 content pieces and images | Content | Hammad |
| Cal.com event link | NEXT_PUBLIC_CAL_LINK | Hammad creates the account and a 20 minute event |
| Resend key and verified sender | Environment variables | Hammad |

### Content rules

1. No client name, logo, URL or identifying screenshot anywhere, including image file names and alt text.
2. No invented numbers, awards or testimonials. A result is shown only if the field has real text.
3. Plain, direct copy. No buzzwords, no hype, no claims Hammad cannot defend on a call.
4. If Hammad changes any copy, he edits the matching data/ file. Components contain no marketing text.

## Acceptance criteria and build instructions

### Build instructions for Claude Code

1. Read this whole document first. Build exactly what it specifies. Do not add features, pages or dependencies that are not listed. If something is unclear, ask before guessing.
2. Scaffold Next.js with TypeScript, Tailwind, ESLint and the App Router. Install only the packages named in the stack table.
3. Set up tokens, fonts, the layout, the header and the footer.
4. Create the data/ files and types with the placeholder content described above.
5. Build the pages in this order: Home, Work with the case study template, How I Work, Content, Contact.
6. Add the contact API route, sitemap, robots, share image, JSON-LD and analytics.
7. Add scripts/check-placeholders.mjs. It scans data/ for any remaining [BRACKETED] text and lists it. Run it as prebuild, and make it fail the build only when the environment variable STRICT_PLACEHOLDERS is true, which Hammad sets on Vercel production once his content is in.
8. Run lint, a type check and a production build. Run Lighthouse on mobile and fix anything under 90.
9. Write a README covering how to run the site, how to edit each data/ file, the environment variables, and how to deploy to Vercel.

### Acceptance criteria

- [ ] All routes and the case study pages render (Content only when showContent is true) at 375px and 1280px wide with no horizontal scroll
- [ ] Colors and fonts match the design system, and no hex value appears outside the token definition
- [ ] A Book a call button sits in the header and is the primary action on every page, linking to /contact#book
- [ ] The Cal.com embed loads on /contact, and the fallback link appears when it is blocked
- [ ] The contact form validates, rejects honeypot fills, shows loading, success and error states, and delivers an email in a test
- [ ] The Result block on a case study is hidden when the field is empty
- [ ] The placeholder check lists every bracketed item and fails the build when STRICT_PLACEHOLDERS is true
- [ ] sitemap.xml, robots.txt, the share image and the Person JSON-LD all render correctly
- [ ] The menu and the lightbox work by keyboard, and every image has alt text
- [ ] Lighthouse mobile is 90 or above in all four categories
- [ ] Lint, type check and production build all pass

### Starter prompt for Claude Code

Read PRD.md in full, then build the portfolio site it describes in this folder.
Follow the build instructions section in order. Use only the listed stack.
Keep all marketing copy in the data/ files with the placeholders as written.
When finished, run lint, the type check and a production build, and tell me
what passed and anything you could not verify.
