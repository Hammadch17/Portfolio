export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  timeline: string;
  role: string;
  roleTags: string[];
  liveUrl?: string;
  /** One line shown on the Work page card. */
  cardResult: string;
  overview: string;
  challenge: string[];
  myRole: string[];
  solution: { title: string; text: string }[];
  stats: { value: string; label: string }[];
  statsNote?: string;
  outcomes: string[];
  services: string[];
  links?: { label: string; url: string; note?: string }[];
  timelineSteps?: { label: string; period: string }[];
  quote?: { text: string; author: string };
  cover: string;
  gallery: { src: string; alt: string; kind: "desktop" | "mobile" }[];
  featured: boolean;
  order: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shahzaib-electronics",
    title: "Shahzaib Electronics: E-commerce Website Development",
    subtitle:
      "E-commerce website with a shopping cart, checkout and admin panel, plus social media growth",
    industry: "Automotive accessories, import and wholesale",
    timeline: "February to March 2026",
    role: "Business Development, Client Acquisition and Social Media Management",
    roleTags: [
      "Business Development",
      "Client Acquisition",
      "Social Media Management",
    ],
    liveUrl: "https://shahzaibelectronics.pk",
    cardResult: "63,100 search impressions in 3 months",
    overview:
      "Shahzaib Electronics imports and wholesales automotive accessories and had relied almost entirely on walk in customers. I found the business during a visit to Montgomery Market. The owner was worried about losing customers to competitors with an online presence, so I proposed a professional e-commerce website and managed the project from the first conversation to delivery.",
    challenge: [
      "No website, online store or product catalog.",
      "A Facebook page that was updated only occasionally.",
      "A Google Business Profile with an incorrect business address.",
      "Few ways for customers searching online for automotive accessories to find the business.",
    ],
    myRole: [
      "Found and signed the client through direct, in person outreach.",
      "Presented the business case for an online presence.",
      "Gathered requirements and passed them to the development team.",
      "Coordinated the project through delivery.",
      "Manage the client's social media presence and the ongoing relationship.",
      "Optimized the client's social media pages as a goodwill extra.",
    ],
    solution: [
      {
        title: "250+ live products",
        text: "The full catalog is online, with each product on its own page.",
      },
      {
        title: "Shopping cart and checkout",
        text: "Customers add products to a cart and place their order on the site.",
      },
      {
        title: "Product management and admin panel",
        text: "The client manages his products from a complete admin panel.",
      },
      {
        title: "WhatsApp ordering",
        text: "Customers can also order or ask questions straight on WhatsApp.",
      },
      {
        title: "Responsive design",
        text: "The site works on phones, tablets and desktops.",
      },
      {
        title: "Search friendly structure",
        text: "Product pages are structured so Google can find and show them.",
      },
    ],
    stats: [
      { value: "4,500", label: "Clicks" },
      { value: "63,100", label: "Impressions" },
      { value: "7.1%", label: "Average CTR" },
      { value: "6.5", label: "Average position" },
    ],
    statsNote:
      "Google Search Console, last 3 months, as of November 2026. No dedicated SEO campaign.",
    outcomes: [
      "Customers can order through the website, WhatsApp or social media, whichever they prefer.",
      "Social media generates confirmed leads and orders.",
      "The business has a professional online store and product catalog.",
      "The site earns organic search traffic without a dedicated SEO campaign.",
    ],
    services: [
      "E-commerce development",
      "Product catalog management",
      "Admin panel",
      "WhatsApp integration",
      "Social media management",
    ],
    cover: "/work/shahzaib-electronics/hero.webp",
    gallery: [
      {
        src: "/work/shahzaib-electronics/desktop-1.webp",
        alt: "Shahzaib Electronics home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/shahzaib-electronics/desktop-2.webp",
        alt: "Shahzaib Electronics product category page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/shahzaib-electronics/desktop-3.webp",
        alt: "Shahzaib Electronics product listing page on desktop",
        kind: "desktop",
      },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "muhkam-construction",
    title: "Muhkam Construction",
    subtitle: "Corporate portfolio website for a construction company",
    industry: "Construction",
    timeline: "September 2025",
    role: "Business Development, Requirements Gathering and Client Management",
    roleTags: [
      "Business Development",
      "Requirements Gathering",
      "Client Management",
    ],
    liveUrl: "https://mmuhkamconstruction.com",
    cardResult: "From no website to a full corporate portfolio site",
    overview:
      "Muhkam Construction needed a credible online home for its company profile, services and completed projects. The goal was a site where potential customers could understand what the company does and explore its work in one place. I gathered the requirements, managed the conversations with the client and coordinated the build with the development team.",
    challenge: [
      "No dedicated company website.",
      "No online portfolio of completed projects.",
      "No single place to present its services and company information.",
      "No professional digital presence for potential customers to explore.",
    ],
    myRole: [
      "Managed client communication and project discussions.",
      "Gathered the company's website requirements.",
      "Identified the pages and information needed to present the business professionally.",
      "Coordinated requirements with the development team.",
      "Collected client feedback throughout the project.",
      "Made sure the final website matched the client's expectations.",
    ],
    solution: [
      {
        title: "Home",
        text: "An introduction to the company and its business.",
      },
      {
        title: "About",
        text: "The company's background and overview.",
      },
      {
        title: "Projects",
        text: "A dedicated section showcasing completed work.",
      },
      {
        title: "Services",
        text: "The construction services the company offers.",
      },
      {
        title: "Contact",
        text: "Contact details and an inquiry channel for potential customers.",
      },
    ],
    stats: [],
    outcomes: [
      "The company now has its own online presence.",
      "Services and completed projects are presented professionally in one place.",
      "Company information is easy to find.",
      "The client was highly satisfied with the final website.",
    ],
    services: [
      "Corporate website development",
      "Responsive web design",
      "Business portfolio presentation",
      "Client management",
    ],
    cover: "/work/muhkam-construction/hero.webp",
    gallery: [
      {
        src: "/work/muhkam-construction/desktop-1.webp",
        alt: "Muhkam Construction home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/muhkam-construction/desktop-2.webp",
        alt: "Muhkam Construction about page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/muhkam-construction/desktop-3.webp",
        alt: "Muhkam Construction projects page on desktop",
        kind: "desktop",
      },
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "vova-even-network",
    title: "Vova Even Network",
    subtitle: "Migrating a multi language blog network to Next.js and Sanity CMS",
    industry: "Digital publishing and blogging",
    timeline: "August to October 2026",
    role: "Business Development, Client Communication, Requirements Gathering and Project Management",
    roleTags: [
      "Business Development",
      "Client Communication",
      "Requirements Gathering",
      "Project Management",
    ],
    cardResult: "Blog network rebuilt on Next.js with a CMS the client controls",
    overview:
      "Vova Even Network is a group of content driven blogging websites for different audiences. The client came to us directly to modernize the sites, make them faster and make publishing easier. The team rebuilt the main sites on Next.js, connected them to Sanity CMS and migrated the existing content. I handled the overall client relationship and the project coordination. Behind The Grill and Free Hindi Audiobooks, delivered in the same project, have their own case studies.",
    challenge: [
      "Basic designs and slow loading experiences.",
      "A large volume of articles and images spread across several websites, with no efficient publishing workflow.",
      "A need for a consistent, professional design across the network.",
      "A need to move every existing article and image without losing original publication dates.",
      "A need for a CMS the client could manage independently.",
    ],
    myRole: [
      "Managed the client relationship from first contact to delivery.",
      "Gathered and documented the project requirements.",
      "Coordinated communication between the client and the development team.",
      "Led discussions on migration, CMS features and website improvements.",
      "Tracked progress across all the sites.",
      "Coordinated feedback and delivery so the final result met the client's expectations.",
    ],
    solution: [
      {
        title: "Website modernization",
        text: "Every site was rebuilt with a professional interface and a modern browsing experience.",
      },
      {
        title: "Large scale content migration",
        text: "Across the whole project, including Behind The Grill and Free Hindi Audiobooks, 3,600 existing articles were moved from the previous WordPress and Jetpage setup.",
      },
      {
        title: "Image migration",
        text: "Existing blog images were transferred and kept attached to the right articles.",
      },
      {
        title: "Publication dates preserved",
        text: "Original publication dates were kept through the migration.",
      },
      {
        title: "Sanity CMS integration",
        text: "The client manages articles and site content from one place.",
      },
      {
        title: "Independent publishing",
        text: "The client can publish, edit and manage content without developers for routine updates.",
      },
    ],
    stats: [{ value: "3,600", label: "Articles migrated across the project" }],
    statsNote:
      "Counted across all sites, including Behind The Grill and Free Hindi Audiobooks. Moved from the previous WordPress and Jetpage setup.",
    outcomes: [
      "The network's sites were migrated to a modern Next.js architecture.",
      "3,600 existing articles were transferred across the project.",
      "Existing article images were migrated.",
      "Original publication dates were preserved.",
      "The sites load faster than they did on the previous setup.",
      "Content is managed in one place through Sanity CMS.",
      "The client can publish new articles independently and regularly.",
      "The sites share a more professional, consistent presentation.",
    ],
    services: [
      "Next.js development",
      "Sanity CMS integration",
      "WordPress and Jetpage migration",
      "Content and image migration",
      "Performance optimization",
      "Project coordination",
    ],
    timelineSteps: [
      { label: "Project started", period: "August 2026" },
      { label: "Migration and development", period: "August to October 2026" },
      { label: "Launch", period: "October 2026" },
    ],
    links: [
      { label: "vovaeven.com", url: "https://vovaeven.com" },
      { label: "vovaeven.net", url: "https://vovaeven.net" },
      { label: "vovaeven.co.il", url: "https://vovaeven.co.il" },
      { label: "vovaeven.com.ua", url: "https://vovaeven.com.ua" },
    ],
    cover: "/work/vova-even-network/hero.webp",
    gallery: [
      {
        src: "/work/vova-even-network/desktop-1.webp",
        alt: "vovaeven.com home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/vova-even-network/desktop-2.webp",
        alt: "vovaeven.net home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/vova-even-network/desktop-3.webp",
        alt: "vovaeven.com.ua home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/vova-even-network/desktop-4.webp",
        alt: "vovaeven.co.il home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/vova-even-network/desktop-5.webp",
        alt: "vovaeven.com software page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/vova-even-network/desktop-6.webp",
        alt: "vovaeven.com services page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/vova-even-network/desktop-7.webp",
        alt: "vovaeven.com blog page on desktop",
        kind: "desktop",
      },
    ],
    featured: true,
    order: 3,
  },
  {
    slug: "behind-the-grill",
    title: "Behind The Grill",
    subtitle: "BBQ and grilling blog rebuilt on Next.js with Sanity CMS",
    industry: "Digital publishing, BBQ and grilling",
    timeline: "August to October 2026",
    role: "Business Development, Client Communication, Requirements Gathering and Project Management",
    roleTags: [
      "Business Development",
      "Client Communication",
      "Requirements Gathering",
      "Project Management",
    ],
    liveUrl: "https://behindthegrill.com",
    cardResult: "Blog migrated to a faster build with a CMS the client controls",
    overview:
      "Behind The Grill is a BBQ and grilling blog with a large library of articles. It was part of the Vova Even project: the client wanted the site to load faster, look more professional and be easier to publish to. The team rebuilt it on Next.js, moved the articles and images into Sanity CMS and carried the affiliate links inside the articles across intact. I handled the client relationship and the project coordination.",
    challenge: [
      "A basic design and slow loading on the previous setup.",
      "A large library of articles and images that was hard to manage.",
      "Affiliate links inside the articles that had to survive the migration.",
      "A need to keep the original publication dates.",
      "A need for a CMS the client could manage independently.",
    ],
    myRole: [
      "Handled the client relationship and communication.",
      "Gathered and documented the requirements.",
      "Coordinated the work between the client and the development team.",
      "Managed the project through feedback and delivery.",
    ],
    solution: [
      {
        title: "Website modernization",
        text: "The site was rebuilt with a professional interface and a modern browsing experience.",
      },
      {
        title: "Content and image migration",
        text: "Existing articles and their images were moved from the previous WordPress and Jetpage setup.",
      },
      {
        title: "Publication dates preserved",
        text: "Original publication dates were kept through the migration.",
      },
      {
        title: "Affiliate links preserved",
        text: "Links inside the articles were carried over intact.",
      },
      {
        title: "Sanity CMS integration",
        text: "The client manages articles and site content from one place.",
      },
    ],
    stats: [],
    outcomes: [
      "The site runs on Next.js and loads faster than it did on the previous setup.",
      "Existing articles, images and publication dates were migrated.",
      "Affiliate links inside the articles were preserved.",
      "The client can publish and manage content without developers for routine updates.",
    ],
    services: [
      "Next.js development",
      "Sanity CMS integration",
      "WordPress and Jetpage migration",
      "Content and image migration",
      "Project coordination",
    ],
    cover: "/work/behind-the-grill/cover.webp",
    gallery: [
      {
        src: "/work/behind-the-grill/cover.webp",
        alt: "Behind The Grill home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/behind-the-grill/desktop-2.webp",
        alt: "Behind The Grill product listing page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/behind-the-grill/desktop-3.webp",
        alt: "Behind The Grill blog page on desktop",
        kind: "desktop",
      },
    ],
    featured: false,
    order: 4,
  },
  {
    slug: "free-hindi-audiobooks",
    title: "Free Hindi Audiobooks",
    subtitle: "Hindi audiobook site rebuilt on Next.js with Sanity CMS",
    industry: "Digital publishing, audiobooks",
    timeline: "August to October 2026",
    role: "Business Development, Client Communication, Requirements Gathering and Project Management",
    roleTags: [
      "Business Development",
      "Client Communication",
      "Requirements Gathering",
      "Project Management",
    ],
    liveUrl: "https://freehindiaudiobooks.com",
    cardResult:
      "Hindi audiobook site migrated to a faster build with a CMS the client controls",
    overview:
      "Free Hindi Audiobooks is a content site for a Hindi speaking audience. It was part of the Vova Even project. The team rebuilt it on Next.js, moved its content into Sanity CMS and gave the client a faster site with a simpler way to publish. I handled the client relationship and the project coordination.",
    challenge: [
      "A basic design and slow loading on the previous setup.",
      "Content spread across a WordPress and Jetpage setup that was hard to manage.",
      "A need to keep the original publication dates.",
      "A need for a CMS the client could manage independently.",
    ],
    myRole: [
      "Handled the client relationship and communication.",
      "Gathered and documented the requirements.",
      "Coordinated the work between the client and the development team.",
      "Managed the project through feedback and delivery.",
    ],
    solution: [
      {
        title: "Website modernization",
        text: "The site was rebuilt with a professional interface and a modern browsing experience.",
      },
      {
        title: "Content migration",
        text: "Existing content was moved from the previous WordPress and Jetpage setup.",
      },
      {
        title: "Publication dates preserved",
        text: "Original publication dates were kept through the migration.",
      },
      {
        title: "Sanity CMS integration",
        text: "The client manages content from one place.",
      },
    ],
    stats: [],
    outcomes: [
      "The site runs on Next.js and loads faster than it did on the previous setup.",
      "Existing content and publication dates were migrated.",
      "The client can publish and manage content without developers for routine updates.",
    ],
    services: [
      "Next.js development",
      "Sanity CMS integration",
      "WordPress and Jetpage migration",
      "Content migration",
      "Project coordination",
    ],
    cover: "/work/free-hindi-audiobooks/hero.webp",
    gallery: [
      {
        src: "/work/free-hindi-audiobooks/desktop-1.webp",
        alt: "Free Hindi Audiobooks home page on desktop",
        kind: "desktop",
      },
      {
        src: "/work/free-hindi-audiobooks/desktop-2.webp",
        alt: "Free Hindi Audiobooks audiobooks listing page on desktop",
        kind: "desktop",
      },
    ],
    featured: false,
    order: 5,
  },
];

