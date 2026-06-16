import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ajira Digital Club, Kisii University" },
      { name: "description", content: "Photos from Ajira Digital Club workshops, hackathons, training sessions, and events at Kisii University." },
    ],
  }),
  component: Gallery,
});

const images: { src: string; caption: string; category: string; tall?: boolean }[] = [
  { src: g1, caption: "Coding workshop",     category: "Training"  },
  { src: g2, caption: "Annual hackathon",    category: "Hackathon", tall: true },
  { src: g3, caption: "Cybersecurity lab",   category: "Training"  },
  { src: g4, caption: "Freelance bootcamp",  category: "Bootcamp",  tall: true },
  { src: g5, caption: "Cohort graduation",   category: "Milestone" },
  { src: g6, caption: "Tech keynote",        category: "Event"     },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % images.length : null);

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-red block mb-4 sm:mb-5">Gallery</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Moments that built the community.
            </h1>
            <p className="mt-5 max-w-lg text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              A look inside our workshops, hackathons, and the wins we celebrate together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────────── */}
      <section className="container-x py-12 sm:py-16 lg:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 40}>
              <button
                onClick={() => setLightbox(i)}
                className="mb-3 sm:mb-4 block w-full overflow-hidden border border-border group relative bg-surface"
                aria-label={`View photo: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className={`w-full ${img.tall ? "aspect-[4/5]" : "aspect-[4/3]"} object-cover transition-transform duration-500 group-hover:scale-[1.04]`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <ZoomIn size={16} className="text-white/70" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-red mb-0.5">
                      {img.category}
                    </div>
                    <div className="text-white text-sm font-medium">{img.caption}</div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 animate-fade-in"
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
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div className="px-16 animate-scale-in" onClick={e => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-h-[78vh] max-w-[85vw] object-contain"
            />
            <div className="mt-3 flex items-center gap-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-red">
                {images[lightbox].category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/25" />
              <span className="text-sm text-white/60">{images[lightbox].caption}</span>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-5 grid h-10 w-10 place-items-center border border-white/20 text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot nav */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === lightbox ? "w-5 bg-brand-red" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
