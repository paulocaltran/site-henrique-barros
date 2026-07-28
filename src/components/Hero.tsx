import Image from "next/image";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { IconArrow } from "@/components/icons";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-blue-dark text-white">
      {/* Foto de fundo */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark via-blue-dark/85 to-blue-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-dark via-transparent to-transparent" />
      </div>

      {/* Faixa lateral azul-clara */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-light sm:w-2" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            {site.role} · {site.state}
          </span>

          <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Henrique
            <br />
            Barros
          </h1>

          <p className="mt-5 max-w-xl text-lg font-medium text-white/85 sm:text-xl">
            {site.slogan}
          </p>

          <p className="mt-3 max-w-xl text-white/70">
            Engenheiro e metalúrgico de Guarulhos. Do chão de fábrica à Assembleia,
            a renovação qualificada que São Paulo precisa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Conheça o Henrique
              <IconArrow className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
              <Image
                src="/images/pdt.png"
                alt="PDT — Partido Democrático Trabalhista"
                width={160}
                height={62}
                className="h-7 w-auto"
              />
              {site.ballotNumber && (
                <>
                  <span className="h-8 w-px bg-line" />
                  <span className="font-display text-3xl font-extrabold leading-none text-blue-dark">
                    {site.ballotNumber}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
