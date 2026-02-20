import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Professional portfolio",
};

const supportedLangs = ["fr", "en"] as const;
type Lang = (typeof supportedLangs)[number];

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = (supportedLangs.includes(rawLang as Lang)
    ? (rawLang as Lang)
    : "fr") satisfies Lang;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="grid-bg min-h-screen">
        <div className="min-h-screen bg-neutral-950/70">
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
        </div>
      </div>
    </div>
  );
}
