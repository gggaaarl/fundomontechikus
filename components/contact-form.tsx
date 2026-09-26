"use client";

import { useState } from "react";

type ContactFormProps = {
  productLine?: string;
  className?: string;
};

export function ContactForm({ productLine, className = "" }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={`border border-line bg-white px-6 py-8 text-center ${className}`}>
        <p className="text-lg font-medium text-olive">¡Gracias por tu interés!</p>
        <p className="mt-2 text-ink/70">
          Recibimos tu solicitud. Fundo Montechico se comunicará contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      className={`grid gap-4 font-sans ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {productLine ? (
        <p className="text-sm font-semibold tracking-widest text-gold uppercase">{productLine}</p>
      ) : null}
      <Field name="nombre" label="Nombre" />
      <Field name="apellidos" label="Apellidos" />
      <Field name="email" label="Email" type="email" />
      <Field name="telefono" label="Teléfono" />
      <label className="grid gap-1 text-sm font-medium text-olive">
        Comentarios
        <textarea
          name="comentarios"
          rows={3}
          className="mt-1 border border-line bg-white px-3 py-2 transition-colors focus:border-gold focus:outline-none"
        />
      </label>
      <label className="mt-2 flex items-start gap-3 text-sm text-ink/80">
        <input required type="checkbox" className="mt-1 accent-olive" />
        Acepto que Fundo Montechico use estos datos para responder mi consulta.
      </label>
      <button
        type="submit"
        className="mt-4 bg-olive px-4 py-3 text-[12px] font-semibold tracking-[0.2em] text-paper uppercase transition-colors duration-300 hover:bg-gold"
      >
        Enviar mensaje
      </button>
    </form>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <label className="grid gap-1 text-sm font-medium text-olive">
      {label}
      <input
        required
        name={name}
        type={type}
        className="mt-1 border border-line bg-white px-3 py-2 transition-colors focus:border-gold focus:outline-none"
      />
    </label>
  );
}
