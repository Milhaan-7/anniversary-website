import Reveal from "./Reveal";
import { verses } from "../data/content";
import { familyPhotos, childhoodPhotos } from "../data/photos";

export default function FamilySection() {
  const photos = [...familyPhotos, ...childhoodPhotos].slice(0, 6);
  const verse = verses[2];

  return (
    <section className="relative bg-ink px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-4">Family</p>
          <h2 className="section-heading mb-6">Their Home Has Always Felt Like Our Home</h2>
          <p className="font-display italic text-xl text-gold-light leading-relaxed">&ldquo;{verse.text}&rdquo;</p>
          <p className="mt-3 text-gold text-sm tracking-[0.25em] uppercase">{verse.ref}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={0.05 * i} className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
              <div className="overflow-hidden rounded-xl border border-gold/15 h-full">
                <img
                  src={p.src}
                  width={p.w}
                  height={p.h}
                  alt="Family gathering with Abu Sachappa and Fathima Saachi"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
