"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { IconWhatsApp } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Fora da home não há hero escuro no topo → cabeçalho sempre sólido.
  const solid = scrolled || open || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-line shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Início">
          <Image
            src={images.avatar.src}
            alt={site.candidate}
            width={72}
            height={72}
            className="h-10 w-10 rounded-full object-cover object-top ring-2 ring-white/70 shadow-sm"
          />
          <span className="leading-tight">
            <span
              className={`block font-display text-lg font-bold tracking-tight transition-colors ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {site.candidate}
            </span>
            <span
              className={`block text-[11px] font-semibold uppercase tracking-widest transition-colors ${
                solid ? "text-brand" : "text-blue-light"
              }`}
            >
              {site.role} · {site.party}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-brand ${
                  solid
                    ? active
                      ? "text-brand"
                      : "text-ink-soft"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
          >
            <IconWhatsApp className="h-4 w-4" />
            Fale comigo
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-md lg:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-2">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line/60 py-3 text-base font-semibold text-ink last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="my-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 font-semibold text-white"
          >
            <IconWhatsApp className="h-5 w-5" />
            Fale comigo no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
