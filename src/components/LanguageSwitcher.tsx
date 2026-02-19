"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function switchLangPath(pathname: string, target: "fr" | "en") {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return `/${target}`;

  parts[0] = target;
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ lang }: Readonly<{ lang: "fr" | "en" }>) {
  const other = lang === "fr" ? "en" : "fr";

  // Render a stable server-side href (root of target lang) to avoid
  // hydration mismatches. On the client, compute the exact path after mount.
  const [href, setHref] = useState(`/${other}`);

  useEffect(() => {
    const id = setTimeout(() => {
      const pathname = globalThis.window === undefined ? `/${lang}` : globalThis.location.pathname;
      setHref(switchLangPath(pathname, other));
    }, 0);
    return () => clearTimeout(id);
  }, [lang, other]);

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