export type ProjectLink = {
  slug: string;
  title: string;
  industry: string;
  liveUrl: string;
};

/** One entry per live site, shown in the Home page project slider. */
export const projectLinks: ProjectLink[] = [
  {
    slug: "shahzaib-electronics",
    title: "Shahzaib Electronics",
    industry: "Automotive accessories",
    liveUrl: "https://shahzaibelectronics.pk",
  },
  {
    slug: "muhkam-construction",
    title: "Muhkam Construction",
    industry: "Construction",
    liveUrl: "https://mmuhkamconstruction.com",
  },
  {
    slug: "vova-even-com",
    title: "vovaeven.com",
    industry: "Amazon FBA resources",
    liveUrl: "https://vovaeven.com",
  },
  {
    slug: "vova-even-net",
    title: "vovaeven.net",
    industry: "Amazon FBA resources",
    liveUrl: "https://vovaeven.net",
  },
  {
    slug: "vova-even-com-ua",
    title: "vovaeven.com.ua",
    industry: "Amazon FBA resources",
    liveUrl: "https://vovaeven.com.ua",
  },
  {
    slug: "vova-even-co-il",
    title: "vovaeven.co.il",
    industry: "Amazon FBA resources",
    liveUrl: "https://vovaeven.co.il",
  },
  {
    slug: "behind-the-grill",
    title: "Behind The Grill",
    industry: "BBQ and grilling",
    liveUrl: "https://behindthegrill.com",
  },
  {
    slug: "free-hindi-audiobooks",
    title: "Free Hindi Audiobooks",
    industry: "Audiobooks",
    liveUrl: "https://freehindiaudiobooks.com",
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
