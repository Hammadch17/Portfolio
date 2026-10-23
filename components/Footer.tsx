import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "@/components/Button";

const sitemapLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/how-i-work", label: "How I Work" },
  ...(site.showContent ? [{ href: "/content", label: "Content" }] : []),
  { href: "/contact", label: "Contact" },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.337-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

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
