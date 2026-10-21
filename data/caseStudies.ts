export type CaseStudy = {
  slug: string;
  title: string;
  clientDescriptor: string;
  industry: string;
  region: string;
  services: string[];
  problem: string;
  whatWeBuilt: string;
  myRole: string;
  result?: string;
  coverImage?: string;
  featured: boolean;
  order: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "electronics-importer",
    title: "[CASE STUDY 1 TITLE]",
    clientDescriptor: "Electronics importer",
    industry: "Electronics import and retail",
    region: "Pakistan",
    services: ["Business development"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt:
      "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES. The live site exists but is not linked here.]",
    myRole:
      "I found the client, handled the deal and managed the relationship with our engineering team. [ROLE DETAIL IF NEEDED]",
    featured: true,
    order: 1,
  },
  {
    slug: "construction-firm",
    title: "[CASE STUDY 2 TITLE]",
    clientDescriptor: "Construction firm",
    industry: "Construction and civil engineering",
    region: "Pakistan",
    services: ["Business development"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt:
      "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES. The live site exists but is not linked here.]",
    myRole:
      "I found the client, handled the deal and managed the relationship with our engineering team. [ROLE DETAIL IF NEEDED]",
    featured: true,
    order: 2,
  },
  {
    slug: "scotland-business",
    title: "[CASE STUDY 3 TITLE]",
    clientDescriptor: "[CONFIRM] business with a WordPress site",
    industry: "[CONFIRM INDUSTRY]",
    region: "Scotland, UK",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt:
      "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES. The client later removed the site. State this plainly, with no screenshot or link.]",
    myRole: "[CONFIRM MY ROLE ON THIS ENGAGEMENT]",
    featured: false,
    order: 3,
  },
  {
    slug: "electrical-services",
    title: "[CASE STUDY 4 TITLE]",
    clientDescriptor: "Electrical services business",
    industry: "Electrical services",
    region: "Netherlands",
    services: ["SEO"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt:
      "I ran the SEO campaign personally for 3 months. [WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole:
      "I ran the SEO campaign personally for 3 months. I no longer have account access, so there are no screenshots, rankings, traffic numbers or other figures to show here.",
    featured: true,
    order: 4,
  },
  {
    slug: "case-study-5",
    title: "[CASE STUDY 5 TITLE]",
    clientDescriptor: "[CONFIRM]",
    industry: "[CONFIRM]",
    region: "[CONFIRM]",
    services: ["SEO"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "I ran the SEO campaign personally. [ROLE DETAIL IF NEEDED]",
    featured: false,
    order: 5,
  },
];

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies
    .filter((c) => c.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllCaseStudiesSorted(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
