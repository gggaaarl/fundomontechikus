import Image from "next/image";
import Link from "next/link";
import { mapSectionBackground, place, site, ubicacionCopy } from "@/lib/site-content";

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
            title={`Mapa de ${site.map.placeName}`}
            src={site.map.embedUrl}
            className="h-[min(420px,70vw)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-center">
          <Link
            href={site.map.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-olive underline-offset-2 hover:text-gold hover:underline"
          >
            Abrir {site.map.placeName} en Google Maps
          </Link>
        </p>

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
          <p className="max-w-xl font-sans text-base text-ink/75">{place.speech}</p>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-lg leading-relaxed text-ink/80">
          {ubicacionCopy.intro}
        </p>
      </div>
    </section>
  );
}
