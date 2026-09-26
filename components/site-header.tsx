"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/site-content";

const allLinks = [...navLinks.primary, ...navLinks.secondary];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <p className="border-b border-line py-2 text-center text-[11px] tracking-[0.22em] text-olive/80 uppercase font-sans">
        {site.locationLine}
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {navLinks.primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] tracking-[0.14em] text-olive uppercase transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="flex shrink-0 justify-center lg:flex-1">
          <div className="relative mix-blend-multiply">
            <Image
              src="/logo_nuevo.jpeg"
              alt={site.name}
              width={160}
              height={160}
              priority
              className="h-16 w-auto object-contain sm:h-20 md:h-24"
            />
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          {navLinks.secondary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] tracking-[0.14em] text-olive uppercase transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-[12px] tracking-[0.18em] text-olive uppercase lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-4 border-t border-line bg-paper px-6 py-5 text-[13px] tracking-[0.16em] uppercase shadow-sm lg:hidden">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-olive transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
