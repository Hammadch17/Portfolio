import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 py-14 flex flex-col gap-6">
        <div>
          <p className="font-heading text-lg font-semibold text-text">
            {site.fullName}
          </p>
          <p className="text-sm text-muted mt-1">{site.role}</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href={site.linkedinUrl}
            className="text-green underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-green underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <a
            href={site.deepDevSolutionsUrl}
            className="text-green underline-offset-4 hover:underline"
          >
            Deep Dev Solutions
          </a>
        </div>

        <p className="text-sm text-muted">© 2026 {site.fullName}.</p>
      </div>
    </footer>
  );
}
