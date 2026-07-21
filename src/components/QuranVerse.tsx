import Reveal from "./Reveal";

interface VerseProps {
  verseRef: string;
  text: string;
  eyebrow?: string;
}

export default function QuranVerse({ verseRef, text, eyebrow = "A Verse on Marriage" }: VerseProps) {
  return (
    <section className="relative py-28 sm:py-36 px-6 bg-ink">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl leading-relaxed text-cream">
            &ldquo;{text}&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold/50" />
            <p className="text-gold text-sm tracking-[0.25em] uppercase">{verseRef}</p>
            <span className="h-px w-10 bg-gold/50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
