"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Users,
  TrendingUp,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  MessageSquareQuote,
  Clock,
  MapPin,
  Laptop,
  Brain,
  PhoneCall,
  Sparkles,
  Award,
  BookOpen
} from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { useRegister } from "@ajira/shared/components/site/RegisterContext";

// Local static assets
import heroImgNew from "@ajira/shared/assets/hero_campus_lab.jpg";
import heroNetworkBg from "@ajira/shared/assets/hero_digital_network.jpg";

// Member avatars
import avatar1 from "@ajira/shared/assets/g1.jpg";
import avatar2 from "@ajira/shared/assets/g2.jpg";
import avatar3 from "@ajira/shared/assets/g3.jpg";
import avatar4 from "@ajira/shared/assets/g4.jpg";

// Community gallery assets
import gallery1 from "@ajira/shared/assets/g1.jpg";
import gallery2 from "@ajira/shared/assets/g2.jpg";
import gallery3 from "@ajira/shared/assets/g3.jpg";
import gallery4 from "@ajira/shared/assets/g4.jpg";

// Partner logos
import logoMinistryICT from "@ajira/shared/assets/logo-ministry-ict.svg";
import logoMastercard from "@ajira/shared/assets/logo-mastercard-foundation.svg";
import logoEmobilis from "@ajira/shared/assets/logo-emobilis.svg";
import ksuLogo from "@ajira/shared/assets/ksu-logo.png";

const institutionalStats = [
  { value: "1,200+", label: "KSU Students Trained", sub: "Across 4 active tracks" },
  { value: "45+", label: "Weekly Lab Sessions", sub: "ICT Lab 2 Main Campus" },
  { value: "85%", label: "Course Completion Rate", sub: "Certified peer cohorts" },
  { value: "ICT Lab 2", label: "Dedicated Training Hub", sub: "Kisii University" },
];

const corePillars = [
  {
    title: "01 · Learn",
    subtitle: "Hands-on Digital Skills",
    desc: "Structured, peer-led training in web development, Swahili audio transcription, AI data annotation, and virtual assistance in ICT Lab 2.",
    icon: BookOpen,
  },
  {
    title: "02 · Build",
    subtitle: "Real Projects & Portfolio",
    desc: "Members collaborate on active client deliverables, open datasets, and campus digital applications to demonstrate practical proof of execution.",
    icon: Code2,
  },
  {
    title: "03 · Earn",
    subtitle: "Online Gig Contracts",
    desc: "Guidance on setting up vetted freelancing profiles (Upwork, Fiverr, TranscribeMe) and connecting with regional digital work tasks.",
    icon: TrendingUp,
  },
];

const trainingTracks = [
  {
    title: "Web & Software Engineering",
    category: "Development",
    desc: "React, Next.js, Python API design, database architecture, and commercial web client delivery.",
    lead: "Onyango Michael (Chairperson)",
    badge: "Technical Track",
  },
  {
    title: "Swahili Audio Transcription & NLP",
    category: "Language & AI",
    desc: "Audio segmentation, Swahili-to-English translation, timestamping, and speech dataset annotation.",
    lead: "Denis Kiplagat (Transcription Lead)",
    badge: "High Demand",
  },
  {
    title: "AI Data Annotation & Computer Vision",
    category: "Machine Learning",
    desc: "Image tagging, bounding boxes, sentiment categorization, and data pipeline preparation for AI models.",
    lead: "Evelyne Njambi (AI Lead)",
    badge: "Emerging Track",
  },
  {
    title: "Digital Marketing & Copywriting",
    category: "Marketing & Sales",
    desc: "Search engine optimization, brand copy, social management, client proposals, and pitch decks.",
    lead: "Alex Chomba (Publicity Lead)",
    badge: "Creative Track",
  },
];

