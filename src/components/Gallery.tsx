import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { abuPhotos, saachiPhotos, togetherPhotos, bestPhotos } from "../data/photos";
import type { Photo } from "../data/photos";

const all: Photo[] = [
  ...bestPhotos,
  ...togetherPhotos.slice(0, 6),
  ...abuPhotos.slice(8, 14),
  ...saachiPhotos.slice(8, 14),
];

export default function Gallery() {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <section className="relative bg-ink px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">Premium Gallery</p>
          <h2 className="section-heading">A Lifetime, One Frame at a Time</h2>
        </Reveal>

        <div className="columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
          {all.map((p, i) => (
            <Reveal key={p.src} delay={(i % 6) * 0.06} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setActive(p)}
                className="block w-full overflow-hidden rounded-xl border border-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                <img
                  src={p.src}
                  width={p.w}
                  height={p.h}
                  alt="A cherished memory of Abu Sachappa and Fathima Saachi"
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-md px-6"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={active.src}
              width={active.w}
              height={active.h}
              alt="A cherished memory of Abu Sachappa and Fathima Saachi"
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
            <button
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
