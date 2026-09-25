"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/", label: "Productos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <p className="border-b border-line py-2 text-center text-[11px] tracking-[0.22em] text-olive/80 uppercase font-sans">
        Valle de Chaparra, Arequipa
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        
        {/* Navegación Izquierda */}
        <nav className="hidden flex-1 md:block">
          <Link href="/nosotros" className="text-[13px] tracking-[0.16em] text-olive uppercase hover:text-gold transition-colors duration-300">
            Nosotros
          </Link>
        </nav>
        
        {/* Logo Central */}
        <Link href="/" className="shrink-0 flex-1 flex justify-center">
          <div className="relative mix-blend-multiply">
            <Image
              src="/logo_nuevo.jpeg"
              alt="Fundo Montechico"
              width={100}
              height={100}
              priority
              className="h-14 w-auto sm:h-16 object-contain"
            />
          </div>
        </Link>
        
        {/* Navegación Derecha */}
        <nav className="hidden flex-1 text-right md:block">
          <Link href="/" className="text-[13px] tracking-[0.16em] text-olive uppercase hover:text-gold transition-colors duration-300">
            Productos
          </Link>
        </nav>
        
        {/* Botón Móvil */}
        <button
          type="button"
          className="text-[12px] tracking-[0.18em] uppercase text-olive md:hidden flex-1 text-right"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      
      {/* Menú Desplegable Móvil */}
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-line bg-paper px-6 py-5 text-[13px] tracking-[0.16em] uppercase md:hidden shadow-sm">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setOpen(false)}
              className="text-olive hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}