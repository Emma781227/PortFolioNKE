import Image from "next/image";
import Link from "next/link";
import { projectsFR } from "@/content/fr/projects";
import { projectsEN } from "@/content/en/projects";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "fr";
  const isFr = lang === "fr";
  const projects = isFr ? projectsFR : projectsEN;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header>
        <p className="label-tech">{isFr ? "Portefeuille" : "Portfolio"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {isFr ? "Projets" : "Projects"}
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
          {isFr
            ? "Sélection de dossiers techniques : plans, structure, fondations et détails de ferraillage. PDFs consultables et téléchargeables."
            : "Selected technical packages: plans, structure, foundations and rebar detailing. Viewable and downloadable PDFs."}
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="card overflow-hidden">
            <div className="relative aspect-[16/10] w-full bg-neutral-900">
              <Image
                src={p.coverImageUrl}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    {p.location ? p.location : isFr ? "Localisation -" : "Location -"}
                  </p>
                </div>
                <span className="badge">{p.year}</span>
              </div>

              <p className="mt-3 text-sm text-neutral-300">{p.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/${lang}/projects/${p.slug}`} className="btn-primary">
                  {isFr ? "Voir le dossier" : "View file"}
                </Link>

                <a href={p.pdfUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                  {isFr ? "Ouvrir PDF" : "Open PDF"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
