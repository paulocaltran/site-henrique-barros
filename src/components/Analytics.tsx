"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent } from "@/components/CookieBanner";

// Google Analytics 4 — carregado apenas com consentimento (LGPD) e
// quando NEXT_PUBLIC_GA_ID estiver configurado (ex.: G-XXXXXXXXXX).
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === "accepted");
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setAllowed(detail === "accepted");
    };
    window.addEventListener("hb-consent-changed", onChange);
    return () => window.removeEventListener("hb-consent-changed", onChange);
  }, []);

  if (!gaId || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
