"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Users,
  Globe,
  Send,
  ShieldCheck,
  Brain,
  Cloud,
  TrendingUp,
  Briefcase,
  Clock,
  MapPin,
  ChevronRight,
  MessageSquareQuote,
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  PhoneCall,
  Laptop,
  Check,
  Zap
} from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { useRegister } from "@ajira/shared/components/site/RegisterContext";

// Local static assets
import ksuLogo from "@ajira/shared/assets/ksu-logo.png";
import heroImgNew from "@ajira/shared/assets/heroimg.png";

// Member avatars for credibility stack
import avatar1 from "@ajira/shared/assets/g1.jpg";
import avatar2 from "@ajira/shared/assets/g2.jpg";
import avatar3 from "@ajira/shared/assets/g3.jpg";
import avatar4 from "@ajira/shared/assets/g4.jpg";

// Partner logos — official full-colour assets
import logoMinistryICT from "@ajira/shared/assets/logo-ministry-ict.svg";
import logoKEPSA from "@ajira/shared/assets/logo-kepsa.svg";
import logoEmobilis from "@ajira/shared/assets/logo-emobilis.svg";

const institutionalStats = [
  { value: "1,200+", label: "KSU Students Trained", icon: Users },
  { value: "45+", label: "Weekly Lab Sessions", icon: GraduationCap },
  { value: "$180K+", label: "Peer Earnings Generated", icon: TrendingUp },
  { value: "ICT Lab 2", label: "Kisii Main Campus", icon: Building2 },
];

const memberProjects = [
  {
    title: "Swahili Audio Speech Corpus Dataset",
    track: "AI & Audio Transcription",
    category: "AI Data Services",
    desc: "A 500-hour Swahili audio dataset transcribed, timestamped, and dialect-annotated by KSU Ajira Language & Arts cohort for regional NLP training models.",
    tech: ["TranscribeMe", "Audacity", "JSON-LD"],
    impact: "Funded by Regional NLP Research Lab",
    link: "/gallery"
  },
  {
    title: "Kisii Farmers Marketplace Web Hub",
    track: "Full-Stack Web Dev",
    category: "Web & Software",
    desc: "A direct-to-farm e-commerce platform built by KSU Computer Science members connecting local Kisii passion fruit growers with buyers in Nairobi.",
    tech: ["Next.js", "Tailwind CSS", "M-Pesa API"],
    impact: "Live Commercial Client Deployment",
    link: "https://tenpajiraclub.co.ke"
  },
  {
    title: "Safaricom Agent Inventory Audit System",
    track: "Data Analytics & Entry",
    category: "Business Support",
    desc: "Structured data entry and automated reconciliation system developed during the campus weekend freelancing hackathon for regional retail agents.",
    tech: ["Excel VBA", "Python Data Analytics", "PostgreSQL"],
    impact: "Contracted by Western Region Logistics",
    link: "/gallery"
  },
  {
    title: "KSU E-Learning Lab Mobile Portal",
    track: "Mobile & UI/UX",
    category: "Campus Innovation",
    desc: "Responsive web application enabling Kisii University students to reserve physical lab desktops, access past exam papers, and track Ajira course badges.",
    tech: ["React Native", "Tailwind", "Supabase"],
    impact: "Adopted by KSU Tech Student Council",
    link: "/programs"
  }
];

const trackInquiryList = [
  {
    title: "Software & Web Development",
    desc: "Full-stack React, Next.js, Python API development, and client project delivery.",
    lead: "Onyango Michael (Chairperson)",
    phone: "254700000000",
    icon: Code2
  },
  {
    title: "Audio Transcription & Data Entry",
    desc: "Swahili-to-English audio transcribing, captioning, and data annotation.",
    lead: "Denis Kiplagat (Transcription Lead)",
    phone: "254700000000",
    icon: Laptop
  },
  {
    title: "AI Data Annotation & NLP",
    desc: "Bounding boxes, image tagging, text classification, and machine learning prep.",
    lead: "Evelyne Njambi (AI Lead)",
    phone: "254700000000",
    icon: Brain
  },
  {
    title: "Digital Marketing & SEO Copywriting",
    desc: "Search engine optimization, brand messaging, social management, and pitch decks.",
    lead: "Alex Chomba (Publicity Lead)",
    phone: "254700000000",
    icon: TrendingUp
  }
];

const upcomingEvents = [
  {
    day: "28",
    month: "AUG",
    category: "LAB WORKSHOP",
    title: "Upwork & Fiverr Profile Bidding Clinic",
    time: "10:00 AM - 1:00 PM",
    location: "KSU ICT Lab 2 (Main Campus)",
  },
  {
    day: "04",
    month: "SEP",
    category: "TRAINING",
    title: "Swahili Audio Transcription Masterclass",
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
    quote: "Through the club's Upwork bidding clinics in ICT Lab 2, I optimized my Virtual Assistant profile. In my third year at Kisii University, I landed a contract managing product listings for a US e-commerce shop earning $450/month.",
    author: "David Omondi",
    role: "BSc Computer Science '25",
    destination: "Certified Upwork Top-Rated Freelancer",
  },
  {
    quote: "Our Swahili audio transcription cohorts prepared me for the TranscribeMe entrance test. I now finance all my university accommodation and campus expenses through Swahili-to-English audio transcribing.",
    author: "Janet Chebet",
    role: "B.Ed English & Literature '26",
    destination: "Certified Audio Transcriptionist",
  },
];

