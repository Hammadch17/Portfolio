export type ProcessStep = {
  n: number;
  title: string;
  text: string;
};

export const process: ProcessStep[] = [
  {
    n: 1,
    title: "Find",
    text: "I find businesses that need custom software or stronger search visibility.",
  },
  {
    n: 2,
    title: "Understand",
    text: "A call to work out what the business actually needs. If we are not the right fit, I say so.",
  },
  {
    n: 3,
    title: "Scope",
    text: "Our engineering team reviews the requirement and I come back with a clear scope and quote.",
  },
  {
    n: 4,
    title: "Manage",
    text: "Once you approve, the build starts and I manage the relationship between you and the team.",
  },
];
