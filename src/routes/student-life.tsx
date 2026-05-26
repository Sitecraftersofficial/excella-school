import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Trophy, Users, Mic, Palette, Plane, Heart } from "lucide-react";
import trophies from "@/assets/excella-trophies.jpeg";
import debate from "@/assets/excella-debate.jpeg";
import awards from "@/assets/excella-awards.jpeg";
import classroom from "@/assets/excella-classroom.jpeg";

const pillars = [
  { icon: Trophy, t: "Sports", d: "Football, basketball, athletics and more." },
  { icon: Mic, t: "Debate & MUN", d: "Confident speakers, sharp thinkers." },
  { icon: Palette, t: "Arts & Music", d: "Creative expression at every age." },
  { icon: Users, t: "Leadership", d: "Student council, prefects, house captains." },
  { icon: Plane, t: "School Trips", d: "Local discovery and global exposure." },
  { icon: Heart, t: "Service", d: "Community projects with real impact." },
];

export function StudentLife() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="Where character meets confidence."
        subtitle="A vibrant community of clubs, competitions, and shared experiences — the moments that shape who our students become."
        image={trophies}
        variant="split"
        meta={[
          <span key="1" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Clubs</span>,
          <span key="2" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Competitions</span>,
          <span key="3" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Community</span>,
        ]}
      />

      <section className="container-px mx-auto max-w-7xl py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pillars.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="h-full rounded-3xl border border-border p-8 bg-card hover:border-primary/40 hover:-translate-y-1 transition-all">
              <p.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-2xl">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display max-w-3xl">Stories from the Excella community.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-6 gap-4">
          {[
            { img: trophies, t: "Regional debate champions", span: "md:col-span-4 aspect-16/10" },
            { img: awards, t: "Excellence awards 2025", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
            { img: debate, t: "Public speaking finals", span: "md:col-span-2 aspect-square" },
            { img: classroom, t: "House spirit week", span: "md:col-span-2 aspect-square" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.06} className={s.span}>
              <div className="group relative h-full overflow-hidden rounded-3xl">
                <img src={s.img} alt={s.t} className={s.img === debate ? "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" : "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"} />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 text-ink-foreground text-lg font-display">{s.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
