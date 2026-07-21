import Reveal from "./Reveal";
import { lessons, memories } from "../data/content";

export default function LifeOfGiving() {
  return (
    <section className="relative bg-ink-soft px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow mb-4">A Life of Giving</p>
          <h2 className="section-heading mb-6">Lessons They Have Taught Us</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {lessons.map((lesson, i) => (
            <Reveal key={lesson} delay={0.06 * i}>
              <div className="h-full rounded-xl border border-gold/15 bg-ink px-6 py-6 text-center">
                <p className="font-display text-lg text-cream leading-snug">{lesson}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-24 text-center">
          <p className="eyebrow mb-4">Beautiful Memories</p>
          <h3 className="font-display text-2xl sm:text-3xl text-cream mb-10">Moments We Will Never Forget</h3>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3">
          {memories.map((m, i) => (
            <Reveal key={m} delay={0.03 * i}>
              <span className="inline-block rounded-full border border-gold/25 px-4 py-2 text-sm text-sand hover:text-gold hover:border-gold/50 transition-colors">
                {m}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
