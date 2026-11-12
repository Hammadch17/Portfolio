import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { Section } from "@/components/Section";
import { CalEmbed } from "@/components/CalEmbed";
import { ContactForm } from "@/components/ContactForm";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import { site, about } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a call | Hammad Ahmad",
  description: "Book a 20 minute intro call or send a message.",
  path: "/contact",
});

const contactRows = [
  {
    icon: Mail,
    label: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: `WhatsApp: ${site.whatsapp}`,
    href: `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`,
    external: true,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: site.linkedinUrl,
    external: true,
  },
  ...(site.showGithub
    ? [
        {
          icon: GitHubIcon,
          label: "GitHub",
          href: site.githubUrl,
          external: true,
        },
      ]
    : []),
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-10 md:pt-16">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">
            Contact
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
            Let&apos;s talk
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Book a 20 minute call, or send a message and I will reply{" "}
            {site.replyTime}.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-16 md:grid-cols-[45fr_55fr] md:items-start">
          <div>
            <div
              className="group relative mx-auto h-[220px] w-[220px] md:mx-0"
              tabIndex={0}
            >
              <div
                aria-hidden
                className="glow pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-60 group-focus-visible:opacity-60"
              />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border">
                <Image
                  src={site.photo}
                  alt={site.fullName}
                  fill
                  quality={90}
                  sizes="220px"
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                />
              </div>
            </div>

            <div className="mt-6 text-center md:text-left">
              <p className="font-heading text-2xl font-semibold text-text">
                {site.fullName}
              </p>
              <p className="mt-1 text-base text-muted">{site.role}</p>
              <p className="mt-4 text-base text-muted">{about[3]}</p>
            </div>

            <ul className="mt-8 space-y-4">
              {contactRows.map((row) => {
                const Icon = row.icon;
                return (
                  <li key={row.label}>
                    <a
                      href={row.href}
                      className="flex items-center gap-3 text-base text-text transition-colors duration-150 ease-out hover:text-accent"
                      {...(row.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                        <Icon size={16} />
                      </span>
                      {row.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-2xl font-semibold text-text">
              Send a message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section id="book" className="pt-0">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <CalEmbed />
        </div>
      </Section>
    </>
  );
}
