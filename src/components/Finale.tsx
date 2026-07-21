import Reveal from "./Reveal";
import Starfield from "./LazyStarfield";
import { finalMessage, coupleNames, credits } from "../data/content";
import { bestPhotos } from "../data/photos";

export default function Finale() {
  const hero = bestPhotos[1] ?? bestPhotos[0];

  return (
    <section className="relative bg-ink px-6 py-32 sm:py-40 overflow-hidden">
      <Starfield density={0.9} />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          {finalMessage.intro.map((line, i) => (
            <p key={i} className="font-display italic text-xl sm:text-2xl text-sand">{line}</p>
          ))}
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto my-12 max-w-md overflow-hidden rounded-2xl border border-gold/25 shadow-[0_0_60px_rgba(201,162,39,0.15)]">
            <img src={hero.src} width={hero.w} height={hero.h} alt="Abu Sachappa and Fathima Saachi" loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </Reveal>

        <div className="space-y-4 mb-10">
          {finalMessage.body.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p className="text-cream/90 leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="font-display text-xl text-gold-light mb-3">{finalMessage.thanks}</p>
          <p className="text-sand leading-relaxed mb-10">{finalMessage.prayer}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-cream mb-4">
            {finalMessage.happyAnniversary}
          </h2>
          <p className="font-display italic text-xl text-gold mb-16">
            {coupleNames.groom} <span className="mx-2">&#10084;</span> {coupleNames.bride}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="divider-glow mb-10 mx-auto max-w-xs" />
          <p className="font-hand text-2xl text-gold-light mb-2">{finalMessage.signoff}</p>
          <p className="font-hand text-3xl text-cream mb-14">{finalMessage.signature}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-sand/70">{credits}</p>
        </Reveal>
      </div>
    </section>
  );
}
