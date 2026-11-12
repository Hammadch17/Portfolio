export type Service = {
  slug: string;
  title: string;
  icon: "Code2" | "Search" | "Layers";
  summary: string;
  bestFor: string;
  features: string[];
  benefit: string;
};

export const servicesHero = {
  heading: "Services",
  subtitle:
    "Three services I help businesses buy well, from the first conversation to delivery.",
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: "Code2",
    summary:
      "Websites and web apps that load fast, work on every device and turn visitors into enquiries.",
    bestFor:
      "Businesses that need a website, online store or custom web application.",
    features: [
      "Business websites and landing pages",
      "Web applications and admin dashboards",
      "Responsive design for phones, tablets and desktops",
      "Product catalogues and online ordering",
      "WhatsApp and enquiry integration",
    ],
    benefit: "One team handles the build from requirement to launch.",
  },
  {
    slug: "seo",
    title: "SEO",
    icon: "Search",
    summary: "Get found by people already searching for what you sell.",
    bestFor:
      "Businesses that want steady, organic leads from Google instead of paying for every click.",
    features: [
      "Technical SEO audit and fixes",
      "Keyword research and a content plan",
      "On-page optimisation of titles, headings and page structure",
      "Google Search Console setup and regular reporting",
      "Structured data for search results",
    ],
    benefit:
      "Monthly reporting you can read, built from campaigns we have run for clients.",
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: "Layers",
    summary:
      "Software products built to be sold to many customers, with recurring revenue in mind.",
    bestFor:
      "Founders who want to turn a business process into a product other businesses pay for.",
    features: [
      "Multi-tenant architecture with separate accounts per client",
      "Role-based access and admin portals",
      "Subscription-ready dashboards",
      "Modern stack built on Next.js, TypeScript and PostgreSQL",
      "A clear launch and handover plan",
    ],
    benefit:
      "Engineering and business sit in one conversation, so the product matches what the market needs.",
  },
];

export const whyWorkWithMe = [
  "I understand the business before I recommend technology.",
  "One point of contact from the first call to delivery.",
  "I only say what I can back up.",
  "If we are not the right fit, I will tell you on the first call.",
];

export const servicesClosingCta = {
  heading: "Not sure which service fits?",
  text: "Tell me what you are trying to achieve and I will tell you honestly whether I can help.",
};
