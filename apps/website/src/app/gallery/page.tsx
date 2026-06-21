"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import Image from "next/image";

const g1 = "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80";
const g2 = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
const g3 = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80";
const g4 = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80";
const g5 = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80";
const g6 = "https://images.unsplash.com/photo-15222071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";

interface GalleryImage {
  src: string;
  caption: string;
  category: "Labs & Training" | "Hackathons" | "Milestones";
  date: string;
  loc: string;
  tall?: boolean;
}

const images: GalleryImage[] = [
  { src: g1, caption: "Web engineering cohort session", category: "Labs & Training", date: "Feb 09, 2026", loc: "ICT Lab 2" },
  { src: g2, caption: "Collaborative project design sprint", category: "Hackathons", date: "Apr 18, 2026", loc: "Main Hall", tall: true },
  { src: g3, caption: "Network security defense training", category: "Labs & Training", date: "Sep 21, 2026", loc: "ICT Lab 1" },
  { src: g4, caption: "Upwork proposal and pitch clinic", category: "Labs & Training", date: "Aug 03, 2026", loc: "ICT Lab 2", tall: true },
  { src: g5, caption: "Cohort 04 graduation ceremony", category: "Milestones", date: "Nov 24, 2025", loc: "Senate Hall" },
  { src: g6, caption: "Technology leadership keynote", category: "Hackathons", date: "Oct 17, 2026", loc: "Main Hall" },
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
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">Chapter Log</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Moments that define our code.
            </h1>
            <p className="mt-5 max-w-lg text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              A visual record of our peer-led labs, code hackathons, and cohort milestones at Kisii University.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INTERACTIVE FILTER TABS ───────────────────────── */}
      <section className="border-b border-border bg-surface sticky top-[80px] z-20">
        <div className="container-x py-4 sm:py-5 flex justify-center sm:justify-start">
          <div className="flex flex-wrap gap-1.5 font-mono">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                  activeTab === tab
                    ? "bg-brand-blue text-white"
                    : "bg-white border border-border text-foreground/75 hover:bg-surface-2"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ───────────────────────────────────── */}
      <section className="container-x py-12 sm:py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filteredImages.map((img) => (
            <Reveal key={img.originalIndex} delay={img.originalIndex * 30}>
              <button
                onClick={() => setLightbox(img.originalIndex)}
                className="mb-4 block w-full overflow-hidden border border-border group relative bg-surface shadow-card rounded-sm"
                aria-label={`View photo: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full ${
                    img.tall ? "aspect-[4/5]" : "aspect-[4/3]"
                  } object-cover transition-transform duration-500 group-hover:scale-[1.03]`}
                />

                {/* Visual hover metadata overlay */}
                <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-5 text-left text-white">
                  <div className="flex justify-between items-center text-[9px] font-mono tracking-widest uppercase">
                    <span className="text-brand-gold font-bold">[{img.category}]</span>
                    <span className="text-white/60 inline-flex items-center gap-1">
                      <Eye size={10} /> ZOOM
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold leading-snug">{img.caption}</h3>
                    <div className="flex items-center gap-4 mt-3 border-t border-white/10 pt-2 text-[9px] font-mono text-white/50">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={9} /> {img.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={9} /> {img.loc}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX SYSTEM ────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/98 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-white/20 text-white hover:bg-white/10 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-5 grid h-10 w-10 place-items-center border border-white/20 text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image Frame */}
          <div className="px-16 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-h-[75vh] max-w-[85vw] object-contain border border-white/10 shadow-overlay"
            />
            <div className="mt-5 border-t border-white/10 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-sm">
                  {images[lightbox].category}
                </span>
                <h4 className="text-sm font-semibold mt-2">{images[lightbox].caption}</h4>
              </div>

              <div className="flex gap-4 text-[10px] font-mono text-white/50">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={10} /> {images[lightbox].date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={10} className="text-brand-gold" /> {images[lightbox].loc}
                </span>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-5 grid h-10 w-10 place-items-center border border-white/20 text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot navigation */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {filteredImages.map((img) => (
              <button
                key={img.originalIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(img.originalIndex);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  img.originalIndex === lightbox ? "w-5 bg-brand-blue" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Image ${img.originalIndex + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
