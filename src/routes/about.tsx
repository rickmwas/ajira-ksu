import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ajira Digital Club, Kisii University" },
      { name: "description", content: "Learn about the Ajira Digital Club at Kisii University — our mission, vision, and student leadership." },
    ],
  }),
  component: About,
});

const team = [
  { role: "Patron",                      name: "Dr. Teresa Abuya" },
  { role: "Chairperson",                 name: "Onyango Michael" },
  { role: "Vice Chairperson",            name: "Emmanuel Ojiambo" },
  { role: "Secretary General",           name: "Denis Kiplagat" },
  { role: "Partnerships & Outreach",     name: "Erik Mwangi" },
  { role: "Publicity Secretary",         name: "Alex Chomba" },
  { role: "Events Organizer",            name: "Kyalo Benson" },
  { role: "Membership & Engagement",     name: "Earnest Kethi" },
  { role: "Treasurer",                   name: "Ann Muchiri" },
  { role: "Trainer of Trainees",         name: "Evelyne Njambi" },
];

function initials(name: string) {
  return name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
}

function About() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-32 pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-red block mb-5">About the club</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-2xl leading-[1.06]">
              A student-led digital community at Kisii University.
            </h1>
            <p className="mt-6 max-w-xl text-white/60 leading-relaxed text-base">
              Ajira Digital Club is a community of curious, ambitious students equipping themselves
              with future-ready digital skills, connecting to online work opportunities, and
              fostering entrepreneurship and innovation across campus and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BACKGROUND STRIP ──────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container-x py-10">
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground mb-1">Founded</div>
                <div>2020, under Kenya's Ajira Digital Programme</div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Affiliation</div>
                <div>Ministry of ICT, Innovation & Youth Affairs</div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Campus</div>
                <div>Kisii University, Main Campus, Kisii County</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────── */}
      <section className="container-x py-24">
        <Reveal>
          <span className="overline block mb-6">Purpose</span>
        </Reveal>
        <div className="grid gap-px bg-border border border-border md:grid-cols-2">
          {[
            {
              I: Target,
              t: "Our Mission",
              d: "Empower students with practical digital skills and access to opportunities in the digital economy — building careers, not just certificates.",
            },
            {
              I: Eye,
              t: "Our Vision",
              d: "Build a thriving community of digitally empowered students who create impact through technology and innovation, both locally and globally.",
            },
          ].map((b) => (
            <Reveal key={b.t}>
              <div className="bg-white p-8 sm:p-10 h-full hover:bg-surface transition-colors">
                <div className="grid h-10 w-10 place-items-center bg-brand-red text-white mb-6">
                  <b.I size={18} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{b.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border pb-24">
        <div className="container-x pt-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="overline block mb-3">Leadership</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold">The team behind the movement.</h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Elected by members, accountable to the club.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 50}>
                <div className="bg-white border border-border p-5 flex items-center gap-4 hover:border-brand-red/30 transition-colors group">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-black text-white text-sm font-bold font-display">
                    {initials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm leading-snug truncate">{m.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wide">{m.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
