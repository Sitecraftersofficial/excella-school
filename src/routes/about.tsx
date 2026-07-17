import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Heart, BookOpen, Sparkles, Brain } from "lucide-react";
import campus2 from "@/assets/ExcellaGallery/Excella-campus2.png";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Excella"
        title="A school built on excellence, character, and opportunity."
        subtitle="Nurturing whole children to become whole adults through balanced, purposeful education."
        image={campus2}
        imageFit="contain"
        variant="split"
      />

      <section className="bg-secondary py-16">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Target,
              t: "Our Mission",
              d: "To offer an all-round education that builds confidence, nurtures diverse talents, and supports social and academic development.",
            },
            {
              icon: Eye,
              t: "Our Vision",
              d: "To nurture creative and independent-minded adults who contribute to Rwanda and the wider world.",
            },
            {
              icon: Heart,
              t: "Our Values",
              d: "Balance, encouragement, respect, responsibility, curiosity, integrity, and service to community.",
            },
          ].map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-card border border-border p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-2xl">{v.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EDUCATIONAL PHILOSOPHY */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold text-center">
            Our Educational Philosophy
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance text-center max-w-4xl mx-auto">
            The Hook: Our Foundation
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            At Excella School, we believe education extends far beyond traditional classrooms. Our
            foundation is built on whole-child educational thinking—recognizing the profound link
            between a whole child and a whole adult. We offer comprehensive educational
            opportunities that allow every child to develop their full potential.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 h-full hover:border-primary/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display">Knowledge</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Providing rigorous foundational education in core subjects to stimulate intellectual
                growth.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-border bg-card p-6 h-full hover:border-primary/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display">Practical Application</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Moving past rote memorization to teach students how to actively use and
                problem-solve with what they learn.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="rounded-3xl border border-border bg-card p-6 h-full hover:border-primary/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display">Heart & Conscience</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Focusing on character development, teaching children to listen to their conscience
                and act with integrity.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              True education is an awakening. As Socrates said,{" "}
              <strong>"Education is the kindling of a flame, not the filling of a vessel."</strong>{" "}
              We turn mirrors into windows, giving children open minds and clear views of the world.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We educate children to be happy, well-rounded individuals who understand the
              invaluable value of things, not just their price tag.
            </p>
            <div className="mt-6 p-5 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-lg font-display leading-relaxed">
                "A whole-child makes a whole-adult. A whole-adult is a balanced person –
                academically, socially and spiritually."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                — Theo Turatsinze, Director, Excella School
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EDUCATIONAL VISION */}
      <section className="bg-ink text-ink-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="relative container-px mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold text-center">
              Our Educational Vision
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance text-center max-w-4xl mx-auto">
              Scanning the Future
            </h2>
            <p className="mt-6 text-lg text-ink-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
              We look past the classroom walls and ask: What kind of human beings will our students
              become? How will they stand out? At Excella School, our vision is the answer to those
              questions.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-10">
              <h3 className="text-2xl font-display text-center">The Excella Graduate</h3>
              <p className="mt-4 text-ink-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
                We nurture children to grow into creative, independent-minded adults who
                productively participate in their communities—whether in Rwanda or across the globe.
              </p>
              <div className="mt-6 p-5 bg-white/5 rounded-2xl">
                <p className="text-lg font-display leading-relaxed text-center">
                  "Education is that which remains when almost all you have learnt in school is long
                  forgotten."
                </p>
                <p className="mt-2 text-sm text-ink-foreground/70 text-center">— Albert Einstein</p>
              </div>
              <p className="mt-4 text-ink-foreground/80 leading-relaxed">
                Decades from now, students might forget specific dates or complex equations. But
                they will never forget the core values woven into those lessons:
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-display text-primary mb-1">1</div>
                  <h4 className="font-semibold mb-1 text-sm">The Character of Our Educators</h4>
                  <p className="text-xs text-ink-foreground/70">
                    Students remember the humility, care, and discipline modeled by passionate
                    teachers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-primary mb-1">2</div>
                  <h4 className="font-semibold mb-1 text-sm">The Impact of Leadership</h4>
                  <p className="text-xs text-ink-foreground/70">
                    They remember the strict but kind guidance of a Headmaster who believed in them.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-primary mb-1">3</div>
                  <h4 className="font-semibold mb-1 text-sm">The Lasting Impression</h4>
                  <p className="text-xs text-ink-foreground/70">
                    They carry forward life skills, resilience, and moral grounding experienced
                    firsthand.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATIONAL MISSION */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Our Educational Mission
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
              In Pursuit of Balanced Education
            </h2>
            <div className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-lg font-display leading-relaxed italic">
                "To stimulate life, leaving it free to unfold itself is the first duty of the
                educator."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">— Dr. Maria Montessori</p>
            </div>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Like RwandAir takes you places, Excella School elevates students. We inspire children
              to feel good, think big, dream big, and achieve BIG!
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <h3 className="text-2xl font-display text-center">An Atmosphere for Growth</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              We design learning spaces that promote personal freedom and build confidence to
              explore, question, and experiment, nurturing each student's unique talents.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-3">Academic Mindset</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As Einstein said,{" "}
                  <strong>
                    "Education is not the learning of facts, but rather the training of the mind to
                    think."
                  </strong>{" "}
                  We challenge students to think critically.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-3">Social & Emotional Character</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Reflecting Aristotle's truth—
                  <strong>
                    "Educating the mind without educating the heart is no education at all"
                  </strong>
                  —we value emotional intelligence and community.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h4 className="text-xl font-display mb-2">Our School Motto</h4>
              <p className="text-lg text-primary font-semibold">
                "In Pursuit of Balanced Education"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Social and academic development are equal and complementary.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <h3 className="text-2xl font-display text-center mb-6">Education is Life Itself</h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
              As John Dewey stated,{" "}
              <strong>"Education is not preparation for life; education is life itself."</strong> We
              change how students view the world.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-base font-display mb-1">Beyond Counting</p>
                <p className="text-xs text-muted-foreground">
                  Teaching kids what counts, not just how to count.
                </p>
              </div>
              <div>
                <p className="text-base font-display mb-1">From Mirrors to Windows</p>
                <p className="text-xs text-muted-foreground">
                  Transforming closed minds into open windows of opportunity.
                </p>
              </div>
              <div>
                <p className="text-base font-display mb-1">Igniting a Spark</p>
                <p className="text-xs text-muted-foreground">
                  Inspiring minds, not just filling them with data.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TEACHING & LEARNING METHODOLOGIES */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Teaching & Learning Methodologies
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
              Learning by Doing
            </h2>
            <div className="mt-4 p-5 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-lg font-display leading-relaxed italic">
                "Teaching is only demonstrating that it is possible. Learning is making it possible
                for yourself."
              </p>
              <p className="mt-1 text-sm text-muted-foreground">— Paulo Coelho</p>
            </div>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our teaching methodologies are entirely child-centered. We design environments where
              students actively construct understanding through immersive, active experiences.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <h3 className="text-2xl font-display text-center mb-6">
              Hands-On, Sustainable Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">
              We equip children with hands-on experiences that develop sustainable educational
              skills for a lifetime.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3">
                  <Brain className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-display mb-2">Experiential Learning</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Students experiment, test theories, and see tangible results firsthand.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-display mb-2">Active Science & Discovery</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Students see equations in motion through practical application in chemistry,
                  physics, and beyond.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* LIFESKILLS & CHARACTER */}
      <section className="bg-ink text-ink-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="relative container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                Lifeskills, Active Engagement, & Character Nourishment
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
                Learning by Doing
              </h2>
              <div className="mt-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-lg font-display leading-relaxed italic">
                  "When I hear, I forget; when I see, I remember; But, when I do, I understand!"
                </p>
                <p className="mt-1 text-sm text-ink-foreground/70">— Ancient Educational Wisdom</p>
              </div>
              <p className="mt-4 text-ink-foreground/80 leading-relaxed">
                Children don't come empty-headed. They arrive with unique gifts and knowledge from
                their world. Our job is not to fill an empty vessel, but to engage what's already
                there. True understanding happens when a child actively owns the learning process.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-10">
              <h3 className="text-2xl font-display text-center mb-6">
                The Pillars of Lifeskills & Interaction
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-display mb-3 text-primary">
                    Real-World Experiential Learning
                  </h4>
                  <p className="text-ink-foreground/80 leading-relaxed mb-3">
                    Guided by Dr. Maria Montessori's wisdom:
                  </p>
                  <ul className="space-y-2 text-sm text-ink-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Active Retention:</strong> "What the hand does, the mind remembers."
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Fostering Autonomy:</strong> "Never help a child with a task at
                        which he feels he can succeed."
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Instruments of Intelligence:</strong> Hands are primary instruments
                        of human intelligence.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-display mb-3 text-primary">
                    Intellectual & Character Feeding
                  </h4>
                  <p className="text-ink-foreground/80 leading-relaxed mb-3">
                    Students process deep concepts rather than memorize answers:
                  </p>
                  <ul className="space-y-2 text-sm text-ink-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Feeding the Brain:</strong> Deliberately feed minds through reading,
                        wise counsel, and critical observation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Mind Gardening:</strong> "Your mind is a garden. Your thoughts are
                        the seeds."
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Sowing and Reaping:</strong> "As you have sown, so shall you reap."
                        — Cicero
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="text-center p-5 bg-white/5 rounded-2xl">
                  <h4 className="text-lg font-display mb-2 text-primary">Humility</h4>
                  <p className="text-xs text-ink-foreground/80">
                    Beauty, riches, and intelligence are gifts from God—not for boasting. True
                    excellence means staying humble and giving glory to God.
                  </p>
                </div>
                <div className="text-center p-5 bg-white/5 rounded-2xl">
                  <h4 className="text-lg font-display mb-2 text-primary">Respect</h4>
                  <p className="text-xs text-ink-foreground/80">
                    Treat every human being with absolute fairness—exactly as you want to be
                    treated.
                  </p>
                </div>
                <div className="text-center p-5 bg-white/5 rounded-2xl">
                  <h4 className="text-lg font-display mb-2 text-primary">Wisdom</h4>
                  <p className="text-xs text-ink-foreground/80">
                    Saying and doing the right thing opens paths for your life to prosper.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ASSESSMENT & EVALUATION */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Educational Assessment & Evaluation
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
              Measuring What Matters
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We measure growth intentionally to ensure every milestone is realized, using robust
              systems that go beyond traditional test scores.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <h3 className="text-2xl font-display text-center mb-6">Assessment Methodologies</h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
              Our evaluation framework measures true progress toward long-term goals through valid,
              accurate, and reliable methodologies.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-2">Intellectual & Academic Milestones</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Evaluating technical understanding, problem-solving, and critical thinking.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-2">Lifeskills & Application Progress</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Measuring how students apply theoretical knowledge practically outside the
                  classroom.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-2">Character & Social Growth</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tracking development of humility, fairness, respect, and collaborative leadership.
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 bg-primary/5 rounded-2xl border border-primary/20">
              <p className="text-base font-display leading-relaxed text-center">
                "Progress is impossible without change, and those who cannot change their minds
                cannot change anything."
              </p>
              <p className="mt-1 text-xs text-muted-foreground text-center">
                — Excella School Assessment Philosophy
              </p>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Assessment serves as a continuous compass—providing transparent data to help
                educators, parents, and students work together to achieve full potential.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <h3 className="text-2xl font-display text-center mb-6">The Holistic Approach</h3>

            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-4">
              Breaking Free from Old Traditions
            </p>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
              We break free from using exam grades as the only yardstick. True growth cannot be
              captured by a single test score. We employ a comprehensive holistic approach
              evaluating teaching quality, academic achievement, pastoral care, and daily standards
              of hygiene and safety.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-3 text-primary">
                  A Supportive Evaluation System
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-1 text-sm">✓ No Class Public Rankings</h5>
                    <p className="text-xs text-muted-foreground">
                      We don't publish public "Class Lists" ranking students. Publicly broadcasting
                      who outshone whom can be traumatizing.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 text-sm">✓ Scientific, Individual Grading</h5>
                    <p className="text-xs text-muted-foreground">
                      We show exact grades on a 0%–100% scale, centering focus on individual mastery
                      rather than comparison.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5">
                <h4 className="text-lg font-display mb-3 text-primary">Our Evaluation Wisdom</h4>
                <p className="text-xs text-muted-foreground mb-2">Children Learn What They Live</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Guided by Dorothy Law Nolte's wisdom, we understand how evaluation shapes who
                  students become:
                </p>
                <div className="space-y-1 text-xs">
                  <p className="text-ink-foreground/70">
                    If children live with criticism, they learn to condemn.
                  </p>
                  <p className="text-ink-foreground/70">
                    If children live with encouragement, they learn confidence.
                  </p>
                  <p className="text-ink-foreground/70">
                    If children live with fairness, they learn justice.
                  </p>
                  <p className="text-ink-foreground/70">
                    If children live with acceptance, they find love.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-primary/5 rounded-2xl border border-primary/20 text-center">
              <p className="text-base font-display leading-relaxed">
                Positive energy is what every student deserves. We encourage students to strive and
                do their best—replacing the outdated practice of using low grades to intimidate.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
