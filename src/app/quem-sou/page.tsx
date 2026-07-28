import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { IconCheck, IconWhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Quem Sou",
  description:
    "Conheça Henrique Barros: engenheiro mecânico, filho de metalúrgico, pai e morador de Guarulhos-SP.",
  alternates: { canonical: "/quem-sou" },
};

const valores = [
  "Engenheiro Mecânico formado",
  "Filho de metalúrgico",
  "Pai de família",
  "Católico",
  "Morador da região de Guarulhos – SP",
  "Defensor do trabalho e do desenvolvimento industrial",
];

export default function QuemSou() {
  return (
    <>
      <PageHero
        eyebrow="Quem Sou"
        title="Henrique Barros"
        subtitle={site.descriptor}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-1 lg:order-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cloud shadow-xl">
              <Image
                src={images.retrato.src}
                alt={images.retrato.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[50%_15%]"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
              Biografia
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                <strong className="font-semibold text-ink">Henrique Barros</strong> é
                engenheiro mecânico formado, filho de metalúrgico, pai de família e
                defensor do desenvolvimento industrial, da geração de empregos e da
                valorização do trabalho.
              </p>
              <p>
                Católico e morador da região de Guarulhos, no Estado de São Paulo, tem
                sua trajetória marcada pelo trabalho, pela superação e pela educação —
                da experiência de origem no ambiente industrial à formação em
                engenharia.
              </p>
              <p>
                Acredita na indústria forte, aliada à inovação tecnológica, e na
                educação técnica como caminhos para gerar oportunidades e transformar a
                vida das famílias trabalhadoras.
              </p>
            </div>

            <h3 className="mt-10 font-display text-xl font-bold text-ink">
              Trajetória e valores
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {valores.map((v) => (
                <li key={v} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  {v}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
              >
                Entre em contato
              </Link>
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-semibold text-ink transition-colors hover:bg-cloud"
              >
                <IconWhatsApp className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
