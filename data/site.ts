export const site = {
  fullName: "Hammad Ahmad",
  role: "Business Developer at Deep Dev Solutions",
  email: "hammadahmadch17@gmail.com",
  linkedinUrl: "[LINKEDIN URL]",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hammadahmadch.com",
  deepDevSolutionsUrl: "https://deepdevsolutions.com",
  replyTime: "within one day",
  workingHours: "[WORKING HOURS]",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "[CAL.COM EVENT PATH]",
  photo: "/images/hammad-photo-v4.webp",
  showContent: false,
  slogan: "Right buyers. Real conversations.",
};

export const hero = {
  label: site.role,
  h1Lines: ["Right buyers.", "Real conversations."],
  subhead:
    "I bring clients to an engineering team and run SEO campaigns. When a business needs custom software, my team builds it.",
};

export const proofStrip = [
  {
    fact: "[5 client engagements]",
    caption: "across business development, web and SEO",
  },
  {
    fact: "[Clients in Pakistan, the UK and the Netherlands]",
    caption:
      "where my clients are based [CONFIRM the country of the second SEO site]",
  },
  {
    fact: "[Engineering team behind every build]",
    caption: "Deep Dev Solutions, Lahore",
  },
];

export const whatIDo = [
  {
    title: "Client management",
    text: "Keeping the client and our engineering team aligned from the first call to delivery.",
  },
  {
    title: "SEO campaigns",
    text: "Search campaigns that help a business show up when its customers look for what it sells.",
  },
  {
    title: "Business development",
    text: "Finding clients who need custom software and working out what they actually need.",
  },
];

export const about = [
  "I'm Hammad Ahmad, a partner and business developer at Deep Dev Solutions, an engineering agency in Lahore that builds websites, business systems and automation for companies in the UK, US and Gulf.",
  "My job is the part around the build: finding the client, working out what they actually need, and managing the relationship with our engineering team from first call to delivery.",
  "I only say what I can back up. If we are not the right fit, I will tell you on the first call.",
];
