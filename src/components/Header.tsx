import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ lang }: { lang: "fr" | "en" }) {
  const isFr = lang === "fr";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href={`/${lang}`} className="font-semibold tracking-tight">
          {isFr ? "Portfolio" : "Portfolio"}
        </Link>

        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <Link className="hover:text-white" href={`/${lang}/projects`}>
            {isFr ? "Projets" : "Projects"}
          </Link>
          <Link className="hover:text-white" href={`/${lang}/about`}>
            {isFr ? "À propos" : "About"}
          </Link>
          <Link className="hover:text-white" href={`/${lang}/experience`}>
            {isFr ? "Expérience" : "Experience"}
          </Link>
          <Link className="hover:text-white" href={`/${lang}/contact`}>
            {isFr ? "Contact" : "Contact"}
          </Link>

          <LanguageSwitcher lang={lang} />
        </nav>
      </div>
    </header>
  );
}
