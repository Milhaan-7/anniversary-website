import Reveal from "./Reveal";
import { travelPhotos } from "../data/photos";

const stops = [
  {
    place: "Hong Kong",
    years: "15+ years",
    note: "Long before this trip, Abu Sachappa and Saachi built a life together in Hong Kong for more than fifteen years.",
  },
  {
    place: "Malaysia",
    years: "Recent trip",
    note: "Every trip becomes effortless because he plans everything from beginning to end — flights, hotels, transportation, tickets, schedules.",
  },
  {
    place: "Singapore",
    years: "Recent trip",
    note: "Airport memories, shopping together, and laughter during travels — the small moments that became the best ones.",
  },
  {
    place: "Langkawi",
    years: "Recent trip",
    note: "An island of quiet mornings and long conversations, closing out an unforgettable journey together.",
  },
  {
    place: "Wagamon, Kerala",
    years: "Family trip",
    note: "Misty hills and family gatherings — another chapter in a lifetime of journeys taken together.",
  },
];

export default function TravelMemories() {
  return (
    <section className="relative bg-ink-soft py-28 sm:py-36 overflow-hidden">
      <div className="px-6">
        <Reveal className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow mb-4">Travel Memories</p>
          <h2 className="section-heading">Every Journey Became a Memory</h2>
        </Reveal>
      </div>

      <div className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory [scrollbar-width:thin]">
        {stops.map((stop, i) => {
          const photo = travelPhotos[i % travelPhotos.length];
          return (
            <Reveal key={stop.place} delay={0.08 * i} className="snap-start shrink-0 w-[78vw] sm:w-[380px]">
              <div className="h-full rounded-2xl border border-gold/15 bg-ink overflow-hidden">
                {photo && (
                  <img
                    src={photo.src}
                    width={photo.w}
                    height={photo.h}
                    alt={`Travel memory in ${stop.place}`}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-gold text-xs tracking-[0.25em] uppercase mb-1">{stop.years}</p>
                  <h3 className="font-display text-2xl text-cream mb-3">{stop.place}</h3>
                  <p className="text-sand text-sm leading-relaxed">{stop.note}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
