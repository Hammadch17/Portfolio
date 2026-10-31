import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-150 ease-out hover:border-accent hover:-translate-y-0.5"
    >
      <div className="overflow-hidden rounded-t-xl border-b border-border bg-bg">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
          <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
        </div>
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={caseStudy.cover}
            alt={`${caseStudy.title} cover screenshot`}
            fill
            quality={90}
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-muted">{caseStudy.industry}</p>
        <h3 className="mt-2 text-xl font-semibold text-text">
          {caseStudy.title}
        </h3>
        <p className="mt-3 text-base text-muted">{caseStudy.cardResult}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {caseStudy.role.split(",")[0]}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green underline-offset-4 group-hover:underline">
            Read case study <ArrowRight size={14} aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
