import type { Metadata } from "next";
import { Users, Mail, Award, ShieldCheck, Linkedin, Twitter, Github, GraduationCap, Building2 } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";

export const metadata: Metadata = {
  title: "Executive Leadership — Ajira Digital Club, Kisii University",
  description: "Meet the executive council, track leaders, and patron of Ajira Digital Club at Kisii University Main Campus.",
};

const patron = {
  role: "Club Patron & Academic Mentor",
  name: "Dr. Teresa Abuya",
  department: "Department of Computer Science & IT, Kisii University",
  bio: "Oversees ICT lab infrastructure, government partnership compliance, and academic integration for Ajira Digital cohorts at Kisii University Main Campus.",
  focus: "Institutional Governance & Advisory",
};

const executiveCouncil = [
  {
    role: "Club President / Chairperson",
    name: "Onyango Michael",
    department: "BSc Computer Science '25",
    bio: "Leads weekly Upwork bidding clinics, oversees track leads, and coordinates digital gig placements for KSU student cohorts.",
    focus: "Full-Stack Web Dev & Upwork Coach",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    github: "https://github.com",
  },
  {
    role: "Vice Chairperson & Training Lead",
    name: "Emmanuel Ojiambo",
    department: "BSc Software Engineering '25",
    bio: "Coordinates lab schedule in ICT Lab 2, oversees virtual assistant training modules, and manages student progress badges.",
    focus: "Data Entry & VA Instructor",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  {
    role: "Secretary General",
    name: "Denis Kiplagat",
    department: "B.Ed Languages & Linguistics '26",
    bio: "Manages member registration rosters, leads the Swahili audio transcription lab, and coordinates certification exams.",
    focus: "Swahili Audio Transcription Lead",
    linkedin: "https://linkedin.com",
  },
  {
    role: "Partnerships & Client Outreach",
    name: "Erik Mwangi",
    department: "BSc Applied Statistics '25",
    bio: "Connects local business clients with KSU Ajira freelancing talent and guides members through Fiverr profile optimization.",
    focus: "Fiverr Onboarding & Escrow Coach",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  {
    role: "Publicity & Brand Lead",
    name: "Alex Chomba",
    department: "BSc Information Technology '26",
    bio: "Manages campus social media channels, designs event graphics, and leads the SEO copywriting track.",
    focus: "SEO Copywriting & Graphic Design",
    twitter: "https://x.com",
  },
  {
    role: "Trainer of Trainees (ToT)",
    name: "Evelyne Njambi",
    department: "BSc Computer Security & Forensics '25",
    bio: "Certified eMobilis/Ajira Master Trainer overseeing AI data labelling workshops and machine learning annotation tasks.",
    focus: "AI Annotation & NLP Certified Tutor",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
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
      <section className="bg-[#0B192C] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-x relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FFB800]">
                EXECUTIVE COUNCIL · KISII UNIVERSITY
              </span>
            </div>
            <h1 className="font-display text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-6xl font-extrabold max-w-3xl">
              Meet our chapter leaders.
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              Elected student executives, certified trainers, and ICT department patrons dedicated to driving digital skills acquisition and online work opportunities at Kisii University.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CLUB PATRON SECTION ───────────────────────────── */}
      <section className="bg-[#FAFAFA] border-b border-border py-14 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-card max-w-4xl border-l-4 border-l-[#7A0000] flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-sm bg-[#0B192C] text-[#FFB800] text-xl font-bold font-display shadow-md">
                {initials(patron.name)}
              </div>

              <div>
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#7A0000] bg-[#7A0000]/10 px-2.5 py-0.5 rounded-sm mb-1.5">
                  {patron.role}
                </span>
                <h2 className="font-display text-2xl font-bold text-ink mb-1">{patron.name}</h2>
                <div className="text-xs text-slate-500 font-mono font-semibold mb-3 flex items-center gap-1.5">
                  <Building2 size={13} className="text-[#0056A6]" /> {patron.department}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {patron.bio}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EXECUTIVE COUNCIL GRID ────────────────────────── */}
      <section className="container-x py-16 sm:py-24 font-sans">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0056A6] block mb-2">
                PEER LEADERSHIP
              </span>
              <h2 className="font-display text-3xl font-extrabold text-ink">Elected Executive Council</h2>
            </div>
            <p className="text-xs font-mono text-slate-500 sm:max-w-[240px] sm:text-right uppercase tracking-wider">
              Student leaders accountable to the Kisii University cohort.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executiveCouncil.map((m, i) => (
            <Reveal key={m.name} delay={i * 40}>
              <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0056A6]/40 hover:shadow-lg transition-all rounded-sm h-full group">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-[#0B192C] text-[#FFB800] text-sm font-bold font-display shadow-sm">
                      {initials(m.name)}
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#0056A6] bg-[#0056A6]/10 px-2 py-0.5 rounded-sm">
                      {m.focus}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base leading-snug group-hover:text-[#0056A6] transition-colors mb-1">
                    {m.name}
                  </h3>

                  <div className="text-[10px] text-[#7A0000] font-mono uppercase tracking-wider font-bold mb-2">
                    {m.role}
                  </div>

                  <div className="text-xs text-slate-500 font-mono mb-4 flex items-center gap-1">
                    <GraduationCap size={13} className="text-slate-400" /> {m.department}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {m.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-400">
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0056A6] transition-colors" aria-label="LinkedIn Profile">
                      <Linkedin size={15} />
                    </a>
                  )}
                  {m.twitter && (
                    <a href={m.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#0056A6] transition-colors" aria-label="Twitter/X Profile">
                      <Twitter size={15} />
                    </a>
                  )}
                  {m.github && (
                    <a href={m.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#0056A6] transition-colors" aria-label="GitHub Profile">
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
