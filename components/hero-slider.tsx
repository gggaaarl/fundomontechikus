"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroBrand, heroSlides } from "@/lib/site-content";

const SWIPE_THRESHOLD = 56;
const AUTO_MS = 7000;

function HeroOrnament() {
  return (
    <div className="flex items-center justify-start gap-3">
      <span className="h-px w-10 bg-paper/75 sm:w-14" aria-hidden />
      <span className="flex items-center gap-2" aria-hidden>
        <span className="size-1.5 rounded-full bg-paper" />
        <span className="size-1.5 rounded-full bg-paper" />
        <span className="size-1.5 rounded-full bg-paper" />
      </span>
      <span className="h-px w-10 bg-paper/75 sm:w-14" aria-hidden />
    </div>
  );
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStartX = useRef(0);
  const pointerId = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const slideCount = heroSlides.length;

  const goTo = useCallback((next: number) => {
    setIndex((next + slideCount) % slideCount);
  }, [slideCount]);

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
      className="relative touch-pan-y overflow-hidden border-b border-line bg-olive select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      aria-roledescription="carrusel"
    >
      <div
        className={`flex min-h-[78svh] will-change-transform lg:min-h-[88vh] ${
          isDragging ? "" : "transition-transform duration-500 ease-out"
        }`}
        style={{ transform: `translateX(${translateX})` }}
      >
        {heroSlides.map((item) => (
          <div
            key={item.image}
            className="relative min-h-[78svh] w-full shrink-0 lg:min-h-[88vh]"
          >
            <div className="absolute inset-0 bg-olive">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={item.image === heroSlides[0].image}
                className={
                  item.imageFit === "contain"
                    ? "object-contain object-center p-4 sm:p-8 lg:p-12"
                    : "object-cover object-center"
                }
                sizes="100vw"
                quality={90}
                draggable={false}
              />
            </div>
            <div
              className={`absolute inset-0 ${
                item.showHeroCopy
                  ? "bg-gradient-to-t from-olive/90 via-olive/40 to-olive/20"
                  : "bg-gradient-to-t from-olive/50 via-transparent to-transparent"
              }`}
            />
          </div>
        ))}
      </div>

      <div
        className={`pointer-events-none absolute inset-0 z-20 mx-auto flex max-w-6xl flex-col justify-end px-6 pb-10 pt-24 lg:pb-16 lg:pt-32 ${
          showCopy ? "animate-hero-copy" : ""
        }`}
        key={showCopy ? `copy-${index}` : "copy-empty"}
      >
        {showCopy ? (
          <>
            <HeroOrnament />
            <p className="mt-6 font-display text-4xl tracking-[0.08em] text-paper uppercase sm:text-5xl lg:text-7xl">
              {heroBrand.placeName}
            </p>
            <p className="mt-3 text-[13px] tracking-[0.38em] text-paper/95 uppercase sm:text-sm">
              {heroBrand.tagline}
            </p>
            <div className="pointer-events-auto mt-8 hidden flex-wrap gap-4 sm:flex">
              <Link
                href="/catalogo"
                onPointerDown={(event) => event.stopPropagation()}
                className="border border-paper bg-paper/10 px-8 py-3 text-[12px] tracking-[0.22em] text-paper uppercase backdrop-blur-sm transition-colors hover:bg-paper hover:text-olive"
              >
                Ver catálogo
              </Link>
              <Link
                href="/#historia"
                onPointerDown={(event) => event.stopPropagation()}
                className="border border-paper/60 px-8 py-3 text-[12px] tracking-[0.22em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper/10"
              >
                Historia
              </Link>
            </div>
          </>
        ) : null}

        <div className="pointer-events-auto mt-10 flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={heroSlides[i].image}
              type="button"
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              onPointerDown={(event) => event.stopPropagation()}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "size-2.5 bg-white" : "size-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
