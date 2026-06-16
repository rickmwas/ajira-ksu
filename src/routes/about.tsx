import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ajira Digital Club, Kisii University" },
      { name: "description", content: "Learn about the Ajira Digital Club at Kisii University — our mission, vision, and student leadership." },
      { property: "og:title", content: "About — Ajira Digital Club" },
      { property: "og:description", content: "Mission, vision, and the team leading the digital movement at Kisii University." },
    ],
  }),
  component: About,
});

const team = [
  { role: "Patron", name: "Dr. Teresa Abuya" },
  { role: "Chairperson", name: "Onyango Michael" },
  { role: "Vice Chairperson", name: "Emmanuel Ojiambo" },
  { role: "Secretary General", name: "Denis Kiplagat" },
  { role: "Partnerships & Outreach Lead", name: "Erik Mwangi" },
  { role: "Publicity Secretary", name: "Alex Chomba" },
  { role: "Events Organizer", name: "Kyalo Benson" },
  { role: "Membership & Engagement Lead", name: "Earnest Kethi" },
  { role: "Treasurer", name: "Ann Muchiri" },
  { role: "Trainer of Trainees", name: "Evelyne Njambi" },
];

function initials(name: string) {
  return name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
}

function About() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-black text-white pt-36 pb-24">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-red/25 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">About us</div>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl leading-[1.05]">
              A student-led digital community at Kisii University.
            </h1>
            <p className="mt-6 max-w-2xl text-white/75 leading-relaxed">
              Ajira Digital Club is a community of curious, ambitious students equipping themselves
              with future-ready digital skills, connecting to online work opportunities, and
              fostering entrepreneurship and innovation across campus and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="container-x py-24 grid gap-6 md:grid-cols-2">
        {[
          { I: Target, t: "Our Mission", d: "Empower students with practical digital skills and access to opportunities in the digital economy." },
          { I: Eye, t: "Our Vision", d: "Build a thriving community of digitally empowered students who create impact through technology and innovation." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i * 100}>
            <div className="relative h-full overflow-hidden rounded-2xl border bg-card p-8 lift lift-hover">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-brand opacity-10 blur-2xl" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elevated">
                <b.I size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{b.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Team */}
      <section className="container-x pb-24 sm:pb-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Leadership</div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">The team behind the movement.</h2>
            </div>
            <div className="text-sm text-muted-foreground inline-flex items-center gap-2">
              <Sparkles size={14} className="text-brand-green" /> Elected by members, accountable to the club.
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
              <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 lift lift-hover">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-70" />
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white font-bold shadow-elevated">
                    {initials(m.name)}
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold leading-tight">{m.name}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{m.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
