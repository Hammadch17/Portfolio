import { Code2, Search, Layers, Check } from "lucide-react";
import { Button } from "@/components/Button";
import type { Service } from "@/data/services";

const icons = { Code2, Search, Layers };

export function ServiceCard({
  service,
  variant = "full",
}: {
  service: Service;
  variant?: "full" | "compact";
}) {
  const Icon = icons[service.icon];

  return (
    <div
      tabIndex={0}
      className="hover-card flex h-full flex-col rounded-2xl border border-border bg-surface p-7 md:p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg">
        <Icon size={22} className="text-accent" aria-hidden />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-text">
        {service.title}
      </h3>
      <p className="mt-3 text-base text-muted">{service.summary}</p>

      {variant === "full" && (
        <>
          <p className="mt-4 text-sm text-muted">
            <span className="font-medium text-text">Best for:</span>{" "}
            {service.bestFor}
          </p>
          <ul className="mt-5 space-y-2.5">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-muted"
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-text">{service.benefit}</p>
          <div className="mt-auto pt-6">
            <Button href="/contact#book" withArrow className="w-full justify-center">
              Book a call
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
