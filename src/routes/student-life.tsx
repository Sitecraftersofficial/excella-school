import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Trophy, Users, Mic, Palette, Plane, Heart } from "lucide-react";
import trophies from "@/assets/excella-trophies.jpeg";
import debate from "@/assets/excella-debate.jpeg";
import awards from "@/assets/excella-awards.jpeg";
import basketball from "@/assets/Excella-basketball.png";
import basketball2 from "@/assets/Excella-basketball2.png";
import musicClass from "@/assets/Excella-musicclass.png";
import science from "@/assets/excella-science.jpeg";

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
          <h2 className="text-3xl md:text-5xl font-display max-w-3xl">Stories from life beyond the classroom.</h2>
        </Reveal>
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
          {[
            { img: basketball, t: "Basketball training", span: "aspect-[4/3]" },
            { img: basketball2, t: "Teamwork on the court", span: "aspect-[4/3]" },
            { img: musicClass, t: "Music class moments", span: "aspect-[4/3]" },
            { img: science, t: "Science in action", span: "aspect-[4/3]" },
            { img: trophies, t: "Regional debate champions", span: "aspect-[4/3]" },
            { img: awards, t: "Celebrating excellence", span: "aspect-[4/3]" },
            { img: debate, t: "Public speaking finals", span: "aspect-[16/9]" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <figure className="mb-4 break-inside-avoid inline-block w-full">
                <div className="group relative overflow-hidden rounded-3xl">
                  <img src={s.img} alt={s.t} className={s.img === debate ? "w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105" : "w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"} />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
                  <p className="absolute bottom-6 left-6 right-6 text-ink-foreground text-lg font-display">{s.t}</p>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
