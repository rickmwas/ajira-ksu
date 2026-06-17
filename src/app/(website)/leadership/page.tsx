import type { Metadata } from "next";
import { Users, Mail, Award, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Leadership — Ajira Digital Club, Kisii University",
  description: "Meet the executive council and advisory board members of Ajira Digital Club at Kisii University.",
};

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

export default function Leadership() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">Governing Board</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Meet our chapter leaders.
            </h1>
            <p className="mt-5 max-w-xl text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              Elected executives and ICT department mentors who coordinate our weekly biddings and training labs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LEADERSHIP GRID ────────────────────────────────── */}
      <section className="container-x py-14 sm:py-20 font-sans">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="overline block mb-3 font-mono">Executive Council</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Governing Committee</h2>
            </div>
            <p className="text-[10px] font-mono text-muted-foreground sm:max-w-[180px] sm:text-right uppercase tracking-wider">
              Elected chapter leaders accountable to the student cohort.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 30}>
              <div className="bg-white border border-border p-5 flex items-center gap-4 hover:border-brand-blue/25 hover:shadow-md transition-all rounded-sm relative group">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-brand-black text-white text-sm font-bold font-display">
                  {initials(m.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm leading-snug group-hover:text-brand-blue transition-colors">
                    {m.name}
                  </h3>
                  <div className="text-[9px] text-muted-foreground mt-0.5 font-mono uppercase tracking-wider truncate">
                    {m.role}
                  </div>
                  <div className="text-[8px] text-brand-green/80 mt-1 font-semibold font-mono tracking-wider truncate">
                    {m.focus.toUpperCase()}
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
