import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { Sun, Users, FlaskConical, Bus, ShieldCheck } from "lucide-react";

import virtualTourVideo from "@/assets/Excella-Virtualtour.mp4";
import heroBgVideo from "@/assets/Excella-BgHeroVid.mp4";

const videoChapters = [
  {
    icon: Sun,
    badge: "01 · Morning Routine",
    title: "Arrival & Bag Check",
    description:
      "Every morning our students arrive by school bus or other means of transport. At the gate, their bags are checked for safety — then it's time to meet friends, share a few laughs, and head to class ready for the day.",
    video: virtualTourVideo,
  },
  {
    icon: Users,
    badge: "02 · Campus Life",
    title: "Our People & Campus",
    description:
      "Meet the teachers and students who make Excella feel like family, and see the campus environment where learning and community come together every day.",
    video: heroBgVideo,
  },
  {
    icon: FlaskConical,
    badge: "03 · Daily Activities",
    title: "Classrooms, Labs, Break & Lunch",
    description:
      "Step into interactive classroom lessons, hands-on science labs, energetic break time, and shared lunch moments that fill each school day.",
    video: virtualTourVideo,
  },
  {
    icon: Bus,
    badge: "04 · Dismissal & Transport",
    title: "Buses Home, Safely",
    description:
      "See how the school day ends: students board the school buses under supervision, depart safely, and arrive securely at their destinations.",
    video: heroBgVideo,
  },
];

export function VirtualLifeVisit() {
  return (
    <>
      <PageHero
        eyebrow="Virtual Life Visit"
        title="Welcome to the Virtual Tour"
        subtitle="Experience a full day at Excella School — from the morning bus arrival and bag check to the last ride home — all from wherever you are."
      />

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="space-y-16 md:space-y-20">
          {videoChapters.map((chapter, i) => (
            <Reveal key={chapter.title} delay={i * 0.05}>
              <div
                className={`grid gap-6 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
              >
                <div className="relative overflow-hidden rounded-3xl bg-black shadow-elegant min-h-64 sm:min-h-80">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover aspect-video"
                  >
                    <source src={chapter.video} type="video/mp4" />
                  </video>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                    <chapter.icon className="h-4 w-4" /> {chapter.badge}
                  </span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display">{chapter.title}</h2>
                  <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-16 rounded-3xl border border-border bg-card p-8 flex flex-col md:flex-row items-center gap-6 shadow-elegant">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Every video, a real school day</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                These clips are filmed on our campus with our own students and teachers. If you
                would like to experience it in person, we would love to show you around.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
