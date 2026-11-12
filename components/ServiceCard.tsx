import Link from "next/link";
import { Code2, Search, Layers } from "lucide-react";
import type { ServiceSection } from "@/data/services";

const icons = { Code2, Search, Layers };

export function ServiceCard({
  service,
}: {
  service: Pick<ServiceSection, "id" | "title" | "icon" | "promise">;
}) {
  const Icon = icons[service.icon];

  return (
    <Link
      href={`/services#${service.id}`}
      className="hover-card flex h-full flex-col rounded-2xl border border-border bg-surface p-7 md:p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg">
        <Icon size={22} className="text-accent" aria-hidden />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-text">
        {service.title}
      </h3>
      <p className="mt-3 text-base text-muted">{service.promise}</p>
    </Link>
  );
}
