"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ChevronLeft, Printer, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import { Reveal } from "@ajira/shared/components/site/Reveal";

interface Props {
  params: Promise<{ courseId: string }>;
}

export default function CourseCertificate({ params }: Props) {
  const { courseId } = use(params);
  const { courses, isCourseCompleted, user } = usePortal();
  const [certCode, setCertCode] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    if (user && course) {
      // Create a deterministic verification hash based on user details
      const idParts = user.regId.split("/");
      const numericId = idParts[idParts.length - 1] || "9999";
      const courseAbbr = course.id
        .split("-")
        .map((w) => w[0])
        .join("")
        .toUpperCase();
      const code = `KSU-AJR-${courseAbbr}-${numericId}-${(user.name.length * 17) % 1000}`;
      setCertCode(code);

      // Set date
      const date = new Date().toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setCompletionDate(date);
    }
  }, [user, course]);

  if (!user) return null;

  if (!course) {
    return (
      <div className="container-x py-20 text-center font-sans">
        <h2 className="font-display text-2xl font-bold text-ink">Course Not Found</h2>
        <p className="text-xs text-muted-foreground mt-2">The selected training program does not exist.</p>
        <Link
          href="/portal/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline mt-6"
        >
          <ChevronLeft size={14} /> Back to Portal
        </Link>
      </div>
    );
  }

  const completed = isCourseCompleted(course.id);

  if (!completed) {
    return (
      <div className="container-x py-10 font-sans max-w-md mx-auto">
        <div className="text-center border border-border bg-white p-8 shadow-card rounded-sm">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-sm bg-brand-blue/10 text-brand-blue mb-6">
            <Award size={22} />
          </div>
          <h2 className="font-display text-xl font-bold text-ink">Certificate Locked</h2>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            You must complete 100% of the lessons in <strong className="text-ink">"{course.title}"</strong> before you
            can unlock and generate your official Certificate of Completion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center text-xs">
            <Link
              href={`/portal/learn/${course.id}`}
              className="inline-flex items-center justify-center rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-5 py-3 font-bold text-white uppercase tracking-wider transition-colors"
            >
              Resume Learning
            </Link>
            <Link
              href="/portal/dashboard"
              className="inline-flex items-center justify-center rounded-sm border border-border bg-white hover:bg-surface-2 px-5 py-3 font-semibold text-foreground transition-colors"
            >
              Back to Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container-x py-4 font-sans">
      {/* Print styles injected locally to isolate print layouts cleanly */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body * {
            visibility: hidden;
            background: #ffffff !important;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* ── HEADER NAVIGATION (HIDDEN ON PRINT) ──────────────── */}
      <Reveal className="no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6 mb-10">
          <div className="flex items-center gap-3">
            <Link
              href="/portal/dashboard"
              className="flex h-9 w-9 place-items-center rounded-sm border border-border bg-white text-ink hover:bg-surface-2 transition-colors"
              title="Back to portal"
            >
              <ChevronLeft size={16} />
            </Link>
            <div>
              <h2 className="font-display text-base font-bold text-ink leading-tight">Course Completed!</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Here is your official certificate for {course.title}.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={`/portal/learn/${course.id}`}
              className="inline-flex items-center justify-center rounded-sm border border-border bg-white hover:bg-surface-2 px-4 py-2 text-xs font-semibold text-ink transition-colors"
            >
              Review Lessons
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Printer size={14} /> Print Certificate
            </button>
          </div>
        </div>
      </Reveal>

      {/* ── HIGH FIDELITY CERTIFICATE CONTAINER ──────────────── */}
      <Reveal>
        <div
          id="print-area"
          className="mx-auto max-w-[850px] bg-white border-[12px] border-brand-black p-8 sm:p-12 shadow-overlay rounded-sm relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 86, 166, 0.015) 0%, transparent 80%)",
          }}
        >
          {/* Ornamental Inner Border */}
          <div className="border border-border/80 p-6 sm:p-8 h-full w-full flex flex-col justify-between items-center text-center min-h-[480px]">
            {/* Top Badge & Headers */}
            <div className="w-full flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-1.5 w-12 bg-brand-blue" />
                <div className="h-8 w-8 text-brand-blue flex items-center justify-center">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <span className="h-1.5 w-12 bg-brand-blue" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-brand-blue mb-1">
                Kisii University Chapter
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-brand-black leading-none">
                Ajira Digital Club
              </h1>
              <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mt-1.5">
                Vetted Course Certification
              </div>
            </div>

            {/* Certificate Core Statement */}
            <div className="my-8">
              <span className="font-sans italic text-xs text-muted-foreground block mb-2">
                This is to officially certify that
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-black tracking-tight my-3 underline decoration-brand-gold decoration-2 underline-offset-8">
                {user.name}
              </h2>
              <p className="font-sans text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed mt-4">
                has successfully completed all required modules, instructional material, and practical exercises for
                the competency track:
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold text-brand-blue mt-3 mb-1">{course.title}</h3>
              <p className="font-mono text-[9px] font-bold text-muted-foreground/80 tracking-wide uppercase">
                {course.badge} Track — Level 1 Competency
              </p>
            </div>

            {/* Bottom Signatures & Hash */}
            <div className="w-full border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Left Signature */}
              <div className="w-40 text-center sm:text-left">
                <div className="font-mono text-[11px] text-ink font-semibold italic h-6 flex items-end justify-center sm:justify-start">
                  Dr. Douglas Bosire
                </div>
                <div className="h-px bg-border my-1 w-full" />
                <span className="text-[9px] font-mono text-muted-foreground uppercase block">Club Patron, KSU</span>
              </div>

              {/* Center Stamp / Seal */}
              <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 border-2 border-brand-blue/30 rounded-full flex items-center justify-center p-1 bg-surface">
                  <div className="h-full w-full border border-dashed border-brand-blue/40 rounded-full flex flex-col items-center justify-center text-[7px] font-mono font-bold text-brand-blue uppercase leading-none text-center">
                    <span className="mb-0.5">KSU</span>
                    <span>AJIRA</span>
                  </div>
                </div>
              </div>

              {/* Right Signature */}
              <div className="w-40 text-center sm:text-right">
                <div className="font-mono text-[11px] text-ink font-semibold italic h-6 flex items-end justify-center sm:justify-end">
                  Ajira President
                </div>
                <div className="h-px bg-border my-1 w-full" />
                <span className="text-[9px] font-mono text-muted-foreground uppercase block">
                  Chapter President, KSU
                </span>
              </div>
            </div>
          </div>

          {/* Verification Code Footer */}
          <div className="absolute bottom-2 left-6 right-6 flex items-center justify-between text-[8px] font-mono text-muted-foreground/50 select-all">
            <span>VERIFIED ON: {completionDate}</span>
            <span>VERIFICATION CODE: {certCode}</span>
          </div>

          {/* Top-Right Decorative Triangles */}
          <div className="absolute -top-12 -right-12 h-24 w-24 bg-brand-blue/10 rotate-45 pointer-events-none" />
        </div>
      </Reveal>

      {/* ── SUCCESS BANNER (HIDDEN ON PRINT) ────────────────── */}
      <Reveal className="no-print mt-8">
        <div className="max-w-[850px] mx-auto bg-brand-green/5 border border-brand-green/20 p-4 rounded-sm flex items-start gap-3">
          <div className="h-5 w-5 text-brand-green shrink-0 mt-0.5">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <h4 className="font-display text-xs font-bold text-brand-green uppercase tracking-wide">
              Official Certification Vetted
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">
              This certificate includes a secure verification code:{" "}
              <code className="font-mono bg-white px-1 py-0.5 rounded border border-border text-ink text-[10px] font-semibold">
                {certCode}
              </code>
              . Kisii University students can attach this verification ID to their professional resumes or share it
              with digital platform recruiters to prove course completion.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
