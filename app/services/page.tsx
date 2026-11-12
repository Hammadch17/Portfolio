import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Search, Layers, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { RelevantProjectCard } from "@/components/RelevantProjectCard";
import { Faq } from "@/components/Faq";
import {
  servicesHero,
  quickJumpLinks,
  serviceSections,
  trustBar,
  servicesFaq,
  servicesClosingCta,
} from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const icons = { Code2, Search, Layers };

export const metadata: Metadata = buildMetadata({
  title: "Services | Hammad Ahmad",
  description:
    "Web development, SaaS development and SEO services from Hammad Ahmad, Business Development Executive at Deep Dev Solutions, Lahore.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          {servicesHero.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          {servicesHero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button href="/contact#book" withArrow>
            Book a call
          </Button>
          <Link
            href="/work"
            className="text-sm font-medium text-green underline-offset-4 hover:underline"
          >
            See my work
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {quickJumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors duration-150 ease-out hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Section>

      {serviceSections.map((service) => {
        const Icon = icons[service.icon];
        return (
          <Section
            key={service.id}
            id={service.id}
            className="scroll-mt-28 border-t border-border"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface">
              <Icon size={22} className="text-accent" aria-hidden />
            </div>
            <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
              {service.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {service.promise}
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-text">
                  What I do
                </h3>
                <p className="mt-3 text-base text-muted">{service.whatIDo}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text">
                  How it gets built
                </h3>
                <ul className="mt-3 space-y-3">
                  {service.howItGetsBuilt.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-text">
                What clients get
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.whatClientsGet.map((point) => (
                  <li key={point} className="flex gap-2.5 text-base text-muted">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-text">
                Relevant projects
              </h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {service.relevantProjects.map((project) => (
                  <RelevantProjectCard
                    key={project.slug ?? project.title}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="border-t border-border">
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          {trustBar.heading}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {trustBar.clients.map((client) => (
            <li key={client} className="text-base text-text">
              {client}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{trustBar.industriesLine}</p>
      </Section>

      <Section className="border-t border-border">
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          Frequently asked questions
        </h2>
        <div className="mt-8 max-w-2xl">
          <Faq items={servicesFaq} />
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            {servicesClosingCta.heading}
          </h2>
          <p className="mt-4 text-lg text-muted">{servicesClosingCta.text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <Button href="/contact#book" withArrow>
              Book a call
            </Button>
            <Link
              href="/contact"
              className="text-sm font-medium text-green underline-offset-4 hover:underline"
            >
              Send a message
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
