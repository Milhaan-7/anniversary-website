import Reveal from "./Reveal";
import { abuBio } from "../data/content";
import { abuPhotos } from "../data/photos";

export default function MeetAbu() {
  const hero = abuPhotos[7] ?? abuPhotos[0];
  const strip = abuPhotos.slice(0, 4);

  return (
    <section className="relative bg-ink px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <Reveal className="order-2 md:order-1">
          <p className="eyebrow mb-4">Meet</p>
          <h2 className="section-heading mb-6">{abuBio.name}</h2>
          <div className="mb-6 flex flex-wrap gap-2">
            {abuBio.words.map((w) => (
              <span key={w} className="rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-wider text-gold-light">
                {w}
              </span>
            ))}
          </div>
          <div className="space-y-4 text-sand leading-relaxed">
            {abuBio.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm uppercase tracking-widest text-gold/80">He's always been there for</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-cream/90">
              {abuBio.helpList.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sand leading-relaxed italic">{abuBio.travelNote}</p>
          <p className="mt-4 text-sand leading-relaxed">{abuBio.career}</p>
        </Reveal>

        <Reveal delay={0.15} className="order-1 md:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-[0_0_60px_rgba(201,162,39,0.08)]">
              <img
                src={hero.src}
                width={hero.w}
                height={hero.h}
                alt="Abu Sachappa"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {strip.map((p) => (
                <div key={p.src} className="overflow-hidden rounded-lg border border-gold/10">
                  <img src={p.src} width={p.w} height={p.h} alt="Abu Sachappa" loading="lazy" className="h-20 w-full object-cover sm:h-24" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