const memberProjects = [
  {
    title: "Swahili Audio Speech Corpus Dataset",
    category: "AI Data Services",
    desc: "A 500-hour Swahili audio dataset transcribed, timestamped, and dialect-annotated by KSU Ajira Language cohort for regional NLP research.",
    tech: ["TranscribeMe", "Audacity", "JSON-LD"],
    impact: "Funded by Regional NLP Research Lab",
    author: "KSU Audio Transcription Cohort",
  },
  {
    title: "Kisii Farmers Marketplace Web Hub",
    category: "Web & Software",
    desc: "A direct-to-farm e-commerce platform built by KSU Computer Science members connecting local Kisii passion fruit growers with buyers in Nairobi.",
    tech: ["Next.js", "Tailwind CSS", "M-Pesa API"],
    impact: "Live Commercial Client Deployment",
    author: "Software Dev Cohort",
  },
  {
    title: "Regional SACCO Inventory Audit System",
    category: "Business Support",
    desc: "Structured data entry and automated reconciliation system developed during the campus weekend hackathon for Western region logistics agents.",
    tech: ["Python", "PostgreSQL", "Excel Analytics"],
    impact: "Contracted by Western Region Logistics",
    author: "Data Analytics Cohort",
  },
  {
    title: "KSU E-Learning Lab Desktop Reserve Portal",
    category: "Campus Innovation",
    desc: "Responsive web application enabling Kisii University students to reserve physical lab desktops and track Ajira course completion badges.",
    tech: ["React", "Tailwind", "Supabase"],
    impact: "Adopted by KSU Student Tech Council",
    author: "KSU Student Dev Team",
  },
];

const trackInquiryList = [
  {
    title: "Web & Software Development",
    desc: "Full-stack web frameworks, API integration, and client application delivery.",
    lead: "Onyango Michael",
    phone: "254700000000",
    icon: Code2
  },
  {
    title: "Audio Transcription & Translation",
    desc: "Swahili audio transcribing, dialect tagging, and text annotation.",
    lead: "Denis Kiplagat",
    phone: "254700000000",
    icon: Laptop
  },
  {
    title: "AI Data Annotation & ML Prep",
    desc: "Bounding boxes, image tagging, and dataset preparation.",
    lead: "Evelyne Njambi",
    phone: "254700000000",
    icon: Brain
  },
  {
    title: "SEO Copywriting & Content",
    desc: "Brand communication, search optimization, and client proposals.",
    lead: "Alex Chomba",
    phone: "254700000000",
    icon: TrendingUp
  }
];

const upcomingEvents = [
  {
    day: "28",
    month: "AUG",
    category: "LAB CLINIC",
    title: "Upwork & Fiverr Profile Bidding Masterclass",
    time: "10:00 AM - 1:00 PM",
    location: "KSU ICT Lab 2 (Main Campus)",
  },
  {
    day: "04",
    month: "SEP",
    category: "TRAINING COHORT",
    title: "Swahili Audio Transcription Entrance Test Prep",
    time: "2:00 PM - 5:00 PM",
    location: "Hybrid / Lab 2",
  },
  {
    day: "18",
    month: "SEP",
    category: "HACKATHON",
    title: "Kisii Campus Digitization Hackathon 2026",
    time: "9:00 AM - 5:00 PM",
    location: "KSU Science Complex Auditorium",
  },
];

const testimonials = [
  {
    quote: "Through the club's Upwork bidding clinics in ICT Lab 2, I optimized my Virtual Assistant profile. In my third year at Kisii University, I landed a contract managing product listings for an online store earning sustainable monthly income.",
    author: "David Omondi",
    role: "BSc Computer Science '25",
    destination: "Certified Upwork Freelancer",
  },
  {
    quote: "Our Swahili audio transcription cohorts prepared me for the TranscribeMe entrance exam. I now cover all my university accommodation and campus expenses through Swahili-to-English audio transcribing.",
    author: "Janet Chebet",
    role: "B.Ed English & Literature '26",
    destination: "Certified Audio Transcriptionist",
  },
];

