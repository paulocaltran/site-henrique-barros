"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { IconWhatsApp, IconHeart } from "@/components/icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/#topo" className="flex items-center gap-2.5" aria-label="Início">
          <Image
            src={images.avatar.src}
            alt={site.candidate}
            width={72}
            height={72}
            className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white/70 shadow-sm"
          />
          <span className="hidden leading-tight sm:block">
            <span
              className={`block font-display text-lg font-bold tracking-tight ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {site.candidate}
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-widest ${
                solid ? "text-brand" : "text-blue-light"
              }`}
            >
              {site.role} · {site.party}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href="/#apoie"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
          >
            <IconHeart className="h-4 w-4" />
            <span className="hidden sm:inline">Apoiar a campanha</span>
            <span className="sm:hidden">Apoiar</span>
          </a>
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
          >
            <IconWhatsApp className="h-4 w-4" />
            <span className="hidden sm:inline">Fale comigo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
