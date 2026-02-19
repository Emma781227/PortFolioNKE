"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function switchLangPath(pathname: string, target: "fr" | "en") {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return `/${target}`;

  parts[0] = target;
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ lang }: { lang: "fr" | "en" }) {
  const pathname = usePathname();
  const other = lang === "fr" ? "en" : "fr";

  const href = switchLangPath(pathname || `/${lang}`, other);

  return (
    <Link
      href={href}
      className="btn-secondary px-3 py-2 text-xs"
      aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
      title={lang === "fr" ? "English version" : "Version française"}
    >
      {lang === "fr" ? "EN" : "FR"}
    </Link>
  );
}
