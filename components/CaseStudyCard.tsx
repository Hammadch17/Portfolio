import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-150 ease-out hover:border-text hover:-translate-y-0.5"
    >
      <p className="text-sm text-muted">{caseStudy.industry}</p>
      <h3 className="mt-2 text-xl font-semibold text-text">
        {caseStudy.title}
      </h3>
      <p className="mt-3 text-base text-muted">{caseStudy.problem}</p>
      {caseStudy.services.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
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
      <span className="mt-4 inline-block text-sm font-medium text-green underline-offset-4 group-hover:underline">
        Read more
      </span>
    </Link>
  );
}
