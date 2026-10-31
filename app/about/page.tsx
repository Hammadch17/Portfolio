import type { Metadata } from "next";
import Image from "next/image";
import { Users, Search, TrendingUp } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { JourneyLane } from "@/components/JourneyLane";
import { site, about, whatIDo } from "@/data/site";
import {
  workJourney,
  educationJourney,
  journeyIntro,
  languages,
  skills,
} from "@/data/about";
import { buildMetadata } from "@/lib/seo";

const whatIDoIcons = [Users, Search, TrendingUp];

export const metadata: Metadata = buildMetadata({
  title: "About | Hammad Ahmad",
  description:
    "Hammad Ahmad is a Business Development Executive at Deep Dev Solutions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-10 md:pt-16 !pb-12">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          About me
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{site.role}</p>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative order-first">
            <div
              className="glow left-1/2 top-1/2 h-[460px] w-[460px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
            <div className="photo-frame relative aspect-[4/5] w-full max-w-[460px]" tabIndex={0}>
              <Image
                src={site.secondaryPhoto}
                alt="Hammad Ahmad"
                width={460}
                height={575}
                quality={90}
                sizes="(min-width: 768px) 460px, 90vw"
                className="photo-img h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-5">
            {about.map((paragraph) => (
              <p key={paragraph} className="text-lg text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          Journey
        </h2>
        <p className="mt-4 text-lg text-muted">{journeyIntro}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <JourneyLane title="Work" entries={workJourney} />
          <JourneyLane title="Education" entries={educationJourney} />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-xl font-semibold text-text">
              Languages
            </h3>
            <ul className="mt-4 space-y-2 text-base text-muted">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span className="text-text">{lang.name}</span> —{" "}
                  {lang.level}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-text">
              Skills
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border px-4 py-1.5 text-sm text-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
          What I do
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whatIDo.map((item, i) => {
            const Icon = whatIDoIcons[i];
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6 transition-all duration-150 ease-out hover:border-accent hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg">
                  <Icon size={20} className="text-accent" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-text">
            Want to talk about your business?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Book a 20 minute call and tell me what you are working on.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact#book" withArrow>
              Book a call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
