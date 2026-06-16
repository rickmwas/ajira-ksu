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
  { role: "Patron",                  name: "Dr. Teresa Abuya" },
  { role: "Chairperson",             name: "Onyango Michael" },
  { role: "Vice Chairperson",        name: "Emmanuel Ojiambo" },
  { role: "Secretary General",       name: "Denis Kiplagat" },
  { role: "Partnerships & Outreach", name: "Erik Mwangi" },
  { role: "Publicity Secretary",     name: "Alex Chomba" },
  { role: "Events Organizer",        name: "Kyalo Benson" },
  { role: "Membership & Engagement", name: "Earnest Kethi" },
  { role: "Treasurer",               name: "Ann Muchiri" },
  { role: "Trainer of Trainees",     name: "Evelyne Njambi" },
];

function initials(name: string) {
  return name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase();
}

function About() {
  return (
    <>
      {/* ── PAGE HEADER ────────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-[88px] pb-20">
        <div className="container-x pt-12">
          <Reveal>
            <span className="overline text-brand-red mb-5">About the club</span>
            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-6xl font-normal max-w-2xl leading-[1.06] text-white mt-4">
              A student-led digital community at Kisii University.
            </h1>
            <p className="mt-7 max-w-xl text-white/55 leading-relaxed text-base font-light">
              Ajira Digital Club is a community of curious, ambitious students equipping themselves
              with future-ready digital skills, connecting to online work opportunities, and
              fostering entrepreneurship and innovation across campus and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BACKGROUND STRIP ──────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-10">
          <Reveal>
            <div className="grid sm:grid-cols-3 gap-10 text-sm">
              <div>
                <div className="font-display font-semibold text-foreground mb-1.5">Founded</div>
                <div className="text-muted-foreground">2020, under Kenya's Ajira Digital Programme</div>
              </div>
              <div>
                <div className="font-display font-semibold text-foreground mb-1.5">Affiliation</div>
                <div className="text-muted-foreground">Ministry of ICT, Innovation & Youth Affairs</div>
              </div>
              <div>
                <div className="font-display font-semibold text-foreground mb-1.5">Campus</div>
                <div className="text-muted-foreground">Kisii University, Main Campus, Kisii County</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────── */}
      <section className="container-x py-24 sm:py-28">
        <Reveal>
          <span className="overline mb-8">Purpose</span>
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
              <div className="bg-white p-8 sm:p-10 h-full hover:bg-surface transition-colors group">
                <div className="grid h-10 w-10 place-items-center bg-brand-red text-white mb-7">
                  <b.I size={17} />
                </div>
                <h3 className="font-serif text-2xl font-normal mb-3 text-ink">{b.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── VALUES STRIP ──────────────────────────────────── */}
      <section className="bg-brand-black border-y border-white/10">
        <div className="container-x py-14">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { v: "Practical", d: "We build real things, not just knowledge." },
                { v: "Inclusive",  d: "Open to every student, every faculty." },
                { v: "Ambitious",  d: "We aim high, for Kenya and beyond." },
                { v: "Accountable",d: "Student-led, transparent, and elected." },
              ].map((val) => (
                <div key={val.v}>
                  <div className="font-serif text-xl text-brand-red mb-2 italic">{val.v}</div>
                  <p className="text-xs text-white/50 leading-relaxed font-display">{val.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────── */}
      <section className="bg-surface border-b border-border">
        <div className="container-x py-24 sm:py-28">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="overline mb-4">Leadership</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-4">
                  The team behind the movement.
                </h2>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs font-display">
                Elected by members, accountable to the club.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 45}>
                <div className="bg-white border border-border p-5 flex items-center gap-4 hover:border-brand-red/25 transition-colors group">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-black text-white text-[11px] font-bold font-display">
                    {initials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm leading-snug truncate">{m.name}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-[0.12em] font-display">{m.role}</div>
                  </div>
                  {/* Red left accent on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
