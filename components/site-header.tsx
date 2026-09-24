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
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background">
      <p className="border-b border-line/80 py-2 text-center text-[11px] tracking-[0.22em] text-olive/80 uppercase">
        Valle de Chaparra, Arequipa
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <nav className="hidden flex-1 md:block">
          <Link href="/nosotros" className="text-[13px] tracking-[0.16em] text-olive uppercase hover:text-gold">
            Nosotros
          </Link>
        </nav>
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo.jpg"
            alt="Fundo Montechico"
            width={280}
            height={84}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <nav className="hidden flex-1 text-right md:block">
          <Link href="/" className="text-[13px] tracking-[0.16em] text-olive uppercase hover:text-gold">
            Productos
          </Link>
        </nav>
        <button
          type="button"
          className="text-[12px] tracking-[0.18em] uppercase md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menú
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-line px-6 py-5 text-[13px] tracking-[0.16em] uppercase md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
