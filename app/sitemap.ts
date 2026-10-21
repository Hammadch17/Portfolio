import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { caseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;

  const routes = [
    "/",
    "/work",
    "/how-i-work",
    ...(site.showContent ? ["/content"] : []),
    "/contact",
  ];

  const staticEntries = routes.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date(),
  }));

  const caseStudyEntries = caseStudies.map((caseStudy) => ({
    url: new URL(`/work/${caseStudy.slug}`, base).toString(),
    lastModified: new Date(),
  }));

  return [...staticEntries, ...caseStudyEntries];
}
