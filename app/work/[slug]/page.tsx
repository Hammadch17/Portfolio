import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Target,
  UserCheck,
  Calendar,
  Building2,
  UserRound,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import {
  caseStudies,
  getAllCaseStudiesSorted,
  getCaseStudyBySlug,
} from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return buildMetadata({
      title: "Case study | Hammad Ahmad",
      description: "Case study.",
      path: `/work/${slug}`,
    });
  }

  return buildMetadata({
    title: `${caseStudy.title} | Hammad Ahmad`,
    description: caseStudy.subtitle,
    path: `/work/${caseStudy.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const sorted = getAllCaseStudiesSorted();
  const index = sorted.findIndex((c) => c.slug === caseStudy.slug);
  const prev = sorted[(index - 1 + sorted.length) % sorted.length];
  const next = sorted[(index + 1) % sorted.length];

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-green hover:underline"
        >
          <ArrowLeft size={16} aria-hidden /> Back to Work
        </Link>

        <div className="mt-8">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            {caseStudy.industry}
          </p>
          <h1 className="mt-4 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
            {caseStudy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {caseStudy.subtitle}
          </p>

          <div className="mt-8 md:flex md:items-start md:gap-6">
            <div className="relative w-full overflow-hidden rounded-xl border border-border bg-surface md:flex-1">
              <div
                className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent"
                aria-hidden
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(200px,auto)_minmax(280px,auto)_1fr]">
                {caseStudy.timeline && (
                  <div className="flex items-center gap-3 border-b border-border p-5 md:border-b-0 md:border-r">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Calendar size={16} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        Timeline
                      </p>
                      <p className="mt-1 text-balance text-[17px] font-medium leading-snug text-text">
                        {caseStudy.timeline}
                      </p>
                    </div>
                  </div>
                )}
                {caseStudy.industry && (
                  <div className="flex items-center gap-3 border-b border-border p-5 lg:border-b-0 lg:border-r">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Building2 size={16} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        Industry
                      </p>
                      <p className="mt-1 text-balance text-[17px] font-medium leading-snug text-text">
                        {caseStudy.industry}
                      </p>
                    </div>
                  </div>
                )}
                {caseStudy.role && (
                  <div className="flex items-center gap-3 p-5 md:col-span-2 lg:col-span-1">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <UserRound size={16} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        My role
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {caseStudy.roleTags.map((tag) => (
                          <li
                            key={tag}
                            tabIndex={0}
                            className="hover-chip whitespace-nowrap rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-text"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {caseStudy.liveUrl && (
              <div className="mt-6 md:mt-0 md:shrink-0">
                <Button
                  href={caseStudy.liveUrl}
                  variant="secondary"
                  withArrow
                  className="whitespace-nowrap"
                >
                  Visit live site
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="relative mt-10">
          <div
            className="glow left-1/2 top-1/2 h-[420px] w-[80%] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-xl border border-border bg-bg">
            <div className="flex items-center gap-1.5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden />
            </div>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={caseStudy.cover}
                alt={`${caseStudy.title} cover screenshot`}
                fill
                quality={90}
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <p className="max-w-2xl text-lg text-muted">{caseStudy.overview}</p>
      </Section>

      {caseStudy.stats.length > 0 && (
        <Section className="!pt-0">
          <div className="grid gap-8 rounded-xl border border-border bg-surface p-8 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-semibold text-text sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          {caseStudy.statsNote && (
            <p className="mt-3 text-sm text-muted">{caseStudy.statsNote}</p>
          )}
        </Section>
      )}

      <Section className="!pt-0">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-text">
              <Target size={20} className="text-accent" aria-hidden />
              The challenge
            </h2>
            <ul className="mt-5 space-y-3">
              {caseStudy.challenge.map((item) => (
                <li key={item} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-text">
              <UserCheck size={20} className="text-accent" aria-hidden />
              My role
            </h2>
            <ul className="mt-5 space-y-3">
              {caseStudy.myRole.map((item) => (
                <li key={item} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="text-2xl font-semibold text-text">The solution</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudy.solution.map((item) => (
            <div
              key={item.title}
              tabIndex={0}
              className="hover-card rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {caseStudy.timelineSteps && (
        <Section className="!pt-0">
          <h2 className="text-2xl font-semibold text-text">Timeline</h2>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
            {caseStudy.timelineSteps.map((step, i) => (
              <div key={step.label} className="relative flex-1">
                <div className="flex items-center gap-3 md:flex-col md:items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent">
                    {i + 1}
                  </div>
                  <div className="md:mt-3">
                    <p className="text-base font-medium text-text">
                      {step.label}
                    </p>
                    <p className="text-sm text-muted">{step.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className="!pt-0">
        <h2 className="text-2xl font-semibold text-text">Results</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3 text-base text-muted">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden
              />
              {outcome}
            </li>
          ))}
        </ul>
      </Section>

      {caseStudy.gallery.length > 0 && (
        <Section className="!pt-0">
          <h2 className="text-2xl font-semibold text-text">Gallery</h2>
          <div className="mt-6">
            <GalleryLightbox items={caseStudy.gallery} />
          </div>
        </Section>
      )}

      <Section className="!pt-0">
        <h2 className="text-2xl font-semibold text-text">
          Services and technologies
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {caseStudy.services.map((service) => (
            <li
              key={service}
              tabIndex={0}
              className="hover-chip rounded-full border border-border px-4 py-1.5 text-sm text-text"
            >
              {service}
            </li>
          ))}
        </ul>
      </Section>

      {caseStudy.links && (
        <Section className="!pt-0">
          <h2 className="text-2xl font-semibold text-text">Project links</h2>
          <div className="mt-5 divide-y divide-border rounded-xl border border-border">
            {caseStudy.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-150 ease-out hover:bg-surface"
              >
                <span>
                  <span className="text-base font-medium text-text">
                    {link.label}
                  </span>
                  {link.note && (
                    <span className="ml-2 text-sm text-muted">
                      {link.note}
                    </span>
                  )}
                </span>
                <ExternalLink
                  size={16}
                  className="shrink-0 text-muted"
                  aria-hidden
                />
              </a>
            ))}
          </div>
        </Section>
      )}

      {caseStudy.quote && (
        <Section className="!pt-0">
          <blockquote className="rounded-xl border border-border bg-surface p-8">
            <p className="text-xl font-medium text-text">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted">
              {caseStudy.quote.author}
            </footer>
          </blockquote>
        </Section>
      )}

      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            Want to talk about your project?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact#book" withArrow>Book a call</Button>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border pt-10">
        <div className="flex items-center justify-between text-sm font-medium">
          <Link
            href={`/work/${prev.slug}`}
            className="inline-flex items-center gap-2 text-green hover:underline"
          >
            <ArrowLeft size={16} aria-hidden /> {prev.title}
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="inline-flex items-center gap-2 text-green hover:underline"
          >
            {next.title} <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}
