import type { ProcessStep as ProcessStepType } from "@/data/process";

export function ProcessStep({
  step,
  variant = "row",
}: {
  step: ProcessStepType;
  variant?: "row" | "list";
}) {
  if (variant === "list") {
    return (
      <div
        tabIndex={0}
        className="hover-card flex h-full flex-col rounded-2xl border border-border bg-surface p-7 md:p-8"
      >
        <span className="font-heading text-2xl font-semibold text-accent/80">
          {String(step.n).padStart(2, "0")}
        </span>
        <h3 className="mt-4 text-lg font-semibold text-text">{step.title}</h3>
        <p className="mt-2 text-base text-muted">{step.text}</p>
      </div>
    );
  }

  return (
    <div>
      <span className="font-heading text-2xl font-semibold text-text">
        {String(step.n).padStart(2, "0")}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-text">{step.title}</h3>
      <p className="mt-2 text-sm text-muted">{step.text}</p>
    </div>
  );
}
