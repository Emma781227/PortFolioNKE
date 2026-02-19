"use client";

import { useState } from "react";

export default function CopyButton({
  value,
  labelCopy = "Copy",
  labelCopied = "Copied",
}: {
  value: string;
  labelCopy?: string;
  labelCopied?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="btn-secondary text-xs px-3 py-2"
    >
      {copied ? labelCopied : labelCopy}
    </button>
  );
}
