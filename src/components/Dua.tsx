import Reveal from "./Reveal";
import Starfield from "./LazyStarfield";
import { dua } from "../data/content";

export default function Dua() {
  return (
    <section className="relative bg-ink px-6 py-32 sm:py-40 overflow-hidden">
      <Starfield density={0.6} glow={false} className="opacity-40" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">A Dua For Them</p>
        </Reveal>
        <div className="space-y-5">
          {dua.body.map((line, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="font-display text-xl sm:text-2xl leading-relaxed text-cream">{line}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <div className="my-10 divider-glow" />
        </Reveal>
        <div className="space-y-4">
          {dua.linesQuoted.map((line, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p className="font-display italic text-lg sm:text-xl text-gold-light">&ldquo;{line}&rdquo;</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-10 text-gold text-lg tracking-[0.2em] uppercase">{dua.ameen}</p>
        </Reveal>
      </div>
    </section>
  );
}
