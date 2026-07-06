import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import scienceImg from "@/assets/ExcellaGallery/excella-science.jpeg";
import mrsPeace from "@/assets/ExcellaTeam/MrsPeaceUwineza.jpg";
import trGodfrey from "@/assets/ExcellaTeam/TrGodfrey.jpg";
import trAnita from "@/assets/ExcellaTeam/TrAnita.jpg";
import trJeanClaude from "@/assets/ExcellaTeam/TrJeanClaude.jpg";
import trSaido from "@/assets/ExcellaTeam/TrSaido.jpg";
import trWinnie from "@/assets/ExcellaTeam/TrWinnie.jpg";
import denisShema from "@/assets/ExcellaTeam/DenisShema.jpg";
import emmanuelHatari from "@/assets/ExcellaTeam/EmmanuelHatari.jpg";

const teamMembers = [
  { name: "Mr. Theo Turatsinze", role: "Director", img: null },
  { name: "Mrs. Peace Uwineza", role: "Deputy Director", img: mrsPeace },
  { name: "Denis Shema", role: "Head of Quality Control", img: denisShema },
  { name: "Madam Marie", role: "Secretary", img: null },
  { name: "Emmanuel Hatari", role: "Accountant", img: emmanuelHatari },
  { name: "Tr. Godfrey", role: "Director of Studies", img: trGodfrey },
  { name: "Tr. Saido", role: "Primary School Coordinator", img: trSaido },
  { name: "Tr. Jean Claude", role: "Primary School Coordinator", img: trJeanClaude },
  { name: "Tr. Winnie", role: "Nursery School Coordinator", img: trWinnie },
  { name: "Tr. Anita", role: "Nursery School Coordinator", img: trAnita },
];

export function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Educators who care, and lead."
        subtitle="Meet the dedicated professionals guiding Excella School's commitment to excellence in whole-child education."
        image={scienceImg}
      />

      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold text-center">
            Leadership
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance text-center max-w-3xl mx-auto">
            A team united by purpose, driven by excellence.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            At Excella School, our leadership team brings together decades of educational
            experience, a shared commitment to whole-child development, and a deep belief in every
            child's potential to thrive.
          </p>
        </Reveal>

        {/* DIRECTOR'S MESSAGE */}
        <section className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="w-full rounded-3xl aspect-4/5 bg-linear-to-br from-slate-300 to-slate-500 border border-border shadow-md"
              />
              <div className="absolute inset-0 flex items-end justify-start p-4 pointer-events-none">
                <span className="bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded">
                  Director's image coming soon
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Director's message
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
              An overview of the educational thinking and practice at Excella School.
            </h2>
            <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg md:text-xl font-display leading-relaxed text-balance">
              "High quality education is priceless and timeless: fame and beauty fade away, riches
              quickly vanish, but, here is the unchanging truth - no one whomsoever can take away your
              education from you!!"
            </blockquote>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We shall endeavour to highlight our delivery in our educational philosophy, our vision
              and mission, our preferred teaching-learning methodologies, and our assessment and
              evaluation methodologies.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We draw our inspiration from great thinkers such as Dr. Albert Einstein and Dr. Maria
              Montessori. Their wisdom reminds us to teach Excella children how to be creative
              learners. Likewise, the courage of Nelson Mandela, Dr. Rev. Martin Luther King Jr., and
              Mahatma Gandhi reminds us to nurture independent-minded learners.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Creativity and independent-mindedness are at the very heart of our education vision. If
              you have any questions or need clarification, please contact me on 0788306086.
            </p>
            <div className="mt-8">
              <p className="font-display text-xl">Théo Turatsinze</p>
              <p className="text-sm text-muted-foreground">Mr. Theo, Director, Excella School</p>
              <p className="text-sm text-muted-foreground">M.Ed, Univ. of Bath, U.K.</p>
            </div>
          </Reveal>
        </section>

        <div className="mt-16 space-y-6">

          {/* First row - 3 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(0, 3).map((member, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all hover:shadow-elegant">
                  <div className="aspect-4/5 overflow-hidden relative">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden="true"
                          className="h-full w-full bg-linear-to-br from-slate-300 to-slate-500"
                        />
                        <div className="absolute inset-0 flex items-end justify-center p-3">
                          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Image coming soon
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-display text-xl">{member.name}</p>
                        <p className="text-sm text-gray-200 mt-1">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Second row - 3 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(3, 6).map((member, i) => (
              <Reveal key={i + 3} delay={i * 0.06}>
                <div className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all hover:shadow-elegant">
                  <div className="aspect-4/5 overflow-hidden relative">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden="true"
                          className="h-full w-full bg-linear-to-br from-slate-300 to-slate-500"
                        />
                        <div className="absolute inset-0 flex items-end justify-center p-3">
                          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Image coming soon
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-display text-xl">{member.name}</p>
                        <p className="text-sm text-gray-200 mt-1">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Third row - 4 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(6).map((member, i) => (
              <Reveal key={i + 6} delay={i * 0.06}>
                <div className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all hover:shadow-elegant">
                  <div className="aspect-4/5 overflow-hidden relative">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden="true"
                          className="h-full w-full bg-linear-to-br from-slate-300 to-slate-500"
                        />
                        <div className="absolute inset-0 flex items-end justify-center p-3">
                          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Image coming soon
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <p className="font-display text-xl">{member.name}</p>
                        <p className="text-sm text-gray-200 mt-1">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
