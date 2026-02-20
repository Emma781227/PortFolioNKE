import Link from "next/link";
import Image from "next/image";
import CvButton from "@/components/CvButton";
import { ExperienceSection } from "./experience/page";


import { projectsFR } from "@/content/fr/projects";
import { projectsEN } from "@/content/en/projects";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "fr";
  const isFr = lang === "fr";

  const projects = isFr ? projectsFR : projectsEN;
  const featuredProjects = projects.slice(0, 2);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* HERO */}
      <section className="card grid-bg overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
          {/* Photo */}
          <div className="relative min-h-105 w-full bg-neutral-900">
            <Image
              src="/Profile.jpg"
              alt="Nke Elomo Michele Jorel"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950/70 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-10">
            <p className="label-tech">
              {isFr
                ? "Ingénieur Génie Civil • Structure • BIM"
                : "Civil Engineer • Structural • BIM"}
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
              Nke Elomo Michelle Jorel
            </h1>

            <p className="mt-3 text-lg text-neutral-300 font-medium">
              {isFr
                ? "Ingénieur Génie Civil - Structure & Plans d’Exécution"
                : "Civil Engineer - Structural Design & Execution Drawings"}
            </p>

            <p className="mt-5 max-w-2xl text-neutral-300 leading-relaxed">
              {isFr
                ? "Ingénieur en génie civil orienté structure, spécialisé dans la conception béton armé, la production de plans d’exécution et la modélisation numérique. Rigoureuse, méthodique et curieuse, je cherche constamment à perfectionner mes techniques et à maîtriser de nouveaux outils afin de produire des dossiers techniques fiables et exploitables sur chantier."
                : "Civil Engineer specialized in reinforced concrete structural design, execution drawings and digital modeling. Detail-oriented and methodical, I continuously improve my skills and explore new engineering tools to deliver reliable technical packages for both design offices and construction sites."}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "AutoCAD",
                "Revit",
                "Robot Structural Analysis",
                isFr ? "Béton armé" : "Reinforced Concrete",
                isFr ? "Plans d’exécution" : "Execution Drawings",
                isFr ? "Ferraillage" : "Rebar Detailing",
              ].map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${lang}#projects`} className="btn-primary">
                {isFr ? "Voir mes projets" : "View my projects"}
              </Link>

              <Link href={`/${lang}/contact`} className="btn-secondary">
                {isFr ? "Me contacter" : "Contact"}
              </Link>

              <CvButton lang={lang} href="/CV.pdf" className="btn-secondary">
                {isFr ? "Télécharger le CV" : "Open CV"}
              </CvButton>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-14">
        <p className="label-tech">{isFr ? "Compétences" : "Skills"}</p>
        <h2 className="section-title mt-3">
          {isFr ? "Compétences clés" : "Core skills"}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: isFr ? "Structure béton armé" : "Reinforced concrete",
              text: isFr
                ? "Fondations, poteaux, poutres, dalles."
                : "Footings, columns, beams, slabs.",
            },
            {
              title: isFr ? "Plans d’exécution" : "Execution drawings",
              text: isFr
                ? "Plans, coupes, détails techniques."
                : "Plans, sections, technical details.",
            },
            {
              title: isFr ? "Ferraillage" : "Rebar detailing",
              text: isFr
                ? "Détails BA et plans de ferraillage."
                : "RC detailing and reinforcement drawings.",
            },
            {
              title: isFr ? "Modélisation BIM" : "BIM modeling",
              text: isFr
                ? "Revit / coordination et documentation."
                : "Revit / coordination and documentation.",
            },
          ].map((skill) => (
            <div key={skill.title} className="card p-6">
              <p className="label-tech">{skill.title}</p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                {skill.text}
              </p>
            </div>
          ))}
        </div>
      </section>

{/* FEATURED PROJECTS */}
      <section id="projects" className="mt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label-tech">{isFr ? "Portfolio" : "Portfolio"}</p>
            <h2 className="section-title mt-3">
              {isFr ? "Projets mis en avant" : "Featured projects"}
            </h2>
          </div>

          <Link
            href={`/${lang}#projects`}
            className="text-sm text-neutral-400 hover:text-white"
          >
            {isFr ? "Voir tout →" : "View all →"}
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((p) => (
            <article key={p.slug} className="card overflow-hidden">
              <div className="relative aspect-16/10 w-full bg-neutral-900">
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
                    <h3 className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-400">
                      {p.location ? p.location : isFr ? "Localisation -" : "Location -"}
                    </p>
                  </div>

                  <span className="badge">{p.year}</span>
                </div>

                <p className="mt-3 text-sm text-neutral-300">{p.subtitle}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/${lang}/projects/${p.slug}`}
                    className="btn-primary"
                  >
                    {isFr ? "Voir le dossier" : "View project"}
                  </Link>

                  <a
                    href={p.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    {isFr ? "Ouvrir PDF" : "Open PDF"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
        
      {/* Experience section (imported) */}
      <section id="experience" className="mt-16">
        <ExperienceSection params={params} />
      </section>

      {/* SOFTWARE */}
      <section className="mt-16">
        <p className="label-tech">{isFr ? "Logiciels" : "Software"}</p>
        <h2 className="section-title mt-3">
          {isFr ? "Outils et workflow" : "Tools & workflow"}
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "AutoCAD",
              desc: isFr
                ? "Production de plans techniques et dossiers d’exécution."
                : "Technical drawings and execution documentation.",
              img: "/tools/autocad.jpg",
            },
            {
              title: "Robot Structural Analysis",
              desc: isFr
                ? "Modélisation et analyse structurelle, vérification des efforts."
                : "Structural modeling and analysis, load verification.",
              img: "/tools/robot.jpg",
            },
            {
              title: "Revit",
              desc: isFr
                ? "Modélisation BIM, extraction de plans et coordination."
                : "BIM modeling, drawings extraction and coordination.",
              img: "/tools/revit.jpg",
            },
          ].map((tool) => (
            <div key={tool.title} className="card overflow-hidden">
              <div className="relative aspect-16/10 w-full bg-neutral-900">
                <Image
                  src={tool.img}
                  alt={tool.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="label-tech">{tool.title}</p>
                <p className="mt-3 text-neutral-300 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
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
              {isFr ? "Disponible pour des opportunités" : "Open to opportunities"}
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
              {isFr
                ? "Disponible pour un poste ou une mission en bureau d’études, conception structurelle ou BIM."
                : "Available for opportunities in design office, structural engineering and BIM."}
            </p>
          </div>

          <div className="flex gap-3">
            <Link href={`/${lang}#projects`} className="btn-secondary">
              {isFr ? "Voir les projets" : "View projects"}
            </Link>
            <Link href={`/${lang}/contact`} className="btn-primary">
              {isFr ? "Contact" : "Contact"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
