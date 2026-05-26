import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import campus from "@/assets/excella-campus.jpeg";
import science from "@/assets/excella-science.jpeg";
import classroom from "@/assets/excella-classroom.jpeg";
import trophies from "@/assets/excella-trophies.jpeg";
import awards from "@/assets/excella-awards.jpeg";
import debate from "@/assets/excella-debate.jpeg";
import spotlight from "@/assets/Excella-1.jpeg";
import logo from "@/assets/excella-logo.jpeg";
import campusVideo from "@/assets/Excella-2.mp4";
import eventVideo from "@/assets/Excella-3.mp4";
import celebrationVideo from "@/assets/Excella-4.mp4";

const items = [
  { kind: "image", src: campus, caption: "The Excella campus" },
  { kind: "image", src: science, caption: "Science in action" },
  { kind: "image", src: classroom, caption: "Inside our classrooms" },
  { kind: "image", src: trophies, caption: "Champions of the season" },
  { kind: "image", src: awards, caption: "Recognizing excellence" },
  { kind: "image", src: debate, caption: "Voices that lead" },
  { kind: "image", src: spotlight, caption: "Student spotlight" },
  { kind: "video", src: campusVideo, poster: campus, caption: "Campus moments on video" },
  { kind: "video", src: eventVideo, poster: science, caption: "School life in motion" },
  { kind: "video", src: celebrationVideo, poster: awards, caption: "Celebrations and achievements" },
];

const logoStrip = Array.from({ length: 6 }, (_, index) => index);
const rollingLogos = [...logoStrip, ...logoStrip];

function GalleryVideoCard({ src, poster, caption }: { src: string; poster: string; caption: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={togglePlayback}
      className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl w-full text-left cursor-pointer"
      aria-label={isPlaying ? `Pause ${caption}` : `Play ${caption}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        muted
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      {!isPlaying && (
        <span className="absolute inset-0 grid place-items-center bg-ink/20 transition-colors group-hover:bg-ink/10">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink shadow-elegant transition-transform duration-300 group-hover:scale-110">
            <Play className="h-7 w-7 fill-current ml-1" />
          </span>
        </span>
      )}
      <span className="absolute inset-x-0 bottom-0 p-5 bg-linear-to-t from-ink/90 to-transparent text-ink-foreground text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
        {caption}
      </span>
    </button>
  );
}

export function Gallery() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A visual tour of Excella."
        subtitle="Moments from our campus, classrooms, and community."
        image={campus}
      />

      <section className="full-bleed bg-ink text-ink-foreground border-y border-border/60 overflow-hidden py-4 md:py-5">
        <div className="overflow-hidden">
          <div className={reduceMotion ? "flex w-max items-center" : "marquee-track flex w-max items-center"}>
            {rollingLogos.map((group, groupIndex) => (
              <div key={groupIndex} className="flex items-center gap-0 px-0 shrink-0">
                {logoStrip.map((logoIndex) => (
                  <motion.img
                    key={`${groupIndex}-${logoIndex}`}
                    src={logo}
                    alt="Excella School"
                    aria-hidden="true"
                    className="h-10 w-auto shrink-0 object-contain md:h-12 lg:h-14"
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: logoIndex * 0.015, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <figure className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl">
                {it.kind === "video" ? (
                  <GalleryVideoCard src={it.src} poster={it.poster} caption={it.caption} />
                ) : (
                  <img
                    src={it.src}
                    alt={it.caption}
                    className={it.src === debate ? "w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-105" : "w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"}
                  />
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
