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
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <span className="font-heading text-2xl font-semibold text-text">
            {String(step.n).padStart(2, "0")}
          </span>
          <span
            aria-hidden
            className="mt-2 w-px flex-1 bg-border last:hidden"
          />
        </div>
        <div className="pb-10">
          <h3 className="text-lg font-semibold text-text">{step.title}</h3>
          <p className="mt-2 text-base text-muted">{step.text}</p>
        </div>
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
