import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import campus from "@/assets/ExcellaGallery/excella-campus.jpeg";

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you."
        subtitle="Reach our team by phone, email, or WhatsApp — or visit our Kigali campus."
        image={campus}
      />

      <section className="container-px mx-auto max-w-7xl py-24 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5 space-y-4">
          {[
            { icon: MapPin, t: "Campus", d: "Kigali, Rwanda" },
            { icon: Phone, t: "Phone", d: "+250 788 000 000", href: "tel:+250788000000" },
            {
              icon: MessageCircle,
              t: "WhatsApp",
              d: "Message admissions",
              href: "https://wa.me/250788000000",
            },
            {
              icon: Mail,
              t: "Email",
              d: "admissions@excella.school",
              href: "mailto:admissions@excella.school",
            },
            { icon: Clock, t: "School hours", d: "Mon–Fri · 7:30 – 16:30" },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href ?? "#"}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{c.t}</p>
                <p className="mt-1 font-medium">{c.d}</p>
              </div>
            </a>
          ))}
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-display">Send us a message</h3>
            <p className="mt-2 text-muted-foreground text-sm">Choose your preferred way to connect with us.</p>
            <form
              className="mt-8 grid sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message received — thank you.");
              }}
            >
              <input className="input" placeholder="Your name" required />
              <input type="email" className="input" placeholder="Email" required />
              <input className="input sm:col-span-2" placeholder="Subject" />
              <textarea
                rows={5}
                className="input sm:col-span-2"
                placeholder="Your message"
                required
              />
              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition">
                  Send via Email
                </button>
                <a
                  href="https://wa.me/250788000000?text=Hi%20Excella!%20I'd%20like%20to%20inquire%20about%20your%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold hover:bg-accent transition"
                >
                  <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </Reveal>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-border aspect-21/9">
            <iframe
              title="Excella School location"
              src="https://www.google.com/maps?q=Excella%20School&output=embed"
              className="w-full h-full"
            />
          </div>
        </Reveal>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
        }
        .input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 15%, transparent); }
      `}</style>
    </>
  );
}
