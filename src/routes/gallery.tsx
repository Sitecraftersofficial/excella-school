import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

import campus from "@/assets/ExcellaGallery/excella-campus.jpeg";

import excellaLogo from "@/assets/ExcellaLogo/Excella+Ams-logo.jpeg";




import campus1 from "@/assets/ExcellaGallery/Excella-campus1.png";
import campus2 from "@/assets/ExcellaGallery/Excella-campus2.png";

import science from "@/assets/ExcellaGallery/excella-science.jpeg";
import classroom from "@/assets/ExcellaGallery/Classroom.png";
import classroom2 from "@/assets/ExcellaGallery/Classroom2.png";
import classroomLife from "@/assets/ExcellaGallery/ClassroomLife.png";

import basketball from "@/assets/ExcellaGallery/Excella-basketball.png";
import basketball2 from "@/assets/ExcellaGallery/Excella-basketball2.png";
import basketball3 from "@/assets/ExcellaGallery/Excella-basketball3.jpg";

import excellaBus from "@/assets/ExcellaGallery/Excella-Bus.png";

import debate from "@/assets/ExcellaGallery/excella-debate.jpeg";
import debate2 from "@/assets/ExcellaGallery/excella-debate2.jpg";

import musicClass from "@/assets/ExcellaGallery/Excella-musicclass.png";
import musicClass2 from "@/assets/ExcellaGallery/Excella-musicclass2.jpg";

import chromebook from "@/assets/ExcellaGallery/chromebook.png";

import trophies from "@/assets/ExcellaGallery/excella-trophies.jpeg";
import awards from "@/assets/ExcellaGallery/excella-awards.jpeg";

import library from "@/assets/ExcellaGallery/Library.png";
import nurseryClass from "@/assets/ExcellaGallery/NurseryClass.png";
import outdoorActivity from "@/assets/ExcellaGallery/OutdoorClassActivity.png";
import outdoorActivity2 from "@/assets/ExcellaGallery/OutdoorClassActivity2.png";

import student from "@/assets/ExcellaGallery/Student.png";
import studentInClass from "@/assets/ExcellaGallery/StudentInClass.png";
import studentLife from "@/assets/ExcellaGallery/Studentlife.png";
import studentLife2 from "@/assets/ExcellaGallery/Studentlife2.png";
import studentOutdoor from "@/assets/ExcellaGallery/StudentOutdoor.png";
import trip from "@/assets/ExcellaGallery/Trip.png";

import heroVideo from "@/assets/Excella-Virtualtour.mp4";

export function Gallery() {
  const images = useMemo(
    () => [
      { src: campus, caption: "The Excella campus" },
      { src: campus1, caption: "Campus view one" },
      { src: campus2, caption: "Campus view two" },
      { src: science, caption: "Science in action" },
      { src: classroom, caption: "Inside our classrooms" },
      { src: classroom2, caption: "Classroom life" },
      { src: classroomLife, caption: "Classroom moments" },
      { src: basketball, caption: "Basketball at Excella" },
      { src: basketball2, caption: "Basketball training" },
      { src: basketball3, caption: "Teamwork on the court" },
      { src: excellaBus, caption: "School transport" },
      { src: chromebook, caption: "Chromebook-equipped learning" },
      { src: musicClass, caption: "Music class moments" },
      { src: musicClass2, caption: "Music class moments (2)" },
      { src: trophies, caption: "Champions of the season" },
      { src: awards, caption: "Recognizing excellence" },
      { src: debate, caption: "Voices that lead" },
      { src: debate2, caption: "Public speaking moments" },
      { src: library, caption: "Library & discovery" },
      { src: nurseryClass, caption: "Nursery class" },
      { src: outdoorActivity, caption: "Outdoor learning activity" },
      { src: outdoorActivity2, caption: "Outdoor learning activity (2)" },
      { src: student, caption: "Student moments" },
      { src: studentInClass, caption: "Students in class" },
      { src: studentLife, caption: "Student life" },
      { src: studentLife2, caption: "Student life (2)" },
      { src: studentOutdoor, caption: "Students outdoors" },
      { src: trip, caption: "School trip moments" },
    ],
    [],
  );

  // Optional: keep focus management for hover cards by cycling a simple "selected" index.
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <div className="overflow-x-hidden">
        <PageHero
          eyebrow="Gallery"
          title="A visual tour of Excella."
          subtitle="Moments from our campus, classrooms, and community."
          image={campus}
          actions={
            <a
              href={heroVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold hover:opacity-90"
            >
              Take a visual tour <ArrowRight className="h-4 w-4" />
            </a>
          }
        />

        {/* Logo carousel (partner logos) */}
        <section className="full-bleed bg-ink text-ink-foreground border-y border-border/60 overflow-hidden py-4 md:py-5">
          <div className="overflow-hidden">
            <div className="excella-logo-marquee">
              {/* Duplicate set for seamless loop */}
              {[0, 1].map((setIndex) => (
                <div
                  key={setIndex}
                  className="flex items-center gap-0 excella-logo-marquee-set"
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center justify-center gap-0 shrink-0"
                    >
                      <img
                        src={excellaLogo}
                        alt="Excella AMS logo"
                        className="h-10 md:h-12 w-auto object-contain"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* Image grid */}
        <section className="container-px mx-auto max-w-7xl py-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
            {images.map((it, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <figure className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl">
                  <img
                    src={it.src}
                    alt={it.caption}
                    className={
                      "w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    }
                    onMouseEnter={() => setSelectedIndex(i)}
                  />
                  <figcaption className="hidden">{it.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </div>


      <CTASection />
    </>
  );
}