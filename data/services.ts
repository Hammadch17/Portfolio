export type RelevantProject = {
  /** Case study slug, if this links to an internal /work page. */
  slug?: string;
  /** Used only when there is no case study (external product). */
  title?: string;
  url?: string;
  label?: string;
  note: string;
  stats?: { value: string; label: string }[];
  statsNote?: string;
};

export type ServiceSection = {
  id: string;
  title: string;
  icon: "Code2" | "Search" | "Layers";
  promise: string;
  whatIDo: string;
  howItGetsBuilt: string[];
  whatClientsGet: string[];
  relevantProjects: RelevantProject[];
};

export const servicesHero = {
  heading: "Services",
  subtitle:
    "Web development, SEO and SaaS development, from the first conversation to a working product.",
};

export const quickJumpLinks = [
  { label: "Web Development", href: "#web-development" },
  { label: "SEO", href: "#seo" },
  { label: "SaaS Development", href: "#saas-development" },
];

export const serviceSections: ServiceSection[] = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Code2",
    promise:
      "Websites and web apps that load fast, work on every device and turn visitors into enquiries.",
    whatIDo:
      "I scope the website or web app with the client, explain the options in business terms and write the proposal. This covers business websites and landing pages, single-page service websites, e-commerce stores with product catalogues, web applications and admin dashboards, and redesigns of existing sites. I handle the scope and communication. Our engineering team does the build.",
    howItGetsBuilt: [
      "Requirements are agreed in writing before the build starts.",
      "Our engineering team builds with modern tools, including Next.js and TypeScript.",
      "I stay the single point of contact from the first call to launch.",
    ],
    whatClientsGet: [
      "Pages that work on phones, tablets and desktops.",
      "Clear service and product pages.",
      "Booking and enquiry options built in, such as WhatsApp, phone and email.",
      "An admin area for managing content or products where the project needs it.",
      "A site structured so search engines can read it.",
    ],
    relevantProjects: [
      {
        slug: "shahzaib-electronics",
        note: "E-commerce website with product catalogue and WhatsApp ordering.",
      },
      {
        slug: "muhkam-construction",
        note: "Corporate website for a construction company.",
      },
      {
        slug: "jades-spa",
        note: "Single-page spa website with six services, each linking to a WhatsApp booking.",
      },
      {
        slug: "behind-the-grill",
        note: "Content and product website.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    icon: "Search",
    promise: "Get found by the people already searching for what you sell.",
    whatIDo:
      "I plan and run the search side of a website. This covers technical SEO audits, keyword research and content planning, on-page optimisation of titles, headings and structure, Google Search Console setup and reporting, and structured data for search results.",
    howItGetsBuilt: [
      "Start with a technical audit so the foundation is fixed before content work.",
      "Plan keywords and content around what the client's customers actually search for.",
      "Report monthly from Google Search Console so progress is visible.",
    ],
    whatClientsGet: [
      "More organic visibility on Google over time, not paid clicks.",
      "Reporting the client can read.",
      "Fixes to the site that search engines rely on.",
      "A content plan the client's team can follow.",
    ],
    relevantProjects: [
      {
        slug: "shahzaib-electronics",
        note: "Organic search performance on a site with no dedicated SEO campaign run yet.",
        stats: [
          { value: "4,500", label: "Clicks" },
          { value: "63,100", label: "Impressions" },
          { value: "7.1%", label: "Average CTR" },
          { value: "6.5", label: "Average position" },
        ],
        statsNote:
          "Source: Google Search Console. Period: last 3 months, as of November 2026.",
      },
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    icon: "Layers",
    promise:
      "Software products built to be sold to many customers, with recurring revenue in mind.",
    whatIDo:
      "I help founders turn a business process into a product other businesses pay for. I scope the product with the client, define the first version and manage the build with our engineering team. This covers multi-tenant platforms where each client has a separate account, role-based access and admin portals, subscription-ready dashboards, and agency or franchise management tools.",
    howItGetsBuilt: [
      "Define the first version as a clear scope so the build stays focused.",
      "Our engineering team builds the core platform, then the admin and client areas.",
      "I handle the launch and handover so the founder knows what they own.",
    ],
    whatClientsGet: [
      "A product that can onboard many customers without rebuilding the core.",
      "Separate accounts and permissions per customer.",
      "A dashboard ready for subscriptions.",
      "A product their team can run after launch.",
    ],
    relevantProjects: [
      {
        title: "DeepKhata",
        url: "https://deepkhata.vercel.app",
        label: "Product by Deep Dev Solutions",
        note: 'A "Modern Business OS" product built by our engineering team.',
      },
    ],
  },
];

export const trustBar = {
  heading: "Clients I have worked with",
  clients: [
    "Shahzaib Electronics",
    "Muhkam Construction",
    "Vova Even Network",
    "Behind The Grill",
    "Free Hindi Audiobooks",
    "Jade's Spa",
  ],
  industriesLine:
    "Industries: construction, e-commerce, digital publishing, beauty and wellness, and Amazon sellers.",
};

export const servicesFaq = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on the scope. I give a quote after the first call, not a guess before it.",
  },
  {
    question: "Who builds the product?",
    answer:
      "I manage the conversation, the scope and the timeline with you. Our engineering team does the build.",
  },
  {
    question: "What happens after the first call?",
    answer:
      "If we are a good fit, I write a clear scope and quote. If we are not, I tell you that too.",
  },
];

export const servicesClosingCta = {
  heading: "Not sure which service fits?",
  text: "Tell me what you are trying to achieve and I will tell you honestly whether I can help.",
};
