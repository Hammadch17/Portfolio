import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { getAllCaseStudiesSorted } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work | Hammad Ahmad",
  description: "Five client projects I managed from the first conversation to delivery.",
  path: "/work",
});

export default function WorkPage() {
  const caseStudies = getAllCaseStudiesSorted();

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          Work
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Five client projects I managed from the first conversation to
          delivery.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            Want results like these for your business?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact#book" withArrow>Book a call</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
