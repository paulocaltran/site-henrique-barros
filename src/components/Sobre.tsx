import Image from "next/image";
import { images } from "@/lib/images";
import { destaques } from "@/lib/content";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Foto */}
        <div className="relative order-1 lg:order-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cloud shadow-xl">
            <Image
              src={images.retrato.src}
              alt={images.retrato.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="eyebrow">Quem é o Henrique</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            A história de quem <span className="mark">nunca perdeu a conexão</span> com o
            trabalho
          </h2>

          <div className="mt-6 space-y-4 text-ink-soft">
            <p>
              Henrique Barros tem 31 anos. É guarulhense, metalúrgico e engenheiro,
              casado com a Jéssica e pai da pequena Olívia. Filho de nordestinos, tem
              uma trajetória marcada pelo trabalho, pela superação e pela educação.
            </p>
            <p>
              Formado pelo <strong className="font-semibold text-ink">SENAI</strong>,
              começou a vida profissional no chão de fábrica, até se formar engenheiro
              — sem nunca perder a conexão com a realidade da classe trabalhadora.
            </p>
            <p>
              Com raízes no chão de fábrica e compromisso com o futuro de São Paulo, ele
              coloca sua determinação e entusiasmo a serviço da população: a voz de quem
              trabalha, acredita na força da educação e defende um Estado que gere
              oportunidades e valorize as famílias.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {destaques.map((d) => (
              <div key={d.label} className="bg-white p-4">
                <dt className="font-display text-2xl font-extrabold text-brand">
                  {d.value}
                </dt>
                <dd className="mt-1 text-xs font-medium leading-snug text-ink-soft">
                  {d.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
