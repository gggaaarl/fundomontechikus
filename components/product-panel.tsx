"use client";

import Image from "next/image";
import { useState } from "react";

const details = [
  ["Nombre", "Aceite de Oliva Extra Virgen Don Santino"],
  ["Origen", "Valle de Chaparra, Arequipa, Perú"],
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
    <section id="productos" className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-start">
        
        {/* Contenedor de la Imagen del Producto */}
        <div className="relative bg-white p-4 shadow-sm border border-line flex justify-center">
          <Image
            src="/producto_principal.jpeg"
            alt="Botella de Aceite de Oliva Extra Virgen Don Santino Fundo Montechico"
            width={900}
            height={1100}
            priority
            className="h-auto w-full max-w-md object-contain mix-blend-multiply"
          />
        </div>

        {/* Detalles del Producto */}
        <div>
          <p className="text-xs tracking-[0.3em] text-gold font-bold uppercase">
            Productos / Don Santino
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-olive uppercase sm:text-5xl">
            Aceite de Oliva <br />
            <span className="italic text-gold text-3xl sm:text-4xl">Extra Virgen</span> <br />
            Don Santino
          </h2>
          
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80 font-sans">
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
            className="mt-8 border border-olive bg-transparent px-8 py-3 text-[12px] tracking-[0.22em] text-olive uppercase hover:bg-olive hover:text-paper transition-colors duration-300 font-medium"
          >
            Solicitar información
          </button>

          <h3 className="mt-16 font-display text-2xl text-olive">Detalle del producto</h3>
          <dl className="mt-4 divide-y divide-line border-y border-line font-sans">
            {details.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="text-[11px] tracking-[0.16em] text-olive/70 uppercase font-semibold">{label}</dt>
                <dd className="text-ink/90">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Modal de Solicitud de Información */}
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="max-h-[90vh] w-full max-w-lg overflow-auto bg-paper p-8 border border-line shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-display text-3xl text-olive uppercase">Solicitar información</h2>
              <button 
                type="button" 
                onClick={() => setOpen(false)} 
                className="text-[12px] tracking-[0.16em] uppercase text-ink/60 hover:text-olive transition-colors"
              >
                Cerrar
              </button>
            </div>
            <p className="mt-2 text-sm text-gold tracking-widest uppercase font-semibold">Aceite de Oliva Don Santino</p>
            
            {sent ? (
              <div className="mt-8 border border-line bg-white px-6 py-8 text-center">
                <p className="text-olive font-medium text-lg">¡Gracias por tu interés!</p>
                <p className="text-ink/70 mt-2">Recibimos tu solicitud. Fundo Montechico se comunicará contigo pronto.</p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-4 font-sans"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <Field name="nombre" label="Nombre" />
                <Field name="apellidos" label="Apellidos" />
                <Field name="email" label="Email" type="email" />
                <Field name="telefono" label="Teléfono" />
                <label className="grid gap-1 text-sm text-olive font-medium">
                  Comentarios
                  <textarea name="comentarios" rows={3} className="border border-line bg-white px-3 py-2 mt-1 focus:outline-none focus:border-gold transition-colors" />
                </label>
                <label className="flex items-start gap-3 text-sm text-ink/80 mt-2">
                  <input required type="checkbox" className="mt-1 accent-olive" />
                  Acepto que Fundo Montechico use estos datos para responder mi consulta.
                </label>
                <button type="submit" className="mt-4 bg-olive hover:bg-gold transition-colors duration-300 px-4 py-3 text-[12px] tracking-[0.2em] text-paper uppercase font-semibold">
                  Enviar Mensaje
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
    <label className="grid gap-1 text-sm text-olive font-medium">
      {label}
      <input required name={name} type={type} className="border border-line bg-white px-3 py-2 mt-1 focus:outline-none focus:border-gold transition-colors" />
    </label>
  );
}