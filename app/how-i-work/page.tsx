import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ProcessStep } from "@/components/ProcessStep";
import { process } from "@/data/process";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How I Work | Hammad Ahmad",
  description:
    "How I take a client from first conversation to a scoped project and a managed build.",
  path: "/how-i-work",
});

export default function HowIWorkPage() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          How I work
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          From the first conversation to delivery, I manage the relationship.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-2xl">
          {process.map((step) => (
            <ProcessStep key={step.n} step={step} variant="list" />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            Want to see how this would look for your business?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact#book">Book a call</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
