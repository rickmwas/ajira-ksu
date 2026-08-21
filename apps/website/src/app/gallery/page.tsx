"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";

// Import local photos
import g1 from "@ajira/shared/assets/g1.jpg";
import g2 from "@ajira/shared/assets/g2.jpg";
import g3 from "@ajira/shared/assets/g3.jpg";
import g4 from "@ajira/shared/assets/g4.jpg";
import g5 from "@ajira/shared/assets/g5.jpg";
import g6 from "@ajira/shared/assets/g6.jpg";
import Image from "next/image";

interface GalleryImage {
  src: any;
  caption: string;
  category: "Labs & Training" | "Hackathons" | "Milestones";
  date: string;
  loc: string;
  tall?: boolean;
}

const images: GalleryImage[] = [
  { src: g1, caption: "Swahili audio transcription lab session", category: "Labs & Training", date: "Feb 09, 2026", loc: "ICT Lab 2" },
  { src: g2, caption: "Collaborative web development design sprint", category: "Hackathons", date: "Apr 18, 2026", loc: "Main Hall", tall: true },
  { src: g3, caption: "Upwork profile bidding & contract review", category: "Labs & Training", date: "Sep 21, 2026", loc: "ICT Lab 1" },
  { src: g4, caption: "AI data annotation and tagging workshop", category: "Labs & Training", date: "Aug 03, 2026", loc: "ICT Lab 2", tall: true },
  { src: g5, caption: "Ministry certification cohort graduation", category: "Milestones", date: "Nov 24, 2025", loc: "Senate Hall" },
  { src: g6, caption: "Student developer hackathon showcase", category: "Hackathons", date: "Oct 17, 2026", loc: "Main Hall" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const tabs = ["All", "Hackathons", "Labs & Training", "Milestones"];

  const filteredImages = images
    .map((img, originalIndex) => ({
      ...img,
      originalIndex,
    }))
    .filter((img) => activeTab === "All" || img.category === activeTab);

  const prev = () => {
    if (lightbox === null) return;
    const currentFilteredIdx = filteredImages.findIndex((i) => i.originalIndex === lightbox);
    const prevFilteredIdx = (currentFilteredIdx - 1 + filteredImages.length) % filteredImages.length;
    setLightbox(filteredImages[prevFilteredIdx].originalIndex);
  };

  const next = () => {
    if (lightbox === null) return;
    const currentFilteredIdx = filteredImages.findIndex((i) => i.originalIndex === lightbox);
    const nextFilteredIdx = (currentFilteredIdx + 1) % filteredImages.length;
    setLightbox(filteredImages[nextFilteredIdx].originalIndex);
  };

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-[#0B192C] text-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-amber-400 block mb-3 font-display">Campus Log</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold max-w-2xl tracking-tight">
              Campus photo gallery.
            </h1>
            <p className="mt-5 max-w-lg text-slate-300 leading-relaxed text-base sm:text-lg">
              A visual record of our practical labs, hackathons, and student milestone events at Kisii University.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INTERACTIVE FILTER TABS ───────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-50 sticky top-[100px] z-20">
        <div className="container-x py-4 flex justify-center sm:justify-start">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                  activeTab === tab
                    ? "bg-brand-blue text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ───────────────────────────────────── */}
      <section className="container-x py-16 sm:py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filteredImages.map((img) => (
            <Reveal key={img.originalIndex} delay={img.originalIndex * 30}>
              <button
                onClick={() => setLightbox(img.originalIndex)}
                className="mb-6 block w-full overflow-hidden border border-slate-200 rounded-lg group relative bg-white shadow-card text-left"
                aria-label={`View photo: ${img.caption}`}
              >
                <div className={`relative w-full ${img.tall ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden bg-slate-100`}>
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
                    <span className="text-brand-blue font-bold">{img.category}</span>
                    <span>{img.date}</span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {img.caption}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX SYSTEM ────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 animate-fade-in p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-white hover:bg-slate-800 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-white hover:bg-slate-800 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image Frame */}
          <div className="max-w-4xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 border border-slate-800">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].caption}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                  {images[lightbox].category}
                </span>
                <h4 className="text-base font-bold text-white mt-2">{images[lightbox].caption}</h4>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium"><Calendar size={13} /> {images[lightbox].date}</span>
                <span className="flex items-center gap-1.5 font-medium"><MapPin size={13} className="text-brand-blue" /> {images[lightbox].loc}</span>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 grid h-10 w-10 place-items-center rounded-full border border-slate-700 bg-slate-900 text-white hover:bg-slate-800 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}

