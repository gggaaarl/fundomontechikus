import Image from "next/image";
import { mapSectionBackground, ubicacionCopy } from "@/lib/site-content";

const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=-74.42%2C-15.82%2C-74.28%2C-15.68&layer=mapnik&marker=-15.75%2C-74.35";

export function ChaparraMapSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src={mapSectionBackground}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-paper/65" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-line/80 bg-white/95 shadow-xl backdrop-blur-sm">
          <iframe
            title="Mapa del Valle de Chaparra, provincia de Caravelí, Arequipa"
            src={MAP_EMBED}
            className="h-[min(420px,70vw)] w-full border-0 grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-olive"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
              />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <h2 className="font-display text-3xl text-olive uppercase sm:text-4xl">Ubicación</h2>
          </div>
          <p className="max-w-xl font-sans text-base text-ink/75">
            Valle de Chaparra, distrito de Chaparra, provincia de Caravelí, Arequipa, Perú.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-lg leading-relaxed text-ink/80">
          {ubicacionCopy.intro}
        </p>
      </div>
    </section>
  );
}
