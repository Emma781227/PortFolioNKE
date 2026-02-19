import Link from "next/link";
import CvButton from "./CvButton";

export default function Footer({ lang }: Readonly<{ lang: "fr" | "en" }>) {
  const isFr = lang === "fr";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-neutral-200">
              {isFr ? "Portfolio Ingénierie" : "Engineering Portfolio"}
            </p>
            <p className="mt-2 max-w-sm text-sm text-neutral-400 leading-relaxed">
              {isFr
                ? "Dossiers techniques, plans d’exécution et projets structure / BIM."
                : "Technical packages, execution drawings and structural / BIM projects."}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="label-tech">{isFr ? "Navigation" : "Navigation"}</p>
              <div className="flex flex-col gap-2 text-neutral-400">
                <Link href={`/${lang}/`} className="hover:text-white">
                  {isFr ? "Accueil" : "Home"}
                </Link>
                <Link href={`/${lang}#projects`} className="hover:text-white">
                  {isFr ? "Projets" : "Projects"}
                </Link>
                <Link href={`/${lang}/experience`} className="hover:text-white">
                  {isFr ? "Expérience" : "Experience"}
                </Link>
                <Link href={`/${lang}/about`} className="hover:text-white">
                  {isFr ? "À propos" : "About"}
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="label-tech">{isFr ? "Contact" : "Contact"}</p>
              <div className="flex flex-col gap-2 text-neutral-400">
                <Link href={`/${lang}/contact`} className="hover:text-white">
                  {isFr ? "Me contacter" : "Contact"}
                </Link>
                <CvButton lang={lang} className="hover:text-white">
                  {isFr ? "Télécharger CV" : "Download CV"}
                </CvButton>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-900 pt-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} - {isFr ? "Tous droits réservés." : "All rights reserved."}
          </p>

          <p className="text-neutral-600">
            {isFr ? "Conçu avec Next.js & Tailwind" : "Built with Next.js & Tailwind"}
          </p>
        </div>
      </div>
    </footer>
  );
}
