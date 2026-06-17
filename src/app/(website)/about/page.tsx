import type { Metadata } from "next";
import { Target, Eye, Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About — Ajira Digital Club, Kisii University",
  description:
    "Learn about the Ajira Digital Club at Kisii University — our mission, vision, and student leadership council.",
};

const milestones = [
  {
    year: "2020",
    title: "Chapter Charter",
    desc: "Established at Kisii University under the national Ajira Digital Programme initiative to create digital work awareness on campus.",
  },
  {
    year: "2022",
    title: "Transcription Lab Install",
    desc: "Set up dedicated audio listening and typing hardware assets in ICT Lab 2, facilitating hands-on transcription practices.",
  },
  {
    year: "2024",
    title: "Ministry Certification Drive",
    desc: "Certified over 400 students in virtual assistance, content creation, and copywriting tracks in coordination with ICT Authority trainers.",
  },
  {
    year: "2026",
    title: "Local Digitization Sprints",
    desc: "Connected student data entry cohorts with local SACCOs and county hubs to digitize regional records and micro-credit logs.",
  },
];

const team = [
  { role: "Club Patron", name: "Dr. Teresa Abuya", focus: "Academic Advisor & Mentor" },
  { role: "Chairperson", name: "Onyango Michael", focus: "Upwork & Profile Coach" },
  { role: "Vice Chairperson", name: "Emmanuel Ojiambo", focus: "Data Entry & VA Instructor" },
  { role: "Secretary General", name: "Denis Kiplagat", focus: "Transcription Lab Lead" },
  { role: "Partnerships & Outreach", name: "Erik Mwangi", focus: "Fiverr Onboarding Coach" },
  { role: "Publicity Secretary", name: "Alex Chomba", focus: "SEO Copywriter & Designer" },
  { role: "Events Organizer", name: "Kyalo Benson", focus: "Workshop Coordinator" },
  { role: "Membership & Engagement", name: "Earnest Kethi", focus: "Onboarding Coordinator" },
  { role: "Treasurer", name: "Ann Muchiri", focus: "Escrow & Milestone Advisor" },
  { role: "Trainer of Trainees", name: "Evelyne Njambi", focus: "ICT Certified Tutor" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function About() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">Our History</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Fostering online work readiness.
            </h1>
            <p className="mt-5 max-w-xl text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              The Ajira Digital Club at Kisii University is a student-led mentorship community. We guide peers to set up
              online profiles, pass transcription exams, and manage data tasks.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── QUICK CAMPUS FACTS ──────────────────────────────── */}
      <section className="border-b border-border bg-surface">
        <div className="container-x py-8 sm:py-10">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-xs font-mono">
              {[
                { label: "Founded", value: "2020, KSU Chapter Initiative" },
                { label: "Sponsorship", value: "Ministry of Information & ICT, Kenya" },
                { label: "Main Labs", value: "ICT Lab 1 & 2, Kisii University" },
              ].map((f) => (
                <div key={f.label} className="border-l border-brand-blue/40 pl-4">
                  <div className="font-semibold text-muted-foreground mb-1 uppercase tracking-wider">{f.label}</div>
                  <div className="text-foreground font-bold">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PERSPECTIVES: PATRON'S ADDRESS ─────────────────── */}
      <section className="container-x py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-2 space-y-4">
          <Reveal>
            <span className="overline block mb-2 font-mono">Leadership Message</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
              A Message From Our Patron.
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Academic credentials get you in the door, but the gig economy relies on practical execution. We help
              students earn decent livelihoods through certified online skills training.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-3">
          <Reveal delay={40}>
            <div className="bg-brand-black text-white p-6 sm:p-8 rounded-sm relative border border-white/5 shadow-card">
              <span className="absolute top-4 left-4 text-white/5">
                <Quote size={60} className="stroke-[1]" />
              </span>
              <p className="text-xs sm:text-sm italic text-white/90 leading-relaxed relative z-10">
                "Kenya's digital economy holds immense potential. By coordinating structured peer labs for
                transcription, data entry, and virtual assistance, Kisii University students gain the direct practical
                ability to earn online income."
              </p>
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-3 relative z-10">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-blue text-white text-xs font-bold font-display">
                  TA
                </div>
                <div>
                  <div className="font-display font-bold text-xs">Dr. Teresa Abuya</div>
                  <div className="text-[9px] uppercase tracking-wider text-brand-gold font-mono mt-0.5">
                    Club Patron & Senior Lecturer, ICT Dept
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MILESTONE TIMELINE ────────────────────────────── */}
      <section className="bg-surface border-t border-b border-border py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-md mx-auto mb-16">
              <span className="overline block mb-3 font-mono">Milestones</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Our Growth Legacy</h2>
              <p className="text-xs text-muted-foreground mt-2">
                A timeline of how our club expanded online work competencies on campus.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto border-l border-border pl-6 sm:pl-8 space-y-10">
            {milestones.map((m, idx) => (
              <Reveal key={m.year} delay={idx * 50}>
                <div className="relative">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-blue" />

                  <div className="bg-white border border-border p-5 rounded-sm shadow-card hover:border-brand-blue/15 transition-colors">
                    <span className="font-mono text-xs font-bold text-brand-blue">{m.year}</span>
                    <h3 className="font-display font-bold text-sm text-ink mt-0.5">{m.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────── */}
      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <span className="overline block mb-5 font-mono">Core Values</span>
        </Reveal>
        <div className="grid gap-px bg-border border border-border grid-cols-1 md:grid-cols-2">
          {[
            {
              I: Target,
              t: "Our Mission",
              d: "To foster digital work inclusion by equipping Kisii University students with certified online competencies, enabling them to find gig contracts and drive microtasks successfully.",
            },
            {
              I: Eye,
              t: "Our Vision",
              d: "To operate as a leading campus freelancing hub, providing vetted data entry, audio translation, content writing, and web layout support to local and global industries.",
            },
          ].map((b) => (
            <Reveal key={b.t} className="h-full">
              <div className="bg-white p-8 sm:p-10 h-full hover:bg-surface transition-colors flex flex-col justify-between">
                <div>
                  <div className="grid h-10 w-10 place-items-center bg-brand-blue text-white mb-6 rounded-sm">
                    <b.I size={16} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-3 text-ink">{b.t}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">{b.d}</p>
                </div>
                <div className="mt-6 border-t border-border pt-4 text-[9px] font-mono text-muted-foreground uppercase">
                  AJIRA DIGITAL CLUB COHORT CORE
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── EXECUTIVE COUNCIL DIRECTORY ────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-x py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <span className="overline block mb-3 font-mono">Executive Council</span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink">
                  Advisory & Student Board.
                </h2>
              </div>
              <p className="text-[10px] font-mono text-muted-foreground sm:max-w-[180px] sm:text-right uppercase tracking-wider">
                Elected chapter leaders accountable to the student cohort.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 30}>
                <div className="bg-white border border-border p-4.5 flex items-center gap-3.5 hover:border-brand-blue/25 hover:shadow-sm transition-all rounded-sm relative group">
                  <div className="grid h-10 w-10 shrink-0 place-items-center bg-brand-black text-white text-xs font-bold font-display">
                    {initials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-xs leading-snug group-hover:text-brand-blue transition-colors">
                      {m.name}
                    </div>
                    <div className="text-[9px] text-muted-foreground mt-0.5 font-mono uppercase tracking-wider truncate">
                      {m.role}
                    </div>
                    <div className="text-[8px] text-brand-green/80 mt-0.5 font-semibold font-mono tracking-wider truncate">
                      {m.focus.toUpperCase()}
                    </div>
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
