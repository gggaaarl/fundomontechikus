import Link from "next/link";
import { homeTeasers } from "@/lib/site-content";

export function HomeTeasers() {
  return (
    <section className="border-t border-line bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {homeTeasers.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group border border-line bg-white p-8 shadow-sm transition-all hover:border-gold/50 hover:shadow-md"
          >
            <h2 className="font-display text-2xl text-olive uppercase group-hover:text-gold">{item.title}</h2>
            <div className="mt-3 h-px w-10 bg-gold" />
            <p className="mt-4 font-sans leading-relaxed text-ink/75">{item.description}</p>
            <span className="mt-6 inline-block text-[11px] tracking-[0.2em] text-olive/70 uppercase group-hover:text-gold">
              Ver más →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
