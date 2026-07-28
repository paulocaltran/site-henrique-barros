import { site } from "@/lib/site";
import { IconMail, IconWhatsApp, IconInstagram, IconPin } from "@/components/icons";

const canais = [
  { icon: IconMail, label: "E-mail", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: IconWhatsApp, label: "WhatsApp", value: site.contact.phoneDisplay, href: site.contact.whatsapp },
  { icon: IconInstagram, label: "Instagram", value: site.contact.instagramHandle, href: site.contact.instagram },
  { icon: IconPin, label: "Localização", value: site.cityState, href: `https://www.google.com/maps?q=${encodeURIComponent(site.cityState)}` },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-cloud py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="eyebrow">Contato</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Fale com o Henrique
          </h2>
          <p className="mt-4 text-ink-soft">
            Tem uma dúvida, sugestão ou quer somar? Fale com a gente pelos canais abaixo.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {canais.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-brand/40"
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
    </section>
  );
}
