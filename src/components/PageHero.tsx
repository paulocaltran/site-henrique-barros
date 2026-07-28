export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-blue-dark text-white">
      <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-light sm:w-2" />
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        {eyebrow && <span className="eyebrow text-blue-light">{eyebrow}</span>}
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
