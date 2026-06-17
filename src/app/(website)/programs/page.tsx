"use client";

import { Check, Clock, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useRegister } from "@/components/site/RegisterContext";
import { COURSES_DATA } from "@/constants/courses";

export default function Programs() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">Curriculum Syllabus</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Professional training tracks.
            </h1>
            <p className="mt-5 max-w-xl text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              Learn specialized competencies sourced by industry experts. Every track consists of peer-led coding/typing
              labs, exercises, and official certification.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROGRAMS DETAIL LIST ───────────────────────────── */}
      <section className="container-x py-14 sm:py-20">
        <div className="space-y-12 sm:space-y-16">
          {COURSES_DATA.map((course, idx) => (
            <Reveal key={course.id} delay={idx * 50}>
              <div className="border border-border bg-white rounded-sm overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Label Column */}
                <div className="lg:col-span-4 bg-surface p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 border border-brand-blue/15 px-2.5 py-1 rounded-sm font-mono mb-4">
                      {course.badge} Track
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-snug mb-3">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen size={13} className="text-brand-blue" /> {course.lessons.length} Modules
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-brand-gold" /> Self-paced
                    </span>
                  </div>
                </div>

                {/* Modules Curriculum Column */}
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60 mb-5 font-mono">
                      Track Modules & Competency Guidelines
                    </h4>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {course.lessons.map((lesson, index) => (
                        <div key={lesson.id} className="flex gap-3 items-start">
                          <span className="mt-1 flex h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue text-[9px] font-bold font-mono">
                            {index + 1}
                          </span>
                          <div>
                            <h5 className="font-display font-semibold text-xs text-ink leading-tight">
                              {lesson.title}
                            </h5>
                            <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{lesson.summary}</p>
                            <span className="text-[9px] text-muted-foreground/50 font-mono mt-1 block">
                              Duration: {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[10px] text-muted-foreground leading-relaxed max-w-sm">
                      * Complete 100% of the lessons in this track to unlock the vetted Certificate of Completion.
                    </span>
                    <button
                      onClick={() => setOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors shrink-0"
                    >
                      Enroll in Track <ArrowRight size={13} />
                    </button>
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
