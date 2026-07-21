import Reveal from "./Reveal";
import { theirLove, whatTheyMean } from "../data/content";
import { togetherPhotos } from "../data/photos";

export default function TheirStory() {
  const hero = togetherPhotos[6] ?? togetherPhotos[0];

  return (
    <section className="relative bg-ink px-6 py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow mb-4">Their Story</p>
          <h2 className="section-heading">{theirLove.heading}</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {theirLove.lines.map((line) => (
              <span key={line} className="font-display italic text-xl sm:text-2xl text-gold-light">
                {line}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-gold/20">
            <img src={hero.src} width={hero.w} height={hero.h} alt="Abu Sachappa and Fathima Saachi together" loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {theirLove.pillars.map((p) => (
              <span key={p} className="rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm tracking-wide text-cream">
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-20 grid gap-4 text-left sm:grid-cols-2">
          {whatTheyMean.map((line, i) => (
            <Reveal key={line} delay={0.05 * i}>
              <p className="rounded-xl border border-cream/10 bg-cream/[0.03] px-5 py-4 text-sand leading-relaxed">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
