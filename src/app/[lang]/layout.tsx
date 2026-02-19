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

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = (supportedLangs.includes(params.lang as Lang)
    ? (params.lang as Lang)
    : "fr") satisfies Lang;

  return (
    <html lang={lang} className="dark">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        {/* Subtle engineering grid background */}
        <div className="grid-bg min-h-screen">
          <div className="min-h-screen bg-neutral-950/70">
            <Header lang={lang} />
            {children}
            <Footer lang={lang} />
          </div>
        </div>
      </body>
    </html>
  );
}
