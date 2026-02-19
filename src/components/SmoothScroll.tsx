"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        const header = () => document.querySelector("header.sticky");

        const scrollToHash = (hash: string) => {
            if (!hash) return;
            const id = decodeURIComponent(hash.replace(/^#/, ""));
            const el = document.getElementById(id);
            if (!el) return;
            const headerEl = header();
            const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 0;
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY - headerHeight - 12;
            window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        };

        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const anchor = target.closest && (target.closest("a") as HTMLAnchorElement | null);
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || !href.includes("#")) return;

            // Only handle same-page anchors (path matches)
            try {
                const url = new URL(href, globalThis.location.href);
                if (url.pathname !== globalThis.location.pathname) return; // let Next handle navigation
                e.preventDefault();
                // update URL hash without jumping
                history.pushState(null, "", url.hash);
                scrollToHash(url.hash);
            } catch (err) {
                console.log(`Exception while doing something: ${err}`);
            }
        };

        // handle initial load with hash
        if (globalThis.location.hash) {
            // delay to allow layout/render
            setTimeout(() => scrollToHash(globalThis.location.hash), 50);
        }

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return null;
}
