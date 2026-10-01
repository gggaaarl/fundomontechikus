"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site-content";

const allLinks = [...navLinks.primary, ...navLinks.secondary];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden>
      <span
        className={`absolute left-0 top-0.5 block h-0.5 w-6 bg-olive transition-all duration-300 lg:bg-olive ${
          open ? "top-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-0.5 w-6 bg-olive transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-3.5 block h-0.5 w-6 bg-olive transition-all duration-300 ${
          open ? "top-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        {/* Desktop */}
        <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:flex">
          <nav className="flex flex-1 items-center gap-6">
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
          <Link href="/" className="flex shrink-0 justify-center">
            <div className="relative mix-blend-multiply">
              <Image
                src="/logo_nuevo.jpeg"
                alt={site.name}
                width={160}
                height={160}
                priority
                className="h-20 w-auto object-contain md:h-24"
              />
            </div>
          </Link>
          <nav className="flex flex-1 items-center justify-end gap-6">
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
        </div>

        {/* Mobile: logo centrado + hamburguesa */}
        <div className="relative flex items-center justify-center px-4 py-3 lg:hidden">
          <Link href="/" className="flex justify-center" onClick={() => setOpen(false)}>
            <Image
              src="/logo_nuevo.jpeg"
              alt={site.name}
              width={140}
              height={140}
              priority
              className="h-14 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* Menú pantalla completa (mobile) */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-olive transition-all duration-500 ease-out lg:hidden ${
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-end px-5 pt-5">
          <button
            type="button"
            className="p-2"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <span className="relative block h-5 w-6" aria-hidden>
              <span className="absolute left-0 top-2 block h-0.5 w-6 rotate-45 bg-paper" />
              <span className="absolute left-0 top-2 block h-0.5 w-6 -rotate-45 bg-paper" />
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-8 pb-16">
          <nav className="flex w-full max-w-xs flex-col gap-6 text-center">
            {allLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-display text-2xl tracking-[0.12em] text-paper uppercase transition-all duration-500 hover:text-gold ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
