import { bandeiras } from "@/lib/content";

export default function Bandeiras() {
  return (
    <section id="bandeiras" className="bg-cloud py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="eyebrow">Bandeiras</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-4xl">
            Compromissos com São Paulo
          </h2>
          <p className="mt-4 text-ink-soft">
            Propostas que nascem da experiência real de quem trabalha, estuda e
            acredita na força da educação para transformar vidas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bandeiras.map((b, i) => {
            const Icon = b.icon;
            const tiles = [
              "bg-brand text-white shadow-brand/30",
              "bg-blue-light text-white shadow-blue-light/30",
              "bg-accent text-white shadow-accent/30",
            ];
            const tile = tiles[i % 3];
            return (
              <article
                key={b.title}
                className="group relative overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <span className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-brand-50 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6" />
                <div className="relative">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl shadow-sm ${tile}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
