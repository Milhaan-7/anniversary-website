import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Starfield from "./LazyStarfield";
import { openingQuestions, openingReveal, coupleNames, anniversaryLine, forLine } from "../data/content";

type Stage = "bismillah" | "questions" | "reveal" | "names" | "ready";

export default function Opening({ onBegin }: { onBegin: () => void }) {
  const [stage, setStage] = useState<Stage>("bismillah");
  const [qIndex, setQIndex] = useState(0);
  const [revealIndex, setRevealIndex] = useState(0);

  useEffect(() => {
    if (stage !== "bismillah") return;
    const t = setTimeout(() => setStage("questions"), 3400);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== "questions") return;
    if (qIndex >= openingQuestions.length) {
      const t = setTimeout(() => setStage("reveal"), 900);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setQIndex((i) => i + 1), 2200);
    return () => clearTimeout(t);
  }, [stage, qIndex]);

  useEffect(() => {
    if (stage !== "reveal") return;
    if (revealIndex >= openingReveal.length) {
      const t = setTimeout(() => setStage("names"), 1200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setRevealIndex((i) => i + 1), 2600);
    return () => clearTimeout(t);
  }, [stage, revealIndex]);

  useEffect(() => {
    if (stage !== "names") return;
    const t = setTimeout(() => setStage("ready"), 1400);
    return () => clearTimeout(t);
  }, [stage]);

  return (
    <section className="relative min-h-screen h-[100svh] w-full overflow-hidden bg-ink flex items-center justify-center text-center px-6">
      <Starfield density={1.1} />
      <div className="relative z-10 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {stage === "bismillah" && (
            <motion.div
              key="bismillah"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
              className="space-y-6"
            >
              <p className="arabic-text" dir="rtl">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
              <p className="font-display italic text-sand text-lg sm:text-xl leading-relaxed">
                In the Name of Allah,<br />The Most Compassionate, The Most Merciful.
              </p>
            </motion.div>
          )}

          {stage === "questions" && qIndex < openingQuestions.length && (
            <motion.p
              key={`q-${qIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl text-cream"
            >
              {openingQuestions[qIndex]}
            </motion.p>
          )}

          {stage === "reveal" && revealIndex < openingReveal.length && (
            <motion.p
              key={`r-${revealIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.2 }}
              className="font-display italic text-2xl sm:text-3xl md:text-4xl text-gold-light"
            >
              {openingReveal[revealIndex]}
            </motion.p>
          )}

          {(stage === "names" || stage === "ready") && (
            <motion.div
              key="names"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7"
            >
              <p className="eyebrow">{forLine}</p>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-cream leading-tight">
                {coupleNames.groom}
                <span className="text-gold mx-3">&#10084;</span>
                {coupleNames.bride}
              </h1>
              <p className="font-display italic text-lg sm:text-xl text-sand">{anniversaryLine}</p>

              <AnimatePresence>
                {stage === "ready" && (
                  <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    onClick={onBegin}
                    className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/50 px-8 py-3.5 font-body text-sm tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-ink transition-colors duration-500"
                  >
                    Begin Our Journey
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
