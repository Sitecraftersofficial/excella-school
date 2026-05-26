import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, ArrowRight } from "lucide-react";
import debate from "@/assets/excella-debate.jpeg";
import science from "@/assets/excella-science.jpeg";
import campus from "@/assets/excella-campus.jpeg";
import awards from "@/assets/excella-awards.jpeg";
import trophies from "@/assets/excella-trophies.jpeg";
import classroom from "@/assets/excella-classroom.jpeg";

const posts = [
  { id: "debaters", date: "Nov 18, 2025", tag: "Achievement", t: "Excella debaters take regional finals", d: "Our senior team brought home gold in the Eastern Province debate championship.", full: "The senior debate team impressed judges with strong reasoning, confident delivery, and clear teamwork throughout the finals. Their win reflects the school’s focus on communication, leadership, and critical thinking across all grades.", img: debate },
  { id: "science-fair", date: "Nov 12, 2025", tag: "Event", t: "Annual Science & Innovation Fair returns", d: "Students presented original research, robotics, and sustainability projects.", full: "Students displayed original experiments, engineering prototypes, and practical solutions to real-world problems. The fair gave learners a platform to present, question, and refine their ideas in public.", img: science },
  { id: "admissions", date: "Nov 04, 2025", tag: "Announcement", t: "Admissions for January 2026 now open", d: "Limited places available across Early Years, Primary and Secondary.", full: "Families can now apply for the next intake across all school levels. The admissions team is available to guide parents through the process, answer questions, and support campus visits.", img: campus },
  { id: "awards", date: "Oct 28, 2025", tag: "Achievement", t: "National excellence awards 2025", d: "Four students recognized for academic and leadership excellence.", full: "Excella students were honored for strong academic performance, leadership, and consistent effort. The recognition reflects both individual achievement and the wider culture of excellence at the school.", img: awards },
  { id: "sports", date: "Oct 16, 2025", tag: "Sports", t: "Champions on the field and court", d: "A record-breaking trimester for Excella athletics teams.", full: "Excella’s sports teams delivered their strongest season yet, with standout performances in team events and individual competitions. Coaches praised the discipline and commitment shown by the learners.", img: trophies },
  { id: "parent-evenings", date: "Oct 02, 2025", tag: "Community", t: "Parent partnership evenings begin", d: "A new monthly forum to connect families with our educators.", full: "These evenings create a direct space for parents and teachers to share updates, discuss progress, and build a stronger school-home partnership throughout the year.", img: classroom },
];

export function News() {
  const [openPost, setOpenPost] = useState<string | null>(null);

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening at Excella."
        subtitle="Achievements, announcements, and stories from across our campus."
        image={debate}
        imageClassName="object-top"
        variant="banner"
        meta={[
          <span key="1" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Latest stories</span>,
          <span key="2" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Student wins</span>,
        ]}
      />

      <section className="container-px mx-auto max-w-7xl py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((n, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08}>
            <article className="group h-full rounded-3xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-shadow">
              <div className="aspect-16/10 overflow-hidden">
                <img src={n.img} alt={n.t} className={n.img === debate ? "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" : "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold uppercase tracking-wider"><Calendar className="h-3 w-3" /> {n.date}</span>
                  <span>·</span>
                  <span className="uppercase tracking-wider">{n.tag}</span>
                </div>
                <h3 className="mt-3 text-xl leading-snug group-hover:text-primary transition-colors">{n.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.d}</p>
                <button
                  type="button"
                  onClick={() => setOpenPost((current) => (current === n.id ? null : n.id))}
                  className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
                {openPost === n.id && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {n.full}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
