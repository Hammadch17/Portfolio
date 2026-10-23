export type JourneyStatus = "current" | "completed" | "in-progress";

export type JourneyEntry = {
  title: string;
  organization?: string;
  dateRange: string;
  /** Shown instead of dateRange only while status is "in-progress". Flip status to "completed" to go back to showing dateRange. */
  inProgressLabel?: string;
  description?: string;
  bullets?: string[];
  status: JourneyStatus;
};

/** Newest first. */
export const workJourney: JourneyEntry[] = [
  {
    title: "Business Development",
    organization: "Deep Dev Solutions, Lahore",
    dateRange: "March 2025 to present",
    description:
      "The team worked as an agency from March 2025 and adopted the Deep Dev Solutions name in early 2026.",
    bullets: [
      "Find client projects through my own network.",
      "Write proposals, close the deal and manage the project from first call to delivery with the engineering team.",
      "Run SEO for client sites.",
      "Result so far: [7] live websites, all linked on the Work page. Hammad confirms the count before launch.",
    ],
    status: "current",
  },
  {
    title: "Small local IT work",
    dateRange: "2020 to 2025",
    description: "Small local IT jobs alongside school and college.",
    status: "completed",
  },
];

/** Newest first. The degree overlaps the work years, so this runs as its own lane rather than one mixed timeline. */
export const educationJourney: JourneyEntry[] = [
  {
    title: "BSCS",
    organization: "The University of Lahore",
    dateRange: "[START YEAR] to January 2027",
    inProgressLabel: "Final semester, expected January 2027",
    status: "in-progress",
  },
  {
    title: "Web Development Certificate",
    organization:
      "Arfa Karim Tower (AKTI), Lahore — [CONFIRM the exact institute name as printed on the certificate]",
    dateRange: "July to October 2024",
    status: "completed",
  },
  {
    title: "ICS (Computer Science, Physics)",
    organization: "Punjab Group of Colleges",
    dateRange: "[YEARS]",
    status: "completed",
  },
  {
    title: "Matriculation, Computer Science",
    organization: "Moon Public School",
    dateRange: "[YEAR]",
    status: "completed",
  },
];

export const journeyIntro =
  "In IT since 2020, in client work since March 2025.";

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
];

export const skills = [
  "Business development",
  "Proposals",
  "Closing deals",
  "Project management",
  "SEO",
];
