"use client";

import Image from "next/image";
import { useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { NutritionPanel } from "@/components/nutrition-panel";
import { Timeline } from "@/components/timeline";
import { place } from "@/lib/site-content";

const details = [
  ["Nombre", "Aceite de Oliva Extra Virgen Don Santino"],
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

export function ProductPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="productos" className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-start">
          <div className="relative flex justify-center border border-line bg-white p-4 shadow-sm">
            <Image
              src="/producto_principal.jpeg"
              alt="Botella de Aceite de Oliva Extra Virgen Don Santino Fundo Montechico"
              width={900}
              height={1100}
              priority
              className="h-auto w-full max-w-md object-contain mix-blend-multiply"
            />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">Productos / Don Santino</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-olive uppercase sm:text-5xl">
              Aceite de Oliva <br />
              <span className="text-3xl text-gold italic sm:text-4xl">Extra Virgen</span> <br />
              Don Santino
            </h1>

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

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-8 border border-olive bg-transparent px-8 py-3 text-[12px] font-medium tracking-[0.22em] text-olive uppercase transition-colors duration-300 hover:bg-olive hover:text-paper"
            >
              Solicitar información
            </button>

            <h2 className="mt-16 font-display text-2xl text-olive">Detalle del producto</h2>
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

      <NutritionPanel />

      <section className="border-t border-line bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">Nuestro proceso</p>
            <h2 className="mt-3 font-display text-3xl text-olive uppercase sm:text-4xl">Del olivo a Don Santino</h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 font-sans text-base text-ink/70">
              Etapas clave en la elaboración de nuestro aceite de oliva extra virgen.
            </p>
          </div>
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {open ? (
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
                onClick={() => setOpen(false)}
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
