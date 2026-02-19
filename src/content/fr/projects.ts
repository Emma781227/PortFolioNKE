import { Project } from "../types";

export const projectsFR: Project[] = [
  {
    slug: "villa-t9",
    title: "Villa T9",
    subtitle: "Dossier complet architecture + structure",
    year: "2025",
    location: "Yaoundé (exemple)",
    tags: ["Architecture", "Béton armé", "Plans", "Façades", "Coupes"],
    tools: ["AutoCAD", "Normes (à préciser)"],
    pdfUrl: "/projects/villa-t9/plans.pdf",
    coverImageUrl: "/projects/villa-t9/cover.jpg",
    overview:
      "Projet de construction d'une villa type T9 : plan de distribution, façades, coupes, plan toiture et détails structurels.",
    scope: [
      "Plan de distribution RDC",
      "Façades (Nord/Sud/Est/Ouest)",
      "Coupes A-A, B-B, C-C",
      "Plan toiture",
      "Détails structure / ferraillage (extraits)",
    ],
    deliverables: ["PDF plans (ouverture + téléchargement)", "Images cover/sélection"],
  },
  {
    slug: "rplus2-building",
    title: "Bâtiment R+2",
    subtitle: "Conception structure + détails BA (semelles, longrines, poteaux)",
    year: "2025",
    location: "—",
    tags: ["Structure", "Fondations", "Ferraillage", "Béton armé"],
    tools: ["AutoCAD", "Robot/SAP2000 (si utilisé)"],
    pdfUrl: "/projects/rplus2-building/plans.pdf",
    coverImageUrl: "/projects/rplus2-building/cover.jpg",
    overview:
      "Projet R+2 : plans architecturaux, plans de fondations, plans structure et détails de ferraillage (semelles, amorces poteaux, longrines).",
    scope: [
      "Plans RDC / R+1 / R+2",
      "Plan de fondations",
      "Plans structure (niveaux)",
      "Détails de semelles (S1, S2, S3)",
      "Amorces poteaux (P1, P2, ...)",
      "Longrines (extraits)",
    ],
    deliverables: ["PDF plans (ouverture + téléchargement)", "Images cover/sélection"],
  },
];
