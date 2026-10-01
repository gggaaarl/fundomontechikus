"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroBrand, heroSlides } from "@/lib/site-content";

const SWIPE_THRESHOLD = 56;
const AUTO_MS = 7000;

/** Altura tipo Incahuasi móvil (~45% viewport), un poco más en desktop */
const HERO_HEIGHT =
  "h-[44svh] max-h-[420px] min-h-[220px] sm:h-[46svh] sm:max-h-[460px] lg:h-[56vh] lg:max-h-[560px]";

function HeroOrnament() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-paper/75 sm:w-12" aria-hidden />
      <span className="flex items-center gap-1.5" aria-hidden>
        <span className="size-1 rounded-full bg-paper" />
        <span className="size-1 rounded-full bg-paper" />
        <span className="size-1 rounded-full bg-paper" />
      </span>
      <span className="h-px w-8 bg-paper/75 sm:w-12" aria-hidden />
    </div>
  );
}

function slideImageClass(item: (typeof heroSlides)[number]) {
  if (item.imageFit === "contain") {
    const pad =
      "slideBackground" in item && item.slideBackground === "white"
        ? "p-2 sm:p-4"
        : "p-3 sm:p-5 lg:p-8";
    return `object-contain object-center ${pad}`;
  }
  if ("desktopImageFit" in item && item.desktopImageFit === "contain") {
    return "object-cover object-center lg:object-contain lg:p-8";
  }
  return "object-cover";
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStartX = useRef(0);
  const pointerId = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const slideCount = heroSlides.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isDragging) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [isDragging, slideCount]);

  const finishDrag = useCallback(
    (deltaX: number) => {
      if (deltaX <= -SWIPE_THRESHOLD) goNext();
      else if (deltaX >= SWIPE_THRESHOLD) goPrev();
      setDragOffset(0);
      setIsDragging(false);
      pointerId.current = null;
    },
    [goNext, goPrev],
  );

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStartX.current = event.clientX;
    pointerId.current = event.pointerId;
    setIsDragging(true);
    sectionRef.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (!isDragging || pointerId.current !== event.pointerId) return;
    setDragOffset(event.clientX - pointerStartX.current);
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (pointerId.current !== event.pointerId) return;
    sectionRef.current?.releasePointerCapture(event.pointerId);
    finishDrag(event.clientX - pointerStartX.current);
  };

  const onPointerCancel = (event: React.PointerEvent) => {
    if (pointerId.current !== event.pointerId) return;
    finishDrag(0);
  };

  const translateX = `calc(-${index * 100}% + ${dragOffset}px)`;
  const showCopy = heroSlides[index].showHeroCopy;

  return (
    <section
      ref={sectionRef}
      className={`relative touch-pan-y overflow-hidden border-b border-line bg-paper select-none ${HERO_HEIGHT}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      aria-roledescription="carrusel"
    >
      <div
        className={`flex h-full will-change-transform ${
          isDragging ? "" : "transition-transform duration-500 ease-out"
        }`}
        style={{ transform: `translateX(${translateX})` }}
      >
        {heroSlides.map((item) => {
          const slideBg =
            "slideBackground" in item && item.slideBackground === "white"
              ? "bg-white"
              : "bg-paper";
          const hasDesktopContain =
            "desktopImageFit" in item && item.desktopImageFit === "contain";
          const showOverlay = item.showHeroCopy || item.imageFit === "cover";
          const overlayResponsive = hasDesktopContain ? "lg:hidden" : "";

          return (
          <div key={item.image} className="relative h-full w-full shrink-0">
            <div className={`absolute inset-0 ${slideBg}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={item.image === heroSlides[0].image}
                className={slideImageClass(item)}
                style={
                  item.imageFit === "cover" && "objectPosition" in item
                    ? { objectPosition: item.objectPosition }
                    : undefined
                }
                sizes="100vw"
                quality={90}
                draggable={false}
              />
            </div>
            {showOverlay ? (
            <div
              className={`absolute inset-0 ${overlayResponsive} ${
                item.showHeroCopy
                  ? "bg-gradient-to-t from-black/75 via-black/25 to-black/5"
                  : "bg-gradient-to-t from-black/35 via-transparent to-transparent"
              }`}
            />
            ) : null}
          </div>
          );
        })}
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-20 mx-auto flex h-full max-w-6xl flex-col items-center justify-end px-5 pb-6 pt-16 text-center sm:pb-8 lg:pb-10 ${
          showCopy ? "animate-hero-copy" : ""
        }`}
        key={showCopy ? `copy-${index}` : "copy-empty"}
      >
        {showCopy ? (
          <>
            <p className="font-display text-3xl tracking-[0.06em] text-paper uppercase italic sm:text-4xl lg:text-5xl">
              {heroBrand.placeName}
            </p>
            <p className="mt-2 font-sans text-[12px] tracking-[0.22em] text-paper/95 uppercase sm:text-[13px]">
              {heroBrand.tagline}
            </p>
            <div className="mt-4">
              <HeroOrnament />
            </div>
            <div className="pointer-events-auto mt-5 hidden flex-wrap justify-center gap-3 sm:flex">
              <Link
                href="/catalogo"
                onPointerDown={(event) => event.stopPropagation()}
                className="border border-paper/90 bg-black/20 px-6 py-2.5 text-[11px] tracking-[0.2em] text-paper uppercase backdrop-blur-sm transition-colors hover:bg-paper hover:text-ink"
              >
                Ver catálogo
              </Link>
              <Link
                href="/#historia"
                onPointerDown={(event) => event.stopPropagation()}
                className="border border-paper/60 px-6 py-2.5 text-[11px] tracking-[0.2em] text-paper uppercase transition-colors hover:border-paper hover:bg-black/15"
              >
                Historia
              </Link>
            </div>
          </>
        ) : null}

        <div
          className={`pointer-events-auto flex items-center justify-center gap-2.5 ${
            showCopy ? "mt-5" : "mt-auto pb-1"
          }`}
        >
          {heroSlides.map((_, i) => (
            <button
              key={heroSlides[i].image}
              type="button"
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              onPointerDown={(event) => event.stopPropagation()}
              className={`rounded-full border border-white/80 transition-all duration-300 ${
                i === index ? "size-2.5 bg-white" : "size-2 bg-transparent hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
