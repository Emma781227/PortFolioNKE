export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  location?: string;
  tags: string[];
  tools: string[];
  pdfUrl: string;       // lien vers /public
  coverImageUrl: string; // lien vers /public
  overview: string;
  scope: string[];
  deliverables: string[];
};
