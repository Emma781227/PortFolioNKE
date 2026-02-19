import { Project } from "../types";

export const projectsEN: Project[] = [
  {
    slug: "villa-t9",
    title: "Villa T9",
    subtitle: "Complete architecture + structure package",
    year: "2025",
    location: "Yaoundé (example)",
    tags: ["Architecture", "Reinforced Concrete", "Plans", "Elevations", "Sections"],
    tools: ["AutoCAD", "Codes (to confirm)"],
    pdfUrl: "/projects/villa-t9/plans.pdf",
    coverImageUrl: "/projects/villa-t9/cover.jpg",
    overview:
      "Villa T9 project package: floor plan distribution, elevations, sections, roof plan and structural detailing extracts.",
    scope: [
      "Ground floor distribution plan",
      "Elevations (N/S/E/W)",
      "Sections A-A, B-B, C-C",
      "Roof plan",
      "Structural detailing extracts",
    ],
    deliverables: ["PDF package (open + download)", "Cover / selected images"],
  },
  {
    slug: "rplus2-building",
    title: "R+2 Residential Building",
    subtitle: "Structural design + RC detailing (footings, beams, column starters)",
    year: "2025",
    location: "—",
    tags: ["Structure", "Foundations", "Rebar Detailing", "Reinforced Concrete"],
    tools: ["AutoCAD", "Robot/SAP2000 (if used)"],
    pdfUrl: "/projects/rplus2-building/plans.pdf",
    coverImageUrl: "/projects/rplus2-building/cover.jpg",
    overview:
      "R+2 project including architectural plans, foundation plan, structural plans and reinforcement detailing (footings, starters, beams).",
    scope: [
      "GF / R+1 / R+2 plans",
      "Foundation plan",
      "Structural plans by level",
      "Footing detailing (S1, S2, S3)",
      "Column starters (P1, P2, ...)",
      "Beams/grade beams detailing extracts",
    ],
    deliverables: ["PDF package (open + download)", "Cover / selected images"],
  },
];
