import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: { eyebrow: string; title: string; subtitle?: string; image?: string }) {

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-ink text-ink-foreground overflow-hidden">
      {image && (
        <div className="absolute inset-0 opacity-25">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/70 to-ink" />
        </div>
      )}
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="relative container-px mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-semibold">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl text-balance font-display">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-ink-foreground/75 text-balance">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
