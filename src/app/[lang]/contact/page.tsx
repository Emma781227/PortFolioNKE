import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import { contactFR } from "@/content/fr/contact";
import { contactEN } from "@/content/en/contact";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "fr";
  const isFr = lang === "fr";
  const content = isFr ? contactFR : contactEN;

  const email = "nkeelomo04@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/nke-elomo-71a70a27a/";
  const location = isFr ? "jean Abanda, Yaoundé, Cameroun" : "Jean Abanda, Yaoundé, Cameroon";

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header>
        <p className="label-tech">{isFr ? "Coordonnées" : "Details"}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {content.title}
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
          {content.subtitle}
        </p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Email */}
        <div className="card card-pad">
          <p className="label-tech">{content.emailLabel}</p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <a
              href={`mailto:${email}`}
              className="text-neutral-200 underline decoration-neutral-700 underline-offset-4 hover:text-white"
            >
              {email}
            </a>

            <div className="flex gap-2">
              <CopyButton
                value={email}
                labelCopy={isFr ? "Copier" : "Copy"}
                labelCopied={isFr ? "Copié" : "Copied"}
              />
              <a href={`mailto:${email}`} className="btn-secondary">
                {isFr ? "Envoyer" : "Send"}
              </a>
            </div>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            {isFr
              ? "Clique sur l’adresse ou utilise le bouton pour envoyer un mail."
              : "Click the address or use the button to send an email."}
          </p>
        </div>

        {/* LinkedIn */}
        <div className="card card-pad">
          <p className="label-tech">{content.linkedinLabel}</p>

          <div className="mt-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-200 underline decoration-neutral-700 underline-offset-4 hover:text-white"
            >
              {linkedinUrl}
            </a>
          </div>

          <div className="mt-6">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              {isFr ? "Ouvrir LinkedIn" : "Open LinkedIn"}
            </a>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            {isFr
              ? "Profil complet avec expériences, projets et contacts."
              : "Full profile with experience, projects and contact details."}
          </p>
        </div>

        {/* Location */}
        <div className="card card-pad sm:col-span-2">
          <p className="label-tech">{content.locationLabel}</p>
          <p className="mt-4 text-neutral-300">{location}</p>
          <p className="mt-2 text-sm text-neutral-500">
            {isFr ? "Mobilité possible selon opportunité." : "Open to relocation depending on opportunity."}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="card mt-16 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="label-tech">{isFr ? "Disponibilité" : "Availability"}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              {content.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-300 leading-relaxed">
              {content.ctaText}
            </p>
          </div>

          <div className="flex gap-3">
            <Link href={`/${lang}#projects`} className="btn-secondary">
              {isFr ? "Voir les projets" : "View projects"}
            </Link>

            <a href={`mailto:${email}`} className="btn-primary">
              {isFr ? "Envoyer un mail" : "Send an email"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
