export type AboutContent = {
  headline: string;
  intro: string[];
  highlightsTitle: string;
  highlights: string[];
  skillsTitle: string;
  skillGroups: Array<{
    title: string;
    items: string[];
  }>;

  educationTitle: string;
  education: Array<{
    degree: string;
    school: string;
    period: string;
    details?: string[];
  }>;
};
