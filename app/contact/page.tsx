import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CalEmbed } from "@/components/CalEmbed";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a call | Hammad Ahmad",
  description: "Book a 20 minute intro call or send a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          Let&apos;s talk
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Book a 20 minute call, or send a message and I will reply{" "}
          {site.replyTime}.
        </p>
      </Section>

      <Section id="book" className="pt-0">
        <CalEmbed />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-text">
              Send a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-text">
              Direct details
            </h2>
            <ul className="mt-6 space-y-3 text-base text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-green underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedinUrl}
                  className="text-green underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>Lahore, Pakistan</li>
              <li>{site.workingHours}</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
