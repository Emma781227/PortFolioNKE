import Link from "next/link";
import { experienceFR } from "@/content/fr/experience";
import { experienceEN } from "@/content/en/experience";

export async function ExperienceSection({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "fr";
  const isFr = lang === "fr";

  const experiences = isFr ? experienceFR : experienceEN;

  return (
    <>
      <header>
        <p className="label-tech">{isFr ? "Parcours" : "Career"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {isFr ? "Expérience" : "Experience"}
        </h1>

        <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
          {isFr
            ? "Résumé des expériences, responsabilités principales et outils utilisés."
            : "Summary of experience, main responsibilities and tools used."}
        </p>
      </header>

      {/* Timeline */}
      <section className="mt-12">
        <div className="relative pl-6">
          {/* <div className="absolute left-2 top-0 h-full w-px bg-neutral-800" /> */}

          <div className="space-y-8">
            {experiences.map((exp) => (
              <article key={`${exp.title}-${exp.period}`} className="relative">
                {/* <div className="absolute -left-0.5 top-6 h-3 w-3 rounded-full border border-neutral-700 bg-neutral-950" /> */}

                <div className="card p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="label-tech">{isFr ? "Expérience" : "Experience"}</p>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight">
                        {exp.title}
                      </h2>

                      <p className="mt-2 text-neutral-300">
                        {exp.company}
                        {exp.location ? ` • ${exp.location}` : ""}
                      </p>
                    </div>

                    <span className="badge">{exp.period}</span>
                  </div>

                  <p className="mt-5 text-neutral-300 leading-relaxed">{exp.description}</p>

                  <div className="mt-6">
                    <p className="label-tech">
                      {isFr ? "Missions principales" : "Main responsibilities"}
                    </p>

                    <ul className="mt-4 space-y-2 text-neutral-300">
                      {exp.missions.map((m) => (
                        <li key={m} className="flex gap-2">
                          <span className="text-neutral-500">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.tools?.length ? (
                    <div className="mt-6">
                      <p className="label-tech">{isFr ? "Outils" : "Tools"}</p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.tools.map((t) => (
                          <span key={t} className="badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card mt-16 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label-tech">{isFr ? "Disponibilité" : "Availability"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              {isFr ? "Disponible pour un poste" : "Open to opportunities"}
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
              {isFr
                ? "Disponible pour échanger sur une opportunité en bureau d’études ou entreprise de construction."
                : "Available to discuss opportunities in a design office or construction company."}
            </p>
          </div>

          <div className="flex gap-3">
            <Link href={`/${lang}#projects`} className="btn-secondary">
              {isFr ? "Voir les projets" : "View projects"}
            </Link>
            <Link href={`/${lang}#contact`} className="btn-primary">
              {isFr ? "Contact" : "Contact"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default async function ExperiencePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <ExperienceSection params={params} />
    </main>
  );
}
