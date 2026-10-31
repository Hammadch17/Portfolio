import Image from "next/image";
import { Users, Search, TrendingUp } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectMarquee } from "@/components/ProjectMarquee";
import { site, hero, whatIDo, about } from "@/data/site";
import { projectLinks, getFeaturedCaseStudies } from "@/data/caseStudies";
import { process } from "@/data/process";
import { personJsonLd } from "@/lib/seo";

const whatIDoIcons = [Users, Search, TrendingUp];

export default function Home() {
  const featured = getFeaturedCaseStudies();
  const teaserSteps = process.slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

      {/* Hero */}
      <Section className="relative overflow-hidden pt-10 md:pt-16">
        <svg
          className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 text-accent/25 md:h-56 md:w-56"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 160C40 160 60 120 60 80C60 40 90 10 140 10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted">{hero.label}</p>
            <h1 className="mt-4 font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.1] text-text">
              {hero.h1Lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              {hero.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact#book" withArrow>
                Book a 20 minute call
              </Button>
              <Button href="/work" variant="secondary">
                See my work
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {whatIDo.map((item, i) => {
                const Icon = whatIDoIcons[i];
                return (
                  <div key={item.title} className="flex items-center gap-2">
                    <Icon size={18} className="text-accent" aria-hidden />
                    <span className="text-sm text-muted">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div
              className="glow left-1/2 top-1/2 h-[460px] w-[460px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
            <svg
              className="pointer-events-none absolute -right-6 top-6 h-32 w-32 text-accent/25"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden
            >
              <path
                d="M190 10C150 10 130 50 130 90C130 130 100 160 50 160"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            {site.photo.startsWith("[") ? (
              <div className="relative aspect-[3/4] w-full max-w-[420px] rounded-[12px] border border-border bg-surface md:ml-auto" />
            ) : (
              <div
                className="photo-frame group relative mx-auto w-full max-w-[420px] md:ml-auto"
                tabIndex={0}
              >
                <div
                  className="glow left-1/2 top-1/2 h-[380px] w-[380px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
                  aria-hidden
                />
                <div className="relative aspect-[1000/1314] w-full">
                  <Image
                    src={site.photo}
                    alt="Hammad Ahmad"
                    width={1000}
                    height={1314}
                    quality={90}
                    priority
                    sizes="(min-width: 768px) 420px, 90vw"
                    className="photo-img relative h-full w-full object-contain object-bottom"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Project marquee */}
      <Section className="py-10 md:py-14">
        <p className="mb-6 font-heading text-xl font-semibold text-text md:text-2xl">
          Projects I&apos;ve worked on
        </p>
        <ProjectMarquee links={projectLinks} />
      </Section>

      {/* What I do */}
      <Section>
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          What I do
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatIDo.map((item, i) => {
            const Icon = whatIDoIcons[i];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6 transition-all duration-150 ease-out hover:border-accent hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg">
                  <Icon size={20} className="text-accent" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Selected work */}
      <Section>
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          Selected work
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/work" variant="secondary">
            View all work
          </Button>
        </div>
      </Section>

      {/* How I work teaser */}
      <Section>
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          How I work
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {teaserSteps.map((step) => (
            <ProcessStep key={step.n} step={step} variant="row" />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/how-i-work" variant="secondary">
            See the full process
          </Button>
        </div>
      </Section>

      {/* About */}
      <Section>
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
          <div
            className="photo-frame group relative mx-auto w-[280px] md:mx-0 md:w-[360px]"
            tabIndex={0}
          >
            <div
              className="glow left-1/2 top-1/2 h-[380px] w-[380px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
            <div className="photo-ring relative overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="relative aspect-[4/5] w-full">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,color-mix(in_srgb,var(--accent)_22%,transparent)_0%,transparent_70%)]"
                  aria-hidden
                />
                <Image
                  src={site.secondaryPhoto}
                  alt="Hammad Ahmad"
                  width={360}
                  height={450}
                  quality={90}
                  sizes="(min-width: 768px) 360px, 280px"
                  className="photo-img relative h-full w-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex justify-center px-4 pb-4 pt-3">
                <span className="rounded-full border border-border bg-bg px-4 py-1.5 text-center text-xs text-muted">
                  <span className="font-medium text-text">Hammad Ahmad</span>{" "}
                  · {site.role.split(" at ")[0]}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
              About me
            </h2>
            <div className="mt-8 max-w-2xl space-y-5">
              {about.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            Want to talk about your business?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Book a 20 minute call and tell me what you are working on.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact#book" withArrow>Book a call</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
