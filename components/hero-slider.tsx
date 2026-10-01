"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-content";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line lg:min-h-[85vh]">
      {/* Fondo: altura fija en móvil para que object-cover no deforme/recorte al crecer el texto */}
      <div className="absolute inset-x-0 top-0 z-0 h-[52svh] min-h-[300px] max-h-[440px] lg:inset-0 lg:h-auto lg:max-h-none lg:min-h-[85vh]">
        {heroSlides.map((item, i) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={i === 0}
              className="object-cover object-[center_35%] sm:object-[center_40%] lg:object-center"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-olive/45 lg:bg-olive/55" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-olive/90 via-olive/50 to-transparent lg:h-40"
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-6 pb-12 pt-[calc(52svh-8rem)] min-[480px]:pt-[calc(52svh-6rem)] sm:px-8 lg:min-h-[85vh] lg:px-6 lg:py-24">
        <h1 className="max-w-3xl font-display text-4xl leading-tight text-paper uppercase sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>
        <div className="mt-6 max-w-2xl space-y-2 font-sans text-base leading-relaxed text-paper/90 sm:text-lg">
          {slide.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
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

        {heroSlides.length > 1 ? (
          <div className="mt-12 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={heroSlides[i].title}
                type="button"
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-10 transition-colors ${
                  i === index ? "bg-gold" : "bg-paper/40 hover:bg-paper/70"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
