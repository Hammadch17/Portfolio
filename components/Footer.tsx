import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "@/components/Button";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";

const sitemapLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  ...(site.showContent ? [{ href: "/content", label: "Content" }] : []),
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-text">
              {site.fullName}
            </p>
            <p className="mt-3 text-sm text-muted">
              Business Development Executive at Deep Dev Solutions. I find
              the right clients, work out what they need and manage the
              project from first call to delivery.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hammad Ahmad on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors duration-150 ease-out hover:border-accent hover:text-accent"
              >
                <LinkedInIcon />
              </a>
              {site.showGithub && (
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hammad Ahmad on GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors duration-150 ease-out hover:border-accent hover:text-accent"
                >
                  <GitHubIcon />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Sitemap
            </p>
            <nav aria-label="Footer">
              <ul className="mt-4 space-y-3">
                {sitemapLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Get in touch
            </p>
            <p className="mt-4 text-sm text-muted">
              Have a project in mind? Book a call and tell me what you are
              working on.
            </p>
            <div className="mt-5">
              <Button href="/contact#book" withArrow>
                Book a call
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            © {year} Hammad Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
