import Image from "next/image";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { IconHeart, IconWhatsApp, IconInstagram, IconArrow } from "@/components/icons";

const cards = [
  {
    icon: IconHeart,
    title: "Faça uma doação",
    text: "Toda contribuição fortalece uma campanha limpa, feita com as pessoas. Apoie pela vaquinha oficial.",
    cta: "Contribuir agora",
    href: site.contact.donate,
    featured: true,
  },
  {
    icon: IconWhatsApp,
    title: "Seja voluntário",
    text: "Some com a gente na rua e nas redes. Chame no WhatsApp e entre para o time.",
    cta: "Quero ajudar",
    href: site.contact.whatsapp,
    featured: false,
  },
  {
    icon: IconInstagram,
    title: "Compartilhe",
    text: "Siga, curta e compartilhe. A renovação também se constrói nas redes sociais.",
    cta: "Seguir no Instagram",
    href: site.contact.instagram,
    featured: false,
  },
] as const;

export default function Apoie() {
  return (
    <section id="apoie" className="relative overflow-hidden bg-blue-dark py-20 text-white sm:py-28">
      <div className="absolute inset-0">
        <Image
          src={images.brasilia.src}
          alt={images.brasilia.alt}
          fill
          sizes="100vw"
          className="object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-dark/80 via-blue-dark/90 to-blue-dark" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="eyebrow text-blue-light">Apoie a campanha</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
            Faça parte dessa renovação
          </h2>
          <p className="mt-4 text-white/75">
            Uma candidatura construída de baixo para cima precisa de você. Escolha como
            fortalecer o movimento de quem trabalha.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col rounded-2xl p-6 ring-1 transition-all hover:-translate-y-1 ${
                  c.featured
                    ? "bg-accent text-white ring-accent shadow-xl shadow-accent/30"
                    : "bg-white/5 text-white ring-white/15 backdrop-blur hover:bg-white/10"
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl ${
                    c.featured ? "bg-white text-accent" : "bg-white/10 text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${
                    c.featured ? "text-white/85" : "text-white/70"
                  }`}
                >
                  {c.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  {c.cta}
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-xs text-white/50">
          A doação é feita pela plataforma oficial de arrecadação da campanha. Contribua
          com consciência e dentro dos limites previstos na legislação eleitoral.
        </p>
      </div>
    </section>
  );
}
