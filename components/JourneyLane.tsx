import { ScrollReveal } from "@/components/ScrollReveal";
import type { JourneyEntry } from "@/data/about";

export function JourneyLane({
  title,
  entries,
}: {
  title: string;
  entries: JourneyEntry[];
}) {
  return (
    <div>
      <h3 className="font-heading text-xl font-semibold text-text">
        {title}
      </h3>
      <ol className="mt-6 space-y-8 border-l border-border pl-6">
        {entries.map((entry, i) => (
          <ScrollReveal key={entry.title} delay={i * 100}>
            <li>
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {entry.status === "in-progress" && entry.inProgressLabel
                  ? entry.inProgressLabel
                  : entry.dateRange}
              </p>
              <h4 className="mt-1 text-lg font-semibold text-text">
                {entry.title}
              </h4>
              {entry.organization && (
                <p className="mt-0.5 text-sm text-muted">
                  {entry.organization}
                </p>
              )}
              {entry.description && (
                <p className="mt-2 text-base text-muted">
                  {entry.description}
                </p>
              )}
              {entry.bullets && entry.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </div>
  );
}
