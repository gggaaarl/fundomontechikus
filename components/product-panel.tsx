"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { catalogProduct, place } from "@/lib/site-content";
import { productNutrition } from "@/lib/product-nutrition";

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

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

type LightboxPayload = {
  src: string;
  alt: string;
  title: string;
  aspectRatio: string;
} | null;

function ImageZoomLightbox({
  payload,
  onClose,
}: {
  payload: LightboxPayload;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);

  const open = payload !== null;

  useEffect(() => {
    if (!open) return;
    setScale(1);
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "+" || event.key === "=") setScale((s) => Math.min(MAX_ZOOM, s + ZOOM_STEP));
      if (event.key === "-") setScale((s) => Math.max(MIN_ZOOM, s - ZOOM_STEP));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const zoomIn = useCallback(() => setScale((s) => Math.min(MAX_ZOOM, s + ZOOM_STEP)), []);
  const zoomOut = useCallback(() => setScale((s) => Math.max(MIN_ZOOM, s - ZOOM_STEP)), []);
  const resetZoom = useCallback(() => setScale(1), []);

  if (!payload) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#1a1a18]/95"
      role="dialog"
      aria-modal="true"
      aria-label={payload.title}
      onClick={onClose}
    >
      <div
        className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="truncate text-sm text-paper/80">{payload.title}</p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={zoomOut}
            className="rounded-sm px-3 py-2 text-lg text-paper/90 hover:bg-white/10"
            aria-label="Alejar"
          >
            −
          </button>
          <span className="min-w-[3.5rem] text-center text-xs tabular-nums text-paper/70">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={zoomIn}
            className="rounded-sm px-3 py-2 text-lg text-paper/90 hover:bg-white/10"
            aria-label="Acercar"
          >
            +
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="ml-1 rounded-sm px-2 py-2 text-[11px] tracking-wide text-paper/70 uppercase hover:bg-white/10"
          >
            Ajustar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 rounded-sm p-2 text-paper/90 hover:bg-white/10"
            aria-label="Cerrar"
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="min-h-0 flex-1 overflow-auto px-4 pb-8"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => {
          event.preventDefault();
          const delta = event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
          setScale((s) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, s + delta)));
        }}
      >
        <div className="flex min-h-full min-w-full items-center justify-center py-4">
          <div
            className="relative origin-center transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${scale})`,
              width: "min(92vw, 720px)",
              aspectRatio: payload.aspectRatio,
            }}
          >
            <Image
              src={payload.src}
              alt={payload.alt}
              fill
              className="object-contain"
              sizes="100vw"
              quality={92}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPanel() {
  const [lightbox, setLightbox] = useState<LightboxPayload>(null);

  const openProduct = () =>
    setLightbox({
      src: catalogProduct.image,
      alt: catalogProduct.imageAlt,
      title: "Imagen del producto",
      aspectRatio: "9 / 11",
    });

  const openLabel = () =>
    setLightbox({
      src: productNutrition.labelImage,
      alt: productNutrition.labelImageAlt,
      title: "Información nutricional — etiqueta",
      aspectRatio: "17.5 / 18.5",
    });

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

      <section id="productos" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-2 lg:items-start lg:py-16">
          <button
            type="button"
            className="group relative flex cursor-zoom-in justify-center border border-line bg-white p-4 shadow-sm"
            onClick={openProduct}
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
            <h1 className="font-display text-xl leading-snug tracking-wide text-olive uppercase sm:text-2xl">
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
              <a
                href="#informacion-nutricional"
                className="border border-olive bg-olive px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-paper uppercase transition-colors duration-300 hover:bg-olive/90"
              >
                Información nutricional
              </a>
              <Link
                href="/salud"
                className="border border-olive bg-transparent px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-olive uppercase transition-colors duration-300 hover:bg-olive hover:text-paper"
              >
                Beneficios para la salud
              </Link>
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

      <section
        id="informacion-nutricional"
        className="scroll-mt-28 border-t border-line bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">Etiqueta</p>
            <h2 className="mt-3 font-display text-3xl text-olive uppercase sm:text-4xl">Información nutricional</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" aria-hidden />
            <p className="mt-6 font-sans text-base text-ink/70">
              Porción: <strong className="font-medium text-olive">{productNutrition.servingSize}</strong>.{" "}
              {productNutrition.servingsPerContainer}.
            </p>
            <p className="mt-3 font-sans text-sm text-ink/65">
              <strong className="text-olive">Ingredientes:</strong> {productNutrition.ingredients}
            </p>
          </div>

          <button
            type="button"
            onClick={openLabel}
            className="group mx-auto mt-10 block w-full max-w-2xl cursor-zoom-in border border-line bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            aria-label="Ampliar etiqueta e información nutricional"
          >
            <Image
              src={productNutrition.labelImage}
              alt={productNutrition.labelImageAlt}
              width={875}
              height={925}
              className="mx-auto h-auto w-full max-w-full object-contain p-2 transition-opacity duration-300 group-hover:opacity-95"
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </button>
        </div>
      </section>

      <ImageZoomLightbox payload={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
