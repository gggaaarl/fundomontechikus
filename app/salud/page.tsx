import { PageBanner } from "@/components/page-banner";
import { SaludBenefitRows } from "@/components/salud-benefit-rows";
import { saludCopy } from "@/lib/site-content";

export default function SaludPage() {
  return (
    <main>
      <PageBanner
        eyebrow={saludCopy.eyebrow}
        title={saludCopy.title}
        description={saludCopy.intro}
      />
      <SaludBenefitRows />
      <section className="border-t border-line bg-background px-6 py-10">
        <p className="mx-auto max-w-3xl text-center font-sans text-sm leading-relaxed text-ink/60">
          La información tiene fines educativos y no reemplaza consejo médico o nutricional
          profesional. Consuma aceite de oliva como parte de una dieta variada y un estilo de vida
          activo.
        </p>
      </section>
    </main>
  );
}
