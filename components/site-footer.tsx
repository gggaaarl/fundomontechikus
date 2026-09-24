import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Image src="/brand/logo.jpg" alt="Fundo Montechico" width={220} height={66} className="h-12 w-auto" />
        <p className="mt-4 text-sm text-ink/70">Valle de Chaparra, Arequipa, Perú</p>
      </div>
      <p className="border-t border-line px-6 py-4 text-center text-[11px] tracking-[0.18em] text-olive/60 uppercase">
        © 2026 Fundo Montechico
      </p>
    </footer>
  );
}
