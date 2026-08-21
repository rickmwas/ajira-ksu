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
      <section className="bg-[#0B192C] text-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-amber-400 block mb-3 font-display">Executive Council</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold max-w-3xl tracking-tight">
              Meet our chapter leaders.
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300 leading-relaxed text-base sm:text-lg">
              Elected student executives, certified trainers, and ICT department patrons dedicated to driving digital skills acquisition and online work opportunities at Kisii University.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CLUB PATRON SECTION ───────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-card max-w-4xl border-l-4 border-l-[#7A0000] flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-[#0B192C] text-amber-400 text-xl font-bold font-display shadow-md">
                {initials(patron.name)}
              </div>

              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-ksu-maroon bg-rose-50 px-3 py-1 rounded-md mb-2">
                  {patron.role}
                </span>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">{patron.name}</h2>
                <div className="text-xs text-slate-500 font-medium mb-3 flex items-center gap-1.5">
                  <Building2 size={14} className="text-brand-blue" /> {patron.department}
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
      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="overline block mb-2 font-display">Peer Leadership</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">Elected Executive Council</h2>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Student leaders accountable to the Kisii University cohort.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executiveCouncil.map((m, i) => (
            <Reveal key={m.name} delay={i * 40}>
              <div className="bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all rounded-xl h-full group">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#0B192C] text-amber-400 text-sm font-bold font-display shadow-sm">
                      {initials(m.name)}
                    </div>
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
                      {m.focus}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg leading-snug group-hover:text-brand-blue transition-colors mb-1 text-slate-900">
                    {m.name}
                  </h3>

                  <div className="text-xs text-ksu-maroon font-bold mb-2">
                    {m.role}
                  </div>

                  <div className="text-xs text-slate-500 mb-4 flex items-center gap-1.5 font-medium">
                    <GraduationCap size={14} className="text-slate-400" /> {m.department}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {m.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-400">
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors" aria-label="LinkedIn Profile">
                      <Linkedin size={16} />
                    </a>
                  )}
                  {m.twitter && (
                    <a href={m.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors" aria-label="Twitter/X Profile">
                      <Twitter size={16} />
                    </a>
                  )}
                  {m.github && (
                    <a href={m.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors" aria-label="GitHub Profile">
                      <Github size={16} />
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

