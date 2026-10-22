import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
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
    description: caseStudy.problem,
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
          <ArrowLeft size={16} aria-hidden /> Back to work
        </Link>

        <div className="mt-8">
          <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-wide text-muted">
            <span>{caseStudy.clientDescriptor}</span>
            <span aria-hidden>·</span>
            <span>{caseStudy.industry}</span>
            <span aria-hidden>·</span>
            <span>{caseStudy.region}</span>
          </div>
          <h1 className="mt-4 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
            {caseStudy.title}
          </h1>
          {caseStudy.services.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {caseStudy.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-green hover:underline"
            >
              Visit the live site <ExternalLink size={16} aria-hidden />
            </a>
          )}
        </div>

        <div className="mt-10">
          {caseStudy.coverImage ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border">
              <Image
                src={caseStudy.coverImage}
                alt={`${caseStudy.industry} case study cover`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-border bg-surface">
              <p className="font-heading text-xl font-semibold text-muted">
                {caseStudy.industry}
              </p>
            </div>
          )}
        </div>
      </Section>

      <Section className="pt-0 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-text">The problem</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            {caseStudy.problem}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-text">
            What we built or ran
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            {caseStudy.whatWeBuilt}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-text">My role</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            {caseStudy.myRole}
          </p>
        </div>

        {caseStudy.result && (
          <div>
            <h2 className="text-2xl font-semibold text-text">Result</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              {caseStudy.result}
            </p>
          </div>
        )}
      </Section>

      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            Talk about something similar?
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
