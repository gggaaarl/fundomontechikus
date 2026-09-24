"use client";

import Image from "next/image";
import { useState } from "react";

const details = [
  ["Nombre", "Aceite de Oliva Extra Virgen"],
  ["Origen", "Arequipa, Perú"],
  ["Ingredientes", "Aceituna seleccionada"],
  ["Registro sanitario", "C0000226N"],
  ["Vida útil sellada", "12 meses"],
  ["Almacenamiento", "Lugar fresco, seco y protegido de la humedad. Lejos de fuentes de calor"],
  ["Atributos", "Libre de lácteos, libre de gluten, vegano"],
];

export function ProductPanel() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <section id="productos" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-start">
        <Image
          src="/brand/producto.jpg"
          alt="Botella de Aceite de Oliva Extra Virgen Fundo Montechico"
          width={900}
          height={1100}
          className="h-auto w-full"
        />

        <div>
          <p className="text-sm text-olive/70">Productos / Aceite de Oliva Extra Virgen</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-olive uppercase sm:text-5xl">
            Aceite de oliva extra virgen
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
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
            onClick={() => {
              setSent(false);
              setOpen(true);
            }}
            className="mt-8 border border-olive px-8 py-3 text-[12px] tracking-[0.22em] text-olive uppercase hover:bg-olive hover:text-paper"
          >
            Solicitar información
          </button>

          <h3 className="mt-12 font-display text-2xl text-olive">Detalle del producto</h3>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {details.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="text-[11px] tracking-[0.16em] text-olive/60 uppercase">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-4" role="dialog" aria-modal="true">
          <div className="max-h-[90vh] w-full max-w-lg overflow-auto bg-paper p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl text-olive uppercase">Solicitar información</h2>
              <button type="button" onClick={() => setOpen(false)} className="text-[12px] tracking-[0.16em] uppercase">
                Cerrar
              </button>
            </div>
            <p className="mt-2 text-sm text-ink/70">Aceite de Oliva Extra Virgen</p>
            {sent ? (
              <p className="mt-8 border border-line px-4 py-6 text-olive">
                Recibimos tu solicitud. Fundo Montechico te escribirá pronto.
              </p>
            ) : (
              <form
                className="mt-6 grid gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <Field name="nombre" label="Nombre" />
                <Field name="apellidos" label="Apellidos" />
                <Field name="email" label="Email" type="email" />
                <Field name="telefono" label="Teléfono" />
                <label className="grid gap-1 text-sm">
                  Comentarios
                  <textarea name="comentarios" rows={3} className="border border-line px-3 py-2" />
                </label>
                <label className="flex items-start gap-2 text-sm">
                  <input required type="checkbox" className="mt-1" />
                  Acepto que Fundo Montechico use estos datos para responder mi consulta.
                </label>
                <button type="submit" className="mt-2 bg-olive px-4 py-3 text-[12px] tracking-[0.2em] text-paper uppercase">
                  Enviar
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <label className="grid gap-1 text-sm">
      {label}
      <input required name={name} type={type} className="border border-line px-3 py-2" />
    </label>
  );
}
