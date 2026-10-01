"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { catalogProduct, place } from "@/lib/site-content";

const details = [
  ["Nombre", catalogProduct.title],
  ["Origen", place.productOrigen],
  ["Ingredientes", "100% aceite de oliva extra virgen"],
  ["Extracción", "En frío — primera prensada"],
  ["Acidez", "≤ 0,3%"],
  ["Registro sanitario", "C0000226N"],
  ["Vida útil sellada", "12 meses"],
  ["Almacenamiento", "Lugar fresco, seco y protegido de la humedad y la luz. Lejos de fuentes de calor"],
  ["Atributos", "Sin aditivos, 100% natural, vegano, libre de gluten"],
  ["Presentación", "1 L (consultar otras presentaciones)"],
];

function ProductImageLightbox({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#1a1a18]/95"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen del producto ampliada"
      onClick={onClose}
    >
      <div className="flex shrink-0 justify-end px-4 py-3 sm:px-6" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="rounded-sm p-2 text-paper/90 transition-colors hover:bg-white/10"
          aria-label="Cerrar"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <div
        className="relative mx-auto flex min-h-0 flex-1 w-full max-w-3xl items-center justify-center px-6 pb-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-full max-h-[min(78vh,900px)] w-full">
          <Image
            src={catalogProduct.image}
            alt={catalogProduct.imageAlt}
            fill
            className="object-contain"
            sizes="100vw"
            quality={92}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export function ProductPanel() {
  const [contactOpen, setContactOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Ruta de navegación"
        className="border-b border-line bg-[#e8e6e2] font-sans text-[13px] text-ink/75"
      >
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3">
          {catalogProduct.breadcrumbs.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-ink/40" aria-hidden>
                  &gt;
                </span>
              ) : null}
              {index < catalogProduct.breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="transition-colors hover:text-olive">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink/90">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section id="productos" className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-2 lg:items-start lg:py-16">
          <button
            type="button"
            className="group relative flex cursor-zoom-in justify-center border border-line bg-white p-4 shadow-sm lg:cursor-zoom-in"
            onClick={() => setImageOpen(true)}
            aria-label="Ampliar imagen del producto"
          >
            <Image
              src={catalogProduct.image}
              alt={catalogProduct.imageAlt}
              width={900}
              height={1100}
              priority
              className="h-auto w-full max-w-md object-contain mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90"
            />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </button>

          <div className="min-w-0">
            <h1 className="font-display text-xl leading-snug text-olive uppercase tracking-wide sm:text-2xl">
              {catalogProduct.title}
            </h1>

            <p className="mt-3 font-sans text-sm font-medium text-[#3d7a4a]">{catalogProduct.inStockLabel}</p>

            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-ink/80">
              <p>
                Trabajamos con aceitunas de la mejor calidad. El resultado es un aceite de oliva extra virgen, fiel a la
                fruta y equilibrado en aroma y textura.
              </p>
              <p>
                Se elabora con aceitunas verdes recogidas del árbol y obtenidas solo por presión física. En la cocina
                puede ocupar el lugar de otros aceites, con un sabor y un aroma propios.
              </p>
              <p>
                Quienes buscan cuidar su peso suelen encontrarlo un buen aliado. El oleocantal le da una acción
                antiinflamatoria que podría aliviar molestias de articulaciones y músculos. También se le atribuye un
                posible cuidado frente al deterioro mental y propiedades anticancerígenas.
              </p>
              <p>
                Frente a la diabetes tipo II, sus grasas saludables podrían ayudar a regular el azúcar en la sangre y la
                insulina. Hay referencias de una reducción de casos de hasta un 50%. También se asocia con una presión
                arterial más baja, con el control del colesterol y con una humectación natural de la piel.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/salud"
                className="border border-olive bg-olive px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-paper uppercase transition-colors duration-300 hover:bg-olive/90"
              >
                Información nutricional
              </Link>
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="border border-olive bg-transparent px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-olive uppercase transition-colors duration-300 hover:bg-olive hover:text-paper"
              >
                Solicitar información
              </button>
            </div>

            <h2 className="mt-14 font-display text-2xl text-olive">Detalle del producto</h2>
            <dl className="mt-4 divide-y divide-line border-y border-line font-sans">
              {details.map(([label, value]) => (
                <div key={label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="text-[11px] font-semibold tracking-[0.16em] text-olive/70 uppercase">{label}</dt>
                  <dd className="text-ink/90">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ProductImageLightbox open={imageOpen} onClose={() => setImageOpen(false)} />

      {contactOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-h-[90vh] w-full max-w-lg overflow-auto border border-line bg-paper p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl text-olive uppercase">Solicitar información</h2>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="text-[12px] tracking-[0.16em] text-ink/60 uppercase transition-colors hover:text-olive"
              >
                Cerrar
              </button>
            </div>
            <ContactForm productLine="Aceite de Oliva Don Santino" className="mt-8" />
          </div>
        </div>
      ) : null}
    </>
  );
}
