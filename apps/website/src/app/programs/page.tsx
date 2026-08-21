"use client";

import Image from "next/image";
import { Check, Clock, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { useRegister } from "@ajira/shared/components/site/RegisterContext";
import { COURSES_DATA } from "@ajira/shared/constants/courses";
import heroNetworkBg from "@ajira/shared/assets/hero_digital_network.jpg";

export default function Programs() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────────────── */}
      <section className="relative bg-[#0B192C] text-white pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        {/* Quality background image overlay */}
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
            <span className="overline text-amber-400 block mb-3 font-display">Curriculum & Syllabus</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold max-w-2xl tracking-tight">
              Practical training tracks.
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 leading-relaxed text-base sm:text-lg">
              Specialized digital competencies designed for market demand. Taught in weekly practical lab cohorts in ICT Lab 2 with official certification upon completion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROGRAMS DETAIL LIST ───────────────────────────── */}
      <section className="container-x py-16 sm:py-24">
        <div className="space-y-12">
          {COURSES_DATA.map((course, idx) => (
            <Reveal key={course.id} delay={idx * 40}>
              <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Label Column */}
                <div className="lg:col-span-4 bg-slate-50 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                  <div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-md mb-4">
                      {course.badge} Track
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900 leading-snug mb-3">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{course.description}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen size={15} className="text-brand-blue" /> {course.lessons.length} Modules
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={15} className="text-amber-600" /> Self-paced & Lab
                    </span>
                  </div>
                </div>

                {/* Modules Curriculum Column */}
                <div className="lg:col-span-8 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 font-display">
                      Track Modules & Learning Outcomes
                    </h4>

                    <div className="grid gap-6 sm:grid-cols-2">
                      {course.lessons.map((lesson, index) => (
                        <div key={lesson.id} className="flex gap-3.5 items-start">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold">
                            {index + 1}
                          </span>
                          <div>
                            <h5 className="font-display font-bold text-sm text-slate-900 leading-snug">
                              {lesson.title}
                            </h5>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{lesson.summary}</p>
                            <span className="text-[11px] text-slate-400 mt-1 block font-medium">
                              Duration: {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 max-w-md">
                      * Complete 100% of the lessons in this track to unlock the verified Certificate of Completion.
                    </span>
                    <button
                      onClick={() => setOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 text-xs font-bold text-white transition-all shrink-0 shadow-sm"
                    >
                      <span>Enroll in Track</span>
                      <ArrowRight size={14} />
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

