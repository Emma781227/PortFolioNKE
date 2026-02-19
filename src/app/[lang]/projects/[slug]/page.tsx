import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projectsFR } from "@/content/fr/projects";
import { projectsEN } from "@/content/en/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug: rawSlug } = await params;
  const lang = rawLang === "en" ? "en" : "fr";
  const isFr = lang === "fr";

  const projects = isFr ? projectsFR : projectsEN;

  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();
  const project = projects.find((p) => p.slug.trim().toLowerCase() === slug);

  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link href={`/${lang}/projects`} className="text-sm text-neutral-400 hover:text-white">
        ← {isFr ? "Retour aux projets" : "Back to projects"}
      </Link>

      <header className="mt-8">
        <p className="label-tech">{isFr ? "Dossier projet" : "Project file"}</p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight">
          {project.title}
        </h1>

        <p className="mt-3 text-lg text-neutral-300">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="badge">{project.year}</span>
          {project.location ? <span className="badge">{project.location}</span> : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.pdfUrl} target="_blank" rel="noreferrer" className="btn-primary">
            {isFr ? "Ouvrir le PDF" : "Open PDF"}
          </a>

          <a href={project.pdfUrl} download className="btn-secondary">
            {isFr ? "Télécharger" : "Download"}
          </a>
        </div>
      </header>

      <section className="card mt-10 overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={project.coverImageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </section>

      <section className="card card-pad mt-12">
        <p className="label-tech">{isFr ? "Présentation" : "Overview"}</p>
        <h2 className="section-title mt-3">
          {isFr ? "Résumé du projet" : "Project summary"}
        </h2>
        <p className="mt-4 text-neutral-300 leading-relaxed">{project.overview}</p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="card card-pad">
          <p className="label-tech">{isFr ? "Outils" : "Tools"}</p>
          <h2 className="section-title mt-3">
            {isFr ? "Logiciels / Référentiels" : "Software / References"}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="badge">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="card card-pad">
          <p className="label-tech">{isFr ? "Livrables" : "Deliverables"}</p>
          <h2 className="section-title mt-3">
            {isFr ? "Contenu livré" : "What was delivered"}
          </h2>

          <ul className="mt-5 space-y-2 text-neutral-300">
            {project.deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-neutral-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card card-pad mt-12">
        <p className="label-tech">{isFr ? "Périmètre" : "Scope"}</p>
        <h2 className="section-title mt-3">
          {isFr ? "Travaux réalisés" : "Scope of work"}
        </h2>

        <ul className="mt-5 space-y-2 text-neutral-300">
          {project.scope.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-neutral-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="label-tech">{isFr ? "Document" : "Document"}</p>
            <h2 className="section-title mt-3">
              {isFr ? "Aperçu du PDF" : "PDF Preview"}
            </h2>
          </div>

          <a href={project.pdfUrl} target="_blank" rel="noreferrer" className="btn-secondary">
            {isFr ? "Ouvrir dans un nouvel onglet" : "Open in new tab"}
          </a>
        </div>

        <div className="card mt-6 overflow-hidden">
          <iframe src={project.pdfUrl} className="h-[820px] w-full" title={project.title} />
        </div>
      </section>
    </main>
  );
}
