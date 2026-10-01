"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryItems } from "@/lib/site-content";

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const goPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  }, []);
  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, goPrev, goNext]);

  const active = openIndex !== null ? galleryItems[openIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
        {galleryItems.map((item, index) => (
          <li key={item.src} className="min-w-0">
            <figure className="overflow-hidden border border-line bg-white shadow-sm">
              <button
                type="button"
                className="group relative block w-full overflow-hidden text-left lg:cursor-zoom-in"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar: ${item.alt}`}
              >
                <div className="relative flex min-h-[min(72vw,420px)] items-center justify-center bg-white p-2 lg:min-h-0 lg:aspect-[4/3] lg:p-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1400}
                    height={1050}
                    quality={90}
                    className="h-auto w-full max-w-full object-contain transition-transform duration-300 ease-out lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-center lg:transition-transform lg:duration-300 lg:group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 ease-out max-lg:hidden lg:group-hover:bg-black/30"
                    aria-hidden
                  />
                </div>
              </button>
            </figure>
          </li>
        ))}
      </ul>

      {active && openIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[#1a1a18]/95"
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          onClick={close}
        >
          <div
            className="flex shrink-0 items-center justify-between px-4 py-3 text-paper sm:px-6"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-sm tabular-nums text-paper/80">
              {openIndex + 1} / {galleryItems.length}
            </p>
            <button
              type="button"
              onClick={close}
              className="rounded-sm p-2 text-paper/90 transition-colors hover:bg-white/10 hover:text-paper"
              aria-label="Cerrar galería"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-12 py-4 sm:px-16">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-paper/90 transition-colors hover:bg-white/10 sm:left-4"
              aria-label="Imagen anterior"
            >
              <ChevronIcon direction="left" />
            </button>

            <div
              className="relative h-full max-h-[min(78vh,900px)] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={92}
                priority
              />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-paper/90 transition-colors hover:bg-white/10 sm:right-4"
              aria-label="Imagen siguiente"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="size-8 sm:size-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      {direction === "left" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
