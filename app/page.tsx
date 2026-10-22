import Image from "next/image";
import { Users, Search, TrendingUp, Globe, Building2 } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ProcessStep } from "@/components/ProcessStep";
import { site, hero, proofStrip, whatIDo, about } from "@/data/site";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import { process } from "@/data/process";
import { personJsonLd } from "@/lib/seo";

const whatIDoIcons = [Users, Search, TrendingUp];
const proofStripIcons = [Users, Globe, Building2];

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
            <h1 className="mt-4 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
              {hero.h1}
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
              className="glow left-1/2 top-1/2 h-[420px] w-[420px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
            {site.photo.startsWith("[") ? (
              <div className="relative aspect-square w-full max-w-sm rounded-[12px] border border-border bg-surface md:ml-auto" />
            ) : (
              <div className="group relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-[12px] border border-border transition-colors duration-200 ease-out hover:border-accent md:ml-auto">
                <Image
                  src={site.photo}
                  alt={site.fullName}
                  fill
                  sizes="(min-width: 768px) 448px, 90vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Proof strip */}
      <Section className="py-10 md:py-14">
        <div className="grid gap-8 rounded-xl border border-border bg-surface p-8 md:grid-cols-3">
          {proofStrip.map((item, i) => {
            const Icon = proofStripIcons[i];
            return (
              <div key={item.caption} className="flex items-start gap-4">
                <Icon size={24} className="mt-1 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="font-heading text-xl font-semibold text-text">
                    {item.fact}
                  </p>
                  <p className="mt-2 text-sm text-muted">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
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
