import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { IconWhatsApp } from "@/components/icons";

const display = Barlow({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans-src",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.candidate} | Site Oficial`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.candidate}`,
  },
  description: site.description,
  keywords: [
    "Henrique Barros",
    "Engenheiro Mecânico",
    "Guarulhos",
    "São Paulo",
    "PDT",
    "desenvolvimento industrial",
    "geração de empregos",
  ],
  authors: [{ name: site.candidate, url: site.url }],
  creator: site.candidate,
  publisher: site.candidate,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.candidate,
    title,
    description: site.description,
    images: [{ url: "/images/og.svg", width: 1200, height: 630, alt: site.candidate }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/og.svg"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION
      ? { "facebook-domain-verification": process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION }
      : {},
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.candidate,
  jobTitle: "Engenheiro Mecânico",
  email: site.contact.email,
  telephone: "+5511997974972",
  url: site.url,
  image: `${site.url}/images/avatar.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: [
    site.contact.instagram,
    site.contact.facebook,
    site.contact.youtube,
    site.contact.linkedin,
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Botão flutuante de WhatsApp */}
        <a
          href={site.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
        >
          <IconWhatsApp className="h-7 w-7" />
        </a>

        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
