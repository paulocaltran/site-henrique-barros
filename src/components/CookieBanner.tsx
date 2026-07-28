"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const CONSENT_KEY = "hb-cookie-consent";

export function getConsent(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(CONSENT_KEY);
  return v === "accepted" || v === "declined" ? v : null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent("hb-consent-changed", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-2xl sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-ink-soft">
          Usamos cookies para melhorar sua experiência e analisar o tráfego do site.
          Ao continuar, você concorda com a nossa{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-semibold text-brand underline underline-offset-2"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-cloud"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
