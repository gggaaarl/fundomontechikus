import { timelineEvents } from "@/lib/site-content";

export function Timeline() {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-line pl-8 sm:pl-10">
      {timelineEvents.map((event, index) => (
        <li key={event.title} className={`relative ${index < timelineEvents.length - 1 ? "pb-12" : ""}`}>
          <span
            className="absolute top-1 -left-[calc(2rem+5px)] size-2.5 rounded-full border-2 border-gold bg-paper sm:-left-[calc(2.5rem+5px)]"
            aria-hidden
          />
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">{event.year}</p>
          <h3 className="mt-2 font-display text-2xl text-olive uppercase">{event.title}</h3>
          <p className="mt-3 font-sans leading-relaxed text-ink/80">{event.description}</p>
        </li>
      ))}
    </ol>
  );
}
