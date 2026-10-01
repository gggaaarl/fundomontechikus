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
    <section className="border-b border-line bg-olive lg:relative lg:min-h-[85vh] lg:overflow-hidden">
      {/* Imagen: en móvil contain (se ve más valle/cielo); en desktop cover a pantalla completa */}
      <div className="relative w-full lg:absolute lg:inset-0 lg:min-h-[85vh]">
        {heroSlides.map((item, i) => (
          <div
            key={item.title}
            className={`relative aspect-[5/4] w-full sm:aspect-[3/2] lg:absolute lg:inset-0 lg:aspect-auto ${
              i === index ? "block" : "hidden lg:block"
            } ${i === index ? "lg:opacity-100" : "lg:pointer-events-none lg:opacity-0"} transition-opacity duration-1000`}
            aria-hidden={i !== index}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={i === 0}
              className="object-contain object-center lg:object-cover lg:object-center"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-olive/30 lg:bg-olive/55" />
          </div>
        ))}
      </div>

      {/* Texto: debajo de la foto en móvil (sin franja blanca); superpuesto al fondo en desktop */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 py-10 sm:px-8 lg:absolute lg:inset-0 lg:justify-end lg:bg-transparent lg:py-24">
        <div className="lg:max-w-3xl">
          <h1 className="font-display text-3xl leading-tight text-paper uppercase sm:text-4xl lg:text-6xl">
            {slide.title}
          </h1>
          <div className="mt-4 space-y-2 font-sans text-base leading-relaxed text-paper/90 sm:mt-6 sm:text-lg">
            {slide.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/catalogo"
              className="border border-paper bg-paper/10 px-6 py-3 text-[11px] tracking-[0.22em] text-paper uppercase backdrop-blur-sm transition-colors hover:bg-paper hover:text-olive sm:px-8 sm:text-[12px]"
            >
              Ver catálogo
            </Link>
            <Link
              href="/#historia"
              className="border border-paper/60 px-6 py-3 text-[11px] tracking-[0.22em] text-paper uppercase transition-colors hover:border-paper hover:bg-paper/10 sm:px-8 sm:text-[12px]"
            >
              Historia
            </Link>
          </div>

          {heroSlides.length > 1 ? (
            <div className="mt-10 flex gap-2">
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
      </div>
    </section>
  );
}
