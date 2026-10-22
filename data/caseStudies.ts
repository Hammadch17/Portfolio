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
  /** Real project links Hammad has cleared to show and name openly. */
  liveUrl?: string;
  /** Additional regional domains for the same project, if any. */
  otherUrls?: string[];
  featured: boolean;
  order: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shahzaib-electronics",
    title: "Shahzaib Electronics",
    clientDescriptor: "Car accessories retailer",
    industry: "Car accessories and electronics e-commerce",
    region: "Lahore, Pakistan",
    services: ["Business development"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole:
      "I found the client, handled the deal and managed the relationship with our engineering team. [ROLE DETAIL IF NEEDED]",
    liveUrl: "https://www.shahzaibelectronics.pk",
    featured: true,
    order: 1,
  },
  {
    slug: "mukham-construction",
    title: "Mukham Construction",
    clientDescriptor: "Construction firm",
    industry: "Construction and civil engineering",
    region: "Pakistan",
    services: ["Business development"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole:
      "I found the client, handled the deal and managed the relationship with our engineering team. [ROLE DETAIL IF NEEDED]",
    liveUrl: "https://www.mmuhkamconstruction.com",
    featured: true,
    order: 2,
  },
  {
    slug: "vova-even",
    title: "Vova Even",
    clientDescriptor: "Amazon FBA brand — English site",
    industry: "Amazon FBA tools, courses and seller resources",
    region: "[CONFIRM REGION]",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "[CONFIRM MY ROLE ON THIS PROJECT]",
    liveUrl: "https://vovaeven.com",
    featured: true,
    order: 3,
  },
  {
    slug: "vova-even-ru",
    title: "Vova Even (Russian)",
    clientDescriptor: "Amazon FBA brand — Russian-language site",
    industry: "Amazon FBA tools, courses and seller resources",
    region: "[CONFIRM REGION]",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "[CONFIRM MY ROLE ON THIS PROJECT]",
    liveUrl: "https://vovaeven.net",
    featured: false,
    order: 4,
  },
  {
    slug: "vova-even-ua",
    title: "Vova Even (Ukrainian)",
    clientDescriptor: "Amazon FBA brand — Ukrainian-language site",
    industry: "Amazon FBA tools, courses and seller resources",
    region: "Ukraine",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "[CONFIRM MY ROLE ON THIS PROJECT]",
    liveUrl: "https://vovaeven.com.ua",
    featured: false,
    order: 5,
  },
  {
    slug: "vova-even-il",
    title: "Vova Even (Hebrew)",
    clientDescriptor: "Amazon FBA brand — Hebrew-language site",
    industry: "Amazon FBA tools, courses and seller resources",
    region: "Israel",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "[CONFIRM MY ROLE ON THIS PROJECT]",
    liveUrl: "https://vovaeven.co.il",
    featured: false,
    order: 6,
  },
  {
    slug: "free-hindi-audiobooks",
    title: "Free Hindi Audiobooks",
    clientDescriptor: "Audiobook platform, by Vova Even",
    industry: "Audio content and publishing",
    region: "[CONFIRM REGION]",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "[CONFIRM MY ROLE ON THIS PROJECT]",
    liveUrl: "https://freehindiaudiobooks.com",
    featured: false,
    order: 7,
  },
  {
    slug: "behind-the-grill",
    title: "Behind The Grill",
    clientDescriptor: "BBQ content and Amazon brand",
    industry: "BBQ content and Amazon e-commerce",
    region: "[CONFIRM REGION]",
    services: ["[CONFIRM SERVICES]"],
    problem: "[PROBLEM IN 2 TO 3 SENTENCES]",
    whatWeBuilt: "[WHAT WE BUILT OR RAN IN 2 TO 3 SENTENCES]",
    myRole: "[CONFIRM MY ROLE ON THIS PROJECT]",
    liveUrl: "https://behindthegrill.com",
    featured: false,
    order: 8,
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
