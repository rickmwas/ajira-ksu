import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Quote, Award, BookOpen, Users } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import heroNetworkBg from "@ajira/shared/assets/hero_digital_network.jpg";

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
      <section className="relative bg-[#0B192C] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        {/* Subtle high-tech background image overlay */}
        <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-luminosity">
          <Image
            src={heroNetworkBg}
            alt="Digital Network Overlay"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="container-x relative z-10">
          <Reveal>
            <span className="overline text-amber-400 block mb-3 font-display">Chapter History</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold max-w-2xl tracking-tight">
              Fostering online work readiness at Kisii University.
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 leading-relaxed text-base sm:text-lg">
              The Ajira Digital Club at Kisii University is a student-led mentorship community guiding peers to acquire certified digital skills, build portfolios, and earn sustainable income.
            </p>
          </Reveal>
        </div>
      </section>


      {/* ── QUICK CAMPUS FACTS ──────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container-x py-8">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {[
                { label: "Founded", value: "2020, KSU Chapter Charter" },
                { label: "Sponsorship", value: "Ministry of Information & ICT, Kenya" },
                { label: "Main Campus Hub", value: "ICT Lab 2, Kisii University" },
              ].map((f) => (
                <div key={f.label} className="border-l-2 border-brand-blue pl-4">
                  <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">{f.label}</div>
                  <div className="text-slate-900 font-bold font-display">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PERSPECTIVES: PATRON'S ADDRESS ─────────────────── */}
      <section className="container-x py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-4">
          <Reveal>
            <span className="overline block mb-2 font-display">Leadership Message</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              A Message From Our Patron.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Academic credentials get you in the door, but the gig economy relies on practical execution. We help
              students earn decent livelihoods through certified online skills training.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={40}>
            <div className="bg-[#0B192C] text-white p-8 sm:p-10 rounded-xl relative border border-slate-800 shadow-xl">
              <p className="text-base sm:text-lg italic text-slate-200 leading-relaxed font-normal">
                "Kenya's digital economy holds immense potential. By coordinating structured peer labs for
                transcription, data entry, and virtual assistance, Kisii University students gain direct practical
                ability to compete for online work."
              </p>
              <div className="mt-8 border-t border-slate-800 pt-5 flex items-center gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-blue text-white text-xs font-bold font-display">
                  TA
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">Dr. Teresa Abuya</div>
                  <div className="text-xs text-amber-400 font-medium">
                    Club Patron & Senior Lecturer, ICT Department
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MILESTONE TIMELINE ────────────────────────────── */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-md mx-auto mb-16">
              <span className="overline block mb-2 font-display">Milestones</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">Our Growth Legacy</h2>
              <p className="text-sm text-slate-600 mt-2">
                A timeline of how our club expanded online work competencies on campus.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto border-l-2 border-slate-200 pl-6 sm:pl-8 space-y-10">
            {milestones.map((m, idx) => (
              <Reveal key={m.year} delay={idx * 40}>
                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-brand-blue shadow-sm" />

                  <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-card hover:border-slate-300 transition-colors">
                    <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">{m.year}</span>
                    <h3 className="font-display font-bold text-base text-slate-900 mt-3">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">{m.desc}</p>
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
          <div className="max-w-xl mb-12">
            <span className="overline block mb-2 font-display">Core Pillars</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">Mission & Vision</h2>
          </div>
        </Reveal>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              I: Target,
              t: "Our Mission",
              d: "To foster digital work inclusion by equipping Kisii University students with certified online competencies, enabling them to secure gig contracts and complete tasks successfully.",
            },
            {
              I: Eye,
              t: "Our Vision",
              d: "To operate as a leading campus freelancing hub, providing vetted data entry, audio translation, content writing, and web design support to local and global clients.",
            },
          ].map((b) => (
            <Reveal key={b.t} className="h-full">
              <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-xl h-full flex flex-col justify-between hover:border-slate-300 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-md bg-brand-blue text-white flex items-center justify-center mb-6 shadow-sm">
                    <b.I size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-slate-900">{b.t}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{b.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── EXECUTIVE COUNCIL DIRECTORY ────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="overline block mb-2 font-display">Executive Council</span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                  Student Leadership Council.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 30}>
                <div className="bg-white border border-slate-200 p-5 flex items-center gap-4 hover:border-slate-300 hover:shadow-md transition-all rounded-lg">
                  <div className="grid h-11 w-11 shrink-0 place-items-center bg-[#0B192C] text-white text-xs font-bold font-display rounded-md">
                    {initials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-sm text-slate-900 truncate">
                      {m.name}
                    </div>
                    <div className="text-xs text-brand-blue font-semibold mt-0.5 truncate">
                      {m.role}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                      {m.focus}
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

