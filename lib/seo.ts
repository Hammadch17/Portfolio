import type { Metadata } from "next";
import { site } from "@/data/site";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, site.siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.fullName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    jobTitle: "Business Developer",
    url: site.siteUrl,
    worksFor: {
      "@type": "Organization",
      name: "Deep Dev Solutions",
      url: site.deepDevSolutionsUrl,
    },
    sameAs: [site.linkedinUrl],
  };
}
