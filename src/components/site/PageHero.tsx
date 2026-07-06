import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

type PageHeroVariant = "banner" | "split" | "editorial";
type PageHeroImageFit = "cover" | "contain";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageFit = "cover",
  imageClassName = "",
  actions,
  meta,
  variant = "banner",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageFit?: PageHeroImageFit;
  imageClassName?: string;
  actions?: ReactNode;
  meta?: ReactNode;
  variant?: PageHeroVariant;
}) {
  if (variant === "split") {
    return (
      <section className="relative overflow-hidden bg-ink text-ink-foreground py-24 md:py-32">
        <div className="absolute inset-0 gradient-radial opacity-60" />
        <div className="relative container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-left">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-semibold">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl text-balance font-display">
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-base md:text-lg text-ink-foreground/75 text-balance">
                  {subtitle}
                </p>
              </Reveal>
            )}
            {meta && <div className="mt-7 flex flex-wrap gap-3">{meta}</div>}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {image && (
            <Reveal className="lg:col-span-6" delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
                <img
                  src={image}
                  alt=""
                  className={`h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"} hero-split-image ${imageClassName}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section className="relative overflow-hidden bg-ink text-ink-foreground pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="absolute inset-0 gradient-radial opacity-60" />
        <div className="relative container-px mx-auto max-w-7xl">
          <div className="max-w-4xl text-left">
            <Reveal>
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-semibold">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl text-balance font-display">
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-base md:text-lg text-ink-foreground/75 text-balance">
                  {subtitle}
                </p>
              </Reveal>
            )}
            {meta && <div className="mt-7 flex flex-wrap gap-3">{meta}</div>}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {image && (
            <Reveal delay={0.18} className="mt-12">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-elegant">
                <img
                  src={image}
                  alt=""
                  className={`h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"} hero-editorial-image ${imageClassName}`}
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 text-ink-foreground overflow-hidden bg-ink">
      <div className="relative container-px mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-semibold">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl text-balance font-display">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-ink-foreground/75 text-balance">
              {subtitle}
            </p>
          </Reveal>
        )}
        {meta && <div className="mt-7 flex flex-wrap justify-center gap-3">{meta}</div>}
        {actions && (
          <div className="mt-8">
            <Reveal delay={0.3}>{actions}</Reveal>
          </div>
        )}
      </div>
    </section>
  );
}