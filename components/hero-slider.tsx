"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-content";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
      setFadeKey((k) => k + 1);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setIndex(i);
    setFadeKey((k) => k + 1);
  };

  return (
    <section className="relative min-h-[78svh] overflow-hidden border-b border-line lg:min-h-[88vh]">
      {heroSlides.map((item, i) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={item.image}
            alt={i === index ? item.alt : ""}
            fill
            priority={i === 0}
            className={`object-cover object-center ${
              item.image.includes("producto") ? "bg-paper object-contain p-6 lg:object-cover lg:p-0" : ""
            }`}
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-olive/85 via-olive/35 to-olive/25" />
        </div>
      ))}

      <div
        key={fadeKey}
        className="relative z-20 mx-auto flex min-h-[78svh] max-w-6xl animate-hero-copy flex-col justify-end px-6 pb-10 pt-24 lg:min-h-[88vh] lg:pb-16 lg:pt-32"
      >
        <p className="text-[11px] tracking-[0.32em] text-paper/90 uppercase">
          Slide {String(index + 1).padStart(2, "0")}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-paper uppercase sm:text-4xl lg:text-6xl">
          {slide.title}
        </h1>
        <div className="mt-5 max-w-2xl space-y-2 font-sans text-base leading-relaxed text-paper/90 sm:text-lg">
          {slide.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-8 hidden flex-wrap gap-4 sm:flex">
          <Link
            href="/catalogo"
            className="border border-paper bg-paper/10 px-8 py-3 text-[12px] tracking-[0.22em] text-paper uppercase backdrop-blur-sm transition-colors hover:bg-paper hover:text-olive"
          >
            Ver catálogo
          </Link>
          <Link
            href="/#historia"
            className="border border-paper/60 px-8 py-3 text-[12px] tracking-[0.22em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper/10"
          >
            Historia
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={heroSlides[i].image}
              type="button"
              aria-label={`Ir al slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
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
