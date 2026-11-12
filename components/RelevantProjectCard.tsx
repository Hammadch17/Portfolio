import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { RelevantProject } from "@/data/services";
import { getCaseStudyBySlug } from "@/data/caseStudies";

export function RelevantProjectCard({ project }: { project: RelevantProject }) {
  const caseStudy = project.slug ? getCaseStudyBySlug(project.slug) : undefined;
  const title = caseStudy?.title ?? project.title ?? "";
  const isExternal = !caseStudy;
  const href = caseStudy ? `/work/${caseStudy.slug}` : (project.url ?? "#");

  const className =
    "hover-card flex h-full flex-col rounded-xl border border-border bg-surface p-5";

  const inner = (
    <>
      {project.label && (
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          {project.label}
        </p>
      )}
      <h4 className="mt-1 text-base font-semibold text-text">{title}</h4>
      <p className="mt-2 text-sm text-muted">{project.note}</p>

      {project.stats && (
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-xl font-semibold text-text">
                {stat.value}
              </p>
              <p className="text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      {project.statsNote && (
        <p className="mt-2 text-xs text-muted">{project.statsNote}</p>
      )}

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-green">
        {isExternal ? "Visit site" : "Read case study"}
        {isExternal ? (
          <ExternalLink size={14} aria-hidden />
        ) : (
          <ArrowRight size={14} aria-hidden />
        )}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
