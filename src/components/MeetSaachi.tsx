import Reveal from "./Reveal";
import { saachiBio } from "../data/content";
import { saachiPhotos } from "../data/photos";

export default function MeetSaachi() {
  const hero = saachiPhotos[4] ?? saachiPhotos[0];
  const strip = saachiPhotos.slice(5, 9);

  return (
    <section className="relative bg-ink-soft px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-emerald/30 shadow-[0_0_60px_rgba(47,93,80,0.15)]">
              <img
                src={hero.src}
                width={hero.w}
                height={hero.h}
                alt="Fathima Saachi"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {strip.map((p) => (
                <div key={p.src} className="overflow-hidden rounded-lg border border-emerald/20">
                  <img src={p.src} width={p.w} height={p.h} alt="Fathima Saachi" loading="lazy" className="h-20 w-full object-cover sm:h-24" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow mb-4">Meet</p>
          <h2 className="section-heading mb-6">{saachiBio.name}</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {saachiBio.words.map((w) => (
              <span key={w} className="rounded-full border border-emerald-light/40 px-3 py-1 text-xs uppercase tracking-wider text-emerald-light">
                {w}
              </span>
            ))}
          </div>
          <div className="space-y-4 text-sand leading-relaxed">
            {saachiBio.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-sand leading-relaxed italic">{saachiBio.cookingNote}</p>
          <p className="mt-4 text-cream/90 leading-relaxed">{saachiBio.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
