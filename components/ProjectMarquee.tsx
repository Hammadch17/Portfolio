import { ArrowUpRight } from "lucide-react";
import type { ProjectLink } from "@/data/caseStudies";

export function ProjectMarquee({ links }: { links: ProjectLink[] }) {
  const items = [...links, ...links];

  return (
    <div className="marquee-group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max gap-6">
        {items.map((link, i) => (
          <a
            key={`${link.slug}-${i}`}
            href={link.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-surface px-6 py-4 transition-colors duration-150 ease-out hover:border-accent"
          >
            <span className="font-heading text-lg font-semibold text-text">
              {link.title}
            </span>
            <span className="text-xs uppercase tracking-wide text-muted">
              {link.industry}
            </span>
            <ArrowUpRight size={16} className="text-accent" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}
