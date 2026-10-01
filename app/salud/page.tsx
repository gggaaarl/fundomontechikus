import { SaludBenefitRows } from "@/components/salud-benefit-rows";
import { saludCopy } from "@/lib/site-content";

export default function SaludPage() {
  return (
    <main>
      <section className="border-b border-line bg-paper px-6 py-14 text-center sm:py-16">
        <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">{saludCopy.eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl tracking-wide text-olive uppercase sm:text-4xl">
          {saludCopy.title}
        </h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" aria-hidden />
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink/70">
          {saludCopy.intro}
        </p>
      </section>

      <SaludBenefitRows />

      <section className="border-t border-line bg-background px-6 py-10">
        <p className="mx-auto max-w-3xl text-center font-sans text-sm leading-relaxed text-ink/55">
          Información educativa. No sustituye orientación médica o nutricional profesional.
        </p>
      </section>
    </main>
  );
}
