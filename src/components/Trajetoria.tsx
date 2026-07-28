import { trajetoria } from "@/lib/content";

export default function Trajetoria() {
  return (
    <section id="trajetoria" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="eyebrow">Trajetória</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Do chão de fábrica à engenharia
          </h2>
          <p className="mt-4 text-ink-soft">
            Uma caminhada feita de trabalho e estudo — o mesmo caminho de milhões de
            trabalhadores paulistas.
          </p>
        </div>

        <ol className="mt-12 space-y-2 border-l-2 border-line pl-6 sm:pl-8">
          {trajetoria.map((t, i) => (
            <li key={t.title} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+7px)] top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-brand ring-4 ring-white sm:-left-[calc(2rem+7px)]" />
              <span className="font-display text-sm font-bold uppercase tracking-widest text-brand">
                {t.marker}
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{t.title}</h3>
              <p className="mt-1 max-w-xl text-ink-soft">{t.text}</p>
              {i === trajetoria.length - 1 && (
                <span className="mt-3 inline-block rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-dark">
                  É agora.
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
