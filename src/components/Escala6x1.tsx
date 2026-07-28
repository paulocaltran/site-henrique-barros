import { IconCheck } from "@/components/icons";

const pontos = [
  "Mais tempo com a família e para descansar",
  "Mais qualidade de vida para quem sustenta a economia",
  "Menos adoecimento e mais dignidade no trabalho",
];

export default function Escala6x1() {
  return (
    <section id="escala6x1" className="relative overflow-hidden bg-brand-darker text-white">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Bandeira símbolo
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Fim da
            <br />
            Escala 6×1
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Trabalhar seis dias para descansar apenas um não é vida digna. Henrique
            Barros defende o fim da escala 6×1 e mais qualidade de vida para a classe
            trabalhadora de São Paulo.
          </p>

          <ul className="mt-7 space-y-3">
            {pontos.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-light text-white">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="font-medium text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur ring-1 ring-white/20">
            <span className="font-display text-8xl font-extrabold leading-none text-white sm:text-9xl">
              6<span className="text-accent">×</span>1
            </span>
            <p className="mt-4 text-2xl font-bold">Chega.</p>
            <p className="mt-2 text-white/75">
              Uma pauta da juventude e de toda pessoa que trabalha. É por mais tempo de
              vida para viver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