export default function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── 01 HERO SECTION WITH HIGH-TRUST INSTITUTIONAL BRANDING ───── */}
      <section className="relative bg-[#0B192C] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-white/10">
        {/* Subtle grid lines background motif */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Reveal>
                {/* Status Badge Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FFB800]">
                    OFFICIAL CHAPTER · KISII UNIVERSITY
                  </span>
                </div>

                {/* Display Headline */}
                <h1 className="font-display text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[3.75rem] font-extrabold text-white tracking-tight">
                  Empowering Kisii University students for the{" "}
                  <span className="text-[#00D2FF] underline decoration-[#FFB800]/60 underline-offset-8">global digital economy</span>.
                </h1>

                {/* Body Copy */}
                <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                  The official Ajira Digital Club at Kisii University provides hands-on freelancing labs, audio transcription cohorts, AI data annotation training, and direct access to online gig contracts.
                </p>

                {/* Dual Action CTAs */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#FFB800] hover:bg-[#FFB800]/90 px-7 py-4 text-xs font-bold text-[#0B192C] transition-all uppercase tracking-wider group shadow-lg"
                  >
                    Join Ajira Chapter{" "}
                    <ArrowRight size={14} className="text-[#0B192C] group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-4 text-xs font-bold text-white transition-all uppercase tracking-wider shadow-sm group font-mono"
                  >
                    Explore Training Tracks{" "}
                    <ChevronRight size={14} className="text-[#00D2FF] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Trust Credibility Bar */}
                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
                  <div className="flex -space-x-2 overflow-hidden shrink-0">
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar1} alt="KSU Member 1" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar2} alt="KSU Member 2" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar3} alt="KSU Member 3" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B192C] object-cover" src={avatar4} alt="KSU Member 4" width={36} height={36} />
                  </div>
                  <div className="text-xs">
                    <span className="font-extrabold text-white font-mono text-sm block leading-none">1,200+ Trained Members</span>
                    <span className="text-[11px] text-slate-400 font-medium mt-1 block">Active cohorts in ICT Lab 2 (Main Campus)</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Visual Frame */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <Reveal delay={80} className="w-full">
                <div className="relative w-full max-w-[500px] mx-auto">

                  {/* Corner Accent Matrices */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[radial-gradient(#00D2FF_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30 pointer-events-none" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[radial-gradient(#FFB800_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

                  {/* Framed Image */}
                  <div className="relative z-10 bg-white/10 p-2 border border-white/20 shadow-2xl rounded-sm backdrop-blur-md overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-slate-900">
                      <Image
                        src={heroImgNew}
                        alt="Kisii University Ajira Digital Club Students Collaborating"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority
                        className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 opacity-95"
                      />

                      {/* Code Badge Overlay */}
                      <div className="absolute bottom-4 left-4 bg-[#0B192C]/90 text-[#FFB800] px-3 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2 backdrop-blur-md border border-white/15">
                        <Building2 size={14} className="text-[#00D2FF]" />
                        <span>ICT LAB 2 · KSU MAIN CAMPUS</span>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Badge Overlay */}
                  <div className="absolute -bottom-5 -right-3 z-20 bg-[#7A0000] text-white border border-white/20 shadow-xl px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#FFB800]" />
                    <span>GOVERNMENT CERTIFIED</span>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02 METRICS & VERIFIED STATS STRIP ──────────────────────── */}
      <section className="bg-white border-b border-border py-8 sm:py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {institutionalStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-3.5 ${
                    idx > 0 ? "md:border-l md:border-slate-200 md:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-sm bg-[#0B192C] text-[#FFB800] flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-black text-ink leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold mt-1 font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03 REAL MEMBER PROJECTS SHOWCASE (THE TENP BENCHMARK) ───────── */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-0.5 bg-[#FFB800] rounded-full" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0056A6]">
                    PROOF OF WORK & DELIVERABLES
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                  Projects Built by KSU Ajira Members.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  We don't just talk about skills — our members build real client applications, transcribe regional audio datasets, and deliver digital contracts.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-sm bg-[#0B192C] hover:bg-[#0B192C]/90 px-6 py-3.5 text-xs font-bold text-white transition-all uppercase tracking-wider font-mono shrink-0 shadow-sm"
              >
                View Full Member Showcase <ArrowUpRight size={14} className="text-[#FFB800]" />
              </Link>
            </div>
          </Reveal>

          {/* 4-Card Portfolio Showcase Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {memberProjects.map((proj, idx) => (
              <Reveal key={proj.title} delay={idx * 40}>
                <div className="bg-white border border-slate-200 p-7 rounded-sm shadow-card hover:border-[#0056A6]/40 hover:shadow-lg transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#0056A6] bg-[#0056A6]/10 px-2.5 py-1 rounded-sm">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">
                        {proj.track}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-ink mb-2 group-hover:text-[#0056A6] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {proj.desc}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tech.map((t) => (
                        <span key={t} className="text-[9px] font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-sm border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-[#7A0000] flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#FFB800]" /> {proj.impact}
                    </span>
                    <Link href={proj.link} className="font-bold text-[#0056A6] hover:underline inline-flex items-center gap-1">
                      Details <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 DIRECT TRACK CONNECT & WHATSAPP INQUIRY (TENP CONVERSION MODEL) ── */}
      <section className="py-20 sm:py-28 bg-[#0B192C] text-white border-b border-white/10">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#FFB800] block mb-3">
                DIRECT TRACK CONSULTATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                Connect Directly with KSU Track Leads
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have questions about audio transcription requirements, web development tools, or joining a lab cohort? Contact our peer track executives directly.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trackInquiryList.map((track, idx) => {
              const Icon = track.icon;
              return (
                <Reveal key={track.title} delay={idx * 30}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#00D2FF]/50 hover:bg-white/[0.08] transition-all flex flex-col justify-between h-full group">
                    <div>
                      <div className="w-10 h-10 rounded-sm bg-white/10 text-[#FFB800] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {track.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="text-[10px] font-mono text-slate-400 mb-2">
                        Track Lead: <span className="text-white font-bold">{track.lead}</span>
                      </div>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${track.phone}&text=Hello%20${encodeURIComponent(track.lead)},%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(track.title)}%20track%20at%20Kisii%20University.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#25D366]/90 text-slate-950 px-3 py-2 rounded-sm text-[11px] font-mono font-bold transition-all uppercase tracking-wider"
                      >
                        <PhoneCall size={13} />
                        Inquire via WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 05 VERIFIED ALUMNI OUTCOMES (THE KARU CREDIBILITY MODEL) ────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0056A6] block mb-3">
                AUTHENTIC KSU STUDENT STORIES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                Verified Student Earning Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Real Kisii University students who trained in ICT Lab 2 and now earn sustainable online income.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((test, i) => (
              <Reveal key={test.author} delay={i * 50}>
                <div className="bg-[#FAFAFA] border border-slate-200 p-8 rounded-sm relative flex flex-col justify-between shadow-card hover:border-[#0056A6]/30 transition-all">
                  <span className="absolute top-6 right-6 text-slate-300">
                    <MessageSquareQuote size={40} className="stroke-[1.2]" />
                  </span>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pr-6 relative z-10">
                    "{test.quote}"
                  </p>

                  <div className="border-t border-slate-200 pt-5 mt-6 flex items-center gap-4 relative z-10">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B192C] text-[#FFB800] text-sm font-bold font-display shadow-sm">
                      {test.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-ink">{test.author}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                        {test.role} · <span className="text-[#0056A6] font-bold">{test.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 UPCOMING CAMPUS SCHEDULE & EVENTS ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0056A6] block mb-3">
                  CAMPUS CALENDAR
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                  Upcoming Workshops & Clinics
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
                  Weekly hands-on training sessions in ICT Lab 2 (Main Campus) and hybrid webinars.
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0056A6] hover:text-[#004280] font-mono shrink-0"
              >
                Full Calendar <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {upcomingEvents.map((evt, idx) => (
              <Reveal key={evt.title} delay={idx * 30}>
                <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-card hover:border-[#0056A6]/40 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <div className="bg-[#0B192C] text-white p-3 rounded-sm flex flex-col items-center justify-center w-14 shrink-0 text-center font-mono shadow-sm">
                        <span className="text-xl font-black leading-none">{evt.day}</span>
                        <span className="text-[9px] font-bold mt-1 text-[#FFB800] leading-none">{evt.month}</span>
                      </div>

                      <div>
                        <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-[#0056A6] bg-[#0056A6]/10 px-2 py-0.5 rounded-sm mb-1.5">
                          {evt.category}
                        </span>
                        <h3 className="font-display text-sm font-bold text-ink leading-snug group-hover:text-[#0056A6] transition-colors">
                          {evt.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-[#FFB800]" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#0056A6]" /> {evt.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 FINAL HIGH-IMPACT CHAPTER CTA ──────────────────────────── */}
      <section className="relative bg-[#0B192C] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-x relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-[#FFB800] rounded-full" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#FFB800]">
                  JOIN AJIRA DIGITAL KSU
                </span>
                <span className="w-6 h-0.5 bg-[#FFB800] rounded-full" />
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Ready to earn & build your digital career?
              </h2>

              <p className="mt-5 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-normal">
                Join 1,200+ Kisii University students acquiring verified digital skills, peer bidding mentorship, and gig contract access.
              </p>

              <div className="mt-9 flex flex-col xs:flex-row justify-center gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-[#FFB800] hover:bg-[#FFB800]/90 px-8 py-4 text-xs font-bold text-[#0B192C] transition-all uppercase tracking-wider shadow-lg group"
                >
                  Join the Chapter <ArrowRight size={14} className="text-[#0B192C] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/25 hover:bg-white/10 px-8 py-4 text-xs font-bold text-white transition-all uppercase tracking-wider font-mono"
                >
                  View Lab Calendar
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
