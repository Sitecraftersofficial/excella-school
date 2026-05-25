import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import campus from "@/assets/excella-campus.jpeg";
import science from "@/assets/excella-science.jpeg";
import classroom from "@/assets/excella-classroom.jpeg";
import trophies from "@/assets/excella-trophies.jpeg";
import awards from "@/assets/excella-awards.jpeg";
import debate from "@/assets/excella-debate.jpeg";

const items = [
  { img: campus, caption: "The Excella campus" },
  { img: science, caption: "Science in action" },
  { img: classroom, caption: "Inside our classrooms" },
  { img: trophies, caption: "Champions of the season" },
  { img: awards, caption: "Recognizing excellence" },
  { img: debate, caption: "Voices that lead" },
  { img: campus, caption: "Pathways and palms" },
  { img: classroom, caption: "Learning, together" },
  { img: science, caption: "Curiosity at work" },
];

export function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual tour of Excella."
        subtitle="Moments from our campus, classrooms, and community."
        image={campus}
      />
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <figure className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl">
                <img src={it.img} alt={it.caption} className={it.img === debate ? "w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105" : "w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"} />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-ink/90 to-transparent text-ink-foreground text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                  {it.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
