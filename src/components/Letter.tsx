import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { letter } from "../data/content";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-ink-soft px-6 py-28 sm:py-40 overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow mb-4">A Letter For You</p>
          <h2 className="section-heading mb-14">Written From The Heart</h2>
        </Reveal>

        <div className="relative mx-auto flex min-h-[420px] items-center justify-center">
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.button
                key="envelope"
                onClick={() => setOpen(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.6 }}
                className="group relative w-full max-w-sm mx-auto"
                aria-label="Open the letter"
              >
                <div className="relative aspect-[3/2] w-full">
                  {/* Envelope body */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#EADFC6] to-[#DCCBA0] shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
                  {/* Envelope flap */}
                  <div
                    className="absolute inset-x-0 top-0 h-1/2 origin-top bg-gradient-to-b from-[#D8C596] to-[#C9B27F] transition-transform duration-500 group-hover:-rotate-2"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                  />
                  <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/90 flex items-center justify-center text-ink text-sm shadow-md">
                    23
                  </div>
                </div>
                <p className="mt-6 font-hand text-2xl text-gold-light">Tap to open our letter</p>
              </motion.button>
            ) : (
              <motion.div
                key="paper"
                initial={{ opacity: 0, y: 40, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full rounded-sm bg-[#F7F0DD] px-7 py-10 text-left shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:px-12 sm:py-14"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 32px)",
                }}
              >
                <p className="font-hand text-2xl sm:text-3xl text-[#3a3020] mb-1">{letter.greeting}</p>
                <p className="font-hand text-xl text-[#5a4d33] mb-6 italic">{letter.opening}</p>
                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 font-hand text-lg sm:text-xl leading-relaxed text-[#4a3e28]">
                  {letter.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="mt-6 font-hand text-xl text-[#3a3020]">{letter.closingLine}</p>
                <p className="mt-4 font-hand text-lg text-[#5a4d33]">{letter.signoff}</p>
                <p className="font-hand text-2xl text-gold-dim">{letter.signature}</p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-8 text-xs uppercase tracking-widest text-[#7a6a45] hover:text-gold-dim"
                >
                  Fold letter back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
