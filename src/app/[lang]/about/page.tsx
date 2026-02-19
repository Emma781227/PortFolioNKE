import Link from "next/link";
import { aboutFR } from "@/content/fr/about";
import { aboutEN } from "@/content/en/about";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "fr";
  const isFr = lang === "fr";
  const content = isFr ? aboutFR : aboutEN;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <header>
        <p className="label-tech">{isFr ? "Profil" : "Profile"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {content.headline}
        </h1>
      </header>

      {/* Intro */}
      <section className="card card-pad mt-8">
        <p className="label-tech">{isFr ? "Résumé" : "Summary"}</p>
        <div className="mt-4 space-y-3 text-neutral-300 leading-relaxed">
          {content.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* Highlights + Education */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Highlights */}
        <div className="card card-pad">
          <p className="label-tech">{isFr ? "Valeur ajoutée" : "Value"}</p>
          <h2 className="section-title mt-3">{content.highlightsTitle}</h2>

          <ul className="mt-5 space-y-2 text-neutral-300">
            {content.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-neutral-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="card card-pad">
          <p className="label-tech">{isFr ? "Formation" : "Education"}</p>
          <h2 className="section-title mt-3">{content.educationTitle}</h2>

          <div className="mt-5 space-y-4">
            {content.education.map((e) => (
              <div
                key={`${e.degree}-${e.period}`}
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{e.degree}</h3>
                    <p className="mt-1 text-neutral-300">{e.school}</p>
                  </div>
                  <span className="text-sm text-neutral-400">{e.period}</span>
                </div>

                {e.details?.length ? (
                  <ul className="mt-4 space-y-2 text-neutral-300">
                    {e.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-neutral-500">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <p className="label-tech">{isFr ? "Compétences" : "Skills"}</p>
        <h2 className="section-title mt-3">{content.skillsTitle}</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {content.skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{group.title}</h3>
              </div>

              <ul className="mt-4 space-y-2 text-neutral-300">
                {group.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-neutral-500">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card mt-16 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label-tech">{isFr ? "Disponibilité" : "Availability"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              {isFr ? "Travaillons ensemble" : "Let’s work together"}
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              {isFr
                ? "Contacte-moi pour discuter d’une opportunité, d’un projet ou d’une collaboration."
                : "Reach out to discuss an opportunity, a project, or a collaboration."}
            </p>
          </div>

          <div className="flex gap-3">
            <Link href={`/${lang}/contact`} className="btn-primary">
              {isFr ? "Contact" : "Contact"}
            </Link>
            <Link href={`/${lang}/projects`} className="btn-secondary">
              {isFr ? "Voir les projets" : "View projects"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
