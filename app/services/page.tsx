import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Users, ShieldCheck, Handshake } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import {
  servicesHero,
  services,
  whyWorkWithMe,
  servicesClosingCta,
} from "@/data/services";
import { buildMetadata } from "@/lib/seo";

const whyIcons = [Lightbulb, Users, ShieldCheck, Handshake];

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
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          Why work with me
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyWorkWithMe.map((point, i) => {
            const Icon = whyIcons[i];
            return (
              <div key={point} className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg">
                  <Icon size={20} className="text-accent" aria-hidden />
                </div>
                <p className="text-base text-muted">{point}</p>
              </div>
            );
          })}
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
