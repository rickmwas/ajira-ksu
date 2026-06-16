import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
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
      { property: "og:title", content: "Gallery — Ajira Digital Club" },
      { property: "og:description", content: "Moments from our community: workshops, hackathons, and events." },
    ],
  }),
  component: Gallery,
});

const images: { src: string; caption: string; tall?: boolean }[] = [
  { src: g1, caption: "Coding workshop" },
  { src: g2, caption: "Annual hackathon", tall: true },
  { src: g3, caption: "Cybersecurity lab" },
  { src: g4, caption: "Freelance bootcamp", tall: true },
  { src: g5, caption: "Cohort graduation" },
  { src: g6, caption: "Tech keynote" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-black text-white pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand-green/20 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Gallery</div>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl">Moments that built the community.</h1>
            <p className="mt-5 max-w-xl text-white/75">A look inside our workshops, hackathons, and the wins we celebrate together.</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 50}>
              <button
                onClick={() => setLightbox(i)}
                className="mb-5 block w-full overflow-hidden rounded-2xl border bg-card group relative"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className={`w-full ${img.tall ? "aspect-[4/5]" : "aspect-square"} object-cover transition-transform duration-700 group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-4 right-4 text-left text-white text-sm font-medium translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  {img.caption}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-brand-black/90 backdrop-blur-sm animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
            <X />
          </button>
          <img src={images[lightbox].src} alt={images[lightbox].caption} className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-elevated animate-scale-in" />
        </div>
      )}
    </>
  );
}
