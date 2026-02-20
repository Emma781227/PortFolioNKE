"use client";

import React from "react";

type Props = Readonly<{
    lang?: "fr" | "en";
    href?: string;
    className?: string;
    children?: React.ReactNode;
}>;

export default function CvButton({ lang = "fr", href = "/cv.pdf", className = "btn-secondary", children }: Props) {
    const label = children ?? (lang === "fr" ? "Télécharger le CV" : "Download CV");

    return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
            {label}
        </a>
    );
}
