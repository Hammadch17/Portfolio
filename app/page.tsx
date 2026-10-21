import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ProcessStep } from "@/components/ProcessStep";
import { site, hero, proofStrip, whatIDo, about } from "@/data/site";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import { process } from "@/data/process";
import { personJsonLd } from "@/lib/seo";

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
      <Section className="pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-muted">{hero.label}</p>
            <h1 className="mt-4 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
              {hero.h1}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              {hero.subhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact#book">Book a 20 minute call</Button>
              <Button href="/work" variant="secondary">
                See my work
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last">
            {site.photo.startsWith("[") ? (
              <div className="aspect-square w-full max-w-sm rounded-[12px] border border-border bg-surface md:ml-auto" />
            ) : (
              <Image
                src={site.photo}
                alt={site.fullName}
                width={480}
                height={480}
                className="aspect-square w-full max-w-sm rounded-[12px] object-cover md:ml-auto"
              />
            )}
          </div>
        </div>
      </Section>

      {/* Proof strip */}
      <Section className="py-10 md:py-14">
        <div className="grid gap-8 border-y border-border py-10 md:grid-cols-3">
          {proofStrip.map((item) => (
            <div key={item.caption}>
              <p className="font-heading text-xl font-semibold text-text">
                {item.fact}
              </p>
              <p className="mt-2 text-sm text-muted">{item.caption}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What I do */}
      <Section>
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          What I do
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatIDo.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-muted">{item.text}</p>
            </div>
          ))}
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
            <Button href="/contact#book">Book a call</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