export default function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── 01 HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative bg-[#0B192C] text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Subtle high-tech background image overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Hero Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Reveal>
                {/* Clean Institutional Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 mb-6 w-fit backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold tracking-wide text-amber-300">
                    Ajira Digital Club · Kisii University
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] tracking-tight">
                  Build digital skills that work <span className="text-amber-400">beyond campus</span>.
                </h1>

                {/* Supporting Copy */}
                <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                  A practical community where KSU students learn in-demand digital competencies, build real client projects, connect with opportunities, and prepare for the global digital economy.
                </p>

                {/* Dual Action CTAs */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-md bg-brand-blue hover:bg-brand-blue-dark px-7 py-3.5 text-sm font-bold text-white transition-all shadow-md group"
                  >
                    <span>Join the Club</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2.5 rounded-md border border-slate-700 bg-slate-800/60 hover:bg-slate-800 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all"
                  >
                    <span>Explore Programs</span>
                    <ChevronRight size={16} className="text-slate-400" />
                  </Link>
                </div>

                {/* Quiet Credibility Stack */}
                <div className="mt-10 pt-6 border-t border-slate-800 flex items-center gap-4">
                  <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar1} alt="KSU Member 1" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar2} alt="KSU Member 2" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar3} alt="KSU Member 3" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar4} alt="KSU Member 4" width={36} height={36} />
                  </div>
                  <div className="text-xs text-slate-300">
                    <span className="font-bold text-white block">1,200+ KSU Student Members</span>
                    <span className="text-slate-400">Weekly practical sessions in ICT Lab 2</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: High Quality Photography Frame */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <Reveal delay={60} className="w-full">
                <div className="relative w-full max-w-[480px] mx-auto">
                  <div className="relative bg-slate-800 p-2 border border-slate-700 shadow-2xl rounded-xl overflow-hidden">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900">
                      <Image
                        src={heroImgNew}
                        alt="Kisii University Ajira Digital Club Students Collaborating in Lab"
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        priority
                        className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                      <span className="font-bold text-amber-400">ICT Lab 2 Main Campus</span>
                      <span className="text-slate-400">Kisii University</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>


          </div>
        </div>
      </section>

      {/* ── 02 INSTITUTIONAL TRUST & PARTNERS ─────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-display shrink-0">
              Institutional Partners & Co-Sponsors
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 opacity-85 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2">
                <Image src={ksuLogo} alt="Kisii University" width={28} height={28} className="h-7 w-auto object-contain" />
                <span className="text-xs font-bold text-slate-800">Kisii University</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={logoMinistryICT} alt="Ministry of ICT" width={28} height={28} className="h-6 w-auto object-contain" />
                <span className="text-xs font-bold text-slate-800">Ministry of ICT Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={logoMastercard} alt="Mastercard Foundation" width={24} height={24} className="h-6 w-auto object-contain" />
                <span className="text-xs font-bold text-slate-800">Mastercard Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={logoEmobilis} alt="eMobilis" width={24} height={24} className="h-5 w-auto object-contain" />
                <span className="text-xs font-bold text-slate-800">eMobilis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 WHAT HAPPENS HERE (LEARN / BUILD / EARN) ────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="overline mb-2 block">Our Methodology</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                What happens inside our university chapter.
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                We bridge the gap between academic study and practical digital employment through three clear learning phases.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={idx * 40}>
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg flex flex-col justify-between h-full hover:border-slate-300 transition-colors">
                    <div>
                      <div className="w-10 h-10 rounded-md bg-brand-blue text-white flex items-center justify-center mb-6 shadow-sm">
                        <Icon size={20} />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-blue font-display mb-1">
                        {pillar.title}
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                        {pillar.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 04 TRAINING PROGRAMS ──────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="overline mb-2 block">Skill Tracks</span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                  Practical training tracks.
                </h2>
                <p className="mt-2 text-sm text-slate-600 max-w-xl">
                  Syllabus designed for real market demand. Taught weekly by certified peer trainers in ICT Lab 2.
                </p>
              </div>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-blue-dark transition-colors uppercase tracking-wider shrink-0"
              >
                View Full Curriculum <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {trainingTracks.map((track, idx) => (
              <Reveal key={track.title} delay={idx * 30}>
                <div className="bg-white border border-slate-200 p-7 rounded-lg shadow-card hover:border-brand-blue/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
                        {track.category}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {track.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {track.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Track Lead: <strong className="text-slate-800">{track.lead}</strong></span>
                    <Link href="/programs" className="font-bold text-brand-blue hover:underline inline-flex items-center gap-1">
                      Details <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 BUILT BY MEMBERS (SIGNATURE PROJECT SHOWCASE) ──────────── */}
      <section id="member-projects" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="overline mb-2 block">Proof of Execution</span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                  Projects Built by KSU Ajira Members.
                </h2>
                <p className="mt-3 text-sm text-slate-600 max-w-xl">
                  Real client applications, audio datasets, and administrative systems created by Kisii University student cohorts.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 hover:bg-slate-800 px-5 py-3 text-xs font-bold text-white transition-all shrink-0 shadow-sm"
              >
                Explore Member Showcase <ArrowUpRight size={14} className="text-amber-400" />
              </Link>
            </div>
          </Reveal>

          {/* Large Editorial Project Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {memberProjects.map((proj, idx) => (
              <Reveal key={proj.title} delay={idx * 40}>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg shadow-card hover:border-slate-300 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
                        {proj.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {proj.author}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {proj.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tech.map((t) => (
                        <span key={t} className="text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-600" /> {proj.impact}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 COMMUNITY & WORKSHOPS (REAL PHOTOGRAPHY) ───────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <span className="overline mb-2 block">Campus Community</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                Inside ICT Lab 2 & campus workshops.
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                A collaborative environment where students learn together, review profiles, and build career networks.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: gallery1, title: "Lab 2 Practice Session", desc: "Hands-on audio typing" },
              { img: gallery2, title: "Peer Profile Review", desc: "Upwork bidding guidance" },
              { img: gallery3, title: "Coding Cohort Sprint", desc: "React & web applications" },
              { img: gallery4, title: "Guest Speaker Workshop", desc: "Digital economy insights" },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 30}>
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-card group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 UPCOMING EVENTS (EDITORIAL TIMELINE) ───────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="overline mb-2 block">Campus Schedule</span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                  Upcoming Workshops & Clinics.
                </h2>
                <p className="text-sm text-slate-600 mt-2 max-w-md">
                  Weekly practical sessions held in ICT Lab 2 (Main Campus) and hybrid webinars.
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-blue-dark transition-colors uppercase tracking-wider shrink-0"
              >
                View Full Calendar <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {upcomingEvents.map((evt, idx) => (
              <Reveal key={evt.title} delay={idx * 30}>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg shadow-card hover:border-slate-300 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="bg-[#0B192C] text-white p-3 rounded-md flex flex-col items-center justify-center w-14 shrink-0 text-center font-display shadow-sm">
                        <span className="text-xl font-bold leading-none">{evt.day}</span>
                        <span className="text-[10px] font-semibold mt-1 text-amber-400 uppercase leading-none">{evt.month}</span>
                      </div>

                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-0.5 rounded-md mb-1.5">
                          {evt.category}
                        </span>
                        <h3 className="font-display text-sm font-bold text-slate-900 leading-snug">
                          {evt.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-amber-600" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-brand-blue" /> {evt.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 MEMBER STORIES & ALUMNI OUTCOMES ───────────────────────── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="overline mb-2 block">Student Testimonials</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                Verified Student Outcomes.
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Kisii University students who trained in ICT Lab 2 and built digital livelihoods.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((test, i) => (
              <Reveal key={test.author} delay={i * 40}>
                <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card hover:border-slate-300 transition-all flex flex-col justify-between relative">
                  <p className="text-sm text-slate-700 leading-relaxed italic pr-4">
                    "{test.quote}"
                  </p>

                  <div className="border-t border-slate-100 pt-5 mt-6 flex items-center gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0B192C] text-amber-400 text-xs font-bold font-display shadow-sm">
                      {test.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-slate-900">{test.author}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {test.role} · <span className="text-brand-blue font-semibold">{test.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 MEMBER PORTAL TEASER ───────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="container-x">
          <div className="bg-[#0B192C] text-white rounded-xl p-8 sm:p-12 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                Digital Campus Home
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight">
                The KSU Ajira Member Portal.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Access self-paced course modules, verify your lab certificates, track weekly workshop attendance, and discover curated remote work opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5"><Award size={16} className="text-amber-400" /> Verified Certificates</span>
                <span className="flex items-center gap-1.5"><BookOpen size={16} className="text-brand-blue" /> Interactive Modules</span>
                <span className="flex items-center gap-1.5"><Users size={16} className="text-emerald-400" /> Peer Cohorts</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="/portal/login"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue hover:bg-brand-blue-dark px-7 py-4 text-sm font-bold text-white transition-all shadow-md w-full sm:w-auto text-center"
              >
                <span>Open Member Portal</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 JOIN CHAPTER FINAL CTA ─────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="overline mb-3 block">Become a Member</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to acquire practical digital skills?
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Join over 1,200 Kisii University students participating in our weekly lab sessions, freelancing clinics, and software cohorts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-brand-blue hover:bg-brand-blue-dark px-8 py-3.5 text-sm font-bold text-white transition-all shadow-md group"
              >
                <span>Join the Chapter</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50 px-8 py-3.5 text-sm font-semibold text-slate-800 transition-all"
              >
                View Lab Schedule
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

