import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import {
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconPin,
  IconInstagram,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Henrique Barros — e-mail, telefone, WhatsApp e localização em Guarulhos-SP.",
  alternates: { canonical: "/contato" },
};

const canais = [
  {
    icon: IconMail,
    label: "E-mail",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: IconPhone,
    label: "Telefone",
    value: site.contact.phoneDisplay,
    href: site.contact.phoneHref,
  },
  {
    icon: IconWhatsApp,
    label: "WhatsApp",
    value: site.contact.phoneDisplay,
    href: site.contact.whatsapp,
  },
  {
    icon: IconInstagram,
    label: "Instagram",
    value: site.contact.instagramHandle,
    href: site.contact.instagram,
  },
  {
    icon: IconPin,
    label: "Localização",
    value: site.cityState,
    href: `https://www.google.com/maps?q=${encodeURIComponent(site.cityState)}`,
  },
];

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com o Henrique"
        subtitle="Tem uma dúvida, sugestão ou quer somar? Envie sua mensagem — será um prazer conversar."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {/* Canais */}
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Canais de atendimento
            </h2>
            <ul className="mt-6 space-y-3">
              {canais.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors hover:border-brand/40 hover:bg-cloud"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                          {c.label}
                        </span>
                        <span className="block font-semibold text-ink">{c.value}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Formulário */}
          <div className="rounded-2xl border border-line bg-cloud p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-ink">
              Envie uma mensagem
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Preencha os campos abaixo e fale diretamente pelo WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
            <iframe
              title={`Mapa — ${site.cityState}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.cityState,
              )}&output=embed`}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
