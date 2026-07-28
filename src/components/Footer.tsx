import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  IconWhatsApp,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconFacebook,
  IconYouTube,
  IconLinkedIn,
} from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: IconInstagram, label: "Instagram", href: site.contact.instagram },
    { icon: IconFacebook, label: "Facebook", href: site.contact.facebook },
    { icon: IconYouTube, label: "YouTube", href: site.contact.youtube },
    { icon: IconLinkedIn, label: "LinkedIn", href: site.contact.linkedin },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-white/10 bg-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identidade */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/avatar.jpg"
                alt={site.candidate}
                width={72}
                height={72}
                className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-white/20"
              />
              <span>
                <span className="block font-display text-lg font-bold leading-tight">
                  {site.candidate}
                </span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-brand-light">
                  {site.role} · {site.party}
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60">{site.descriptor}</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2">
              <Image
                src="/images/pdt.png"
                alt="PDT — Partido Democrático Trabalhista"
                width={128}
                height={50}
                className="h-6 w-auto"
              />
            </span>
          </div>

          {/* Contato */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              Contato
            </span>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-3 text-white/80 transition-colors hover:text-brand-light"
                >
                  <IconMail className="h-5 w-5 shrink-0" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-3 text-white/80 transition-colors hover:text-brand-light"
                >
                  <IconPhone className="h-5 w-5 shrink-0" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 transition-colors hover:text-brand-light"
                >
                  <IconWhatsApp className="h-5 w-5 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-white/80">
                <IconPin className="h-5 w-5 shrink-0" />
                {site.cityState}
              </li>
            </ul>
          </div>

          {/* Navegação */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              Navegação
            </span>
            <ul className="mt-4 space-y-3 text-sm">
              {[...site.nav, ...site.legal].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-brand-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {socials.length > 0 && (
              <div className="mt-5 flex gap-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>
            <span className="font-semibold text-white/70">Responsável pelo site:</span>{" "}
            {site.candidate} · {site.contact.email} · {site.contact.phoneDisplay} ·{" "}
            {site.cityState}
          </p>
          <p className="mt-2">
            © {year} {site.candidate}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
