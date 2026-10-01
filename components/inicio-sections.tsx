import Image from "next/image";
import { ChaparraMapSection } from "@/components/chaparra-map-section";
import { FeatureGrid } from "@/components/feature-grid";
import { SectionHeading } from "@/components/section-heading";
import { site, somosCopy, ubicacionCopy } from "@/lib/site-content";

/** Secciones de la página de inicio (misma URL que el logo y el menú «Inicio»). */
export function InicioSections() {
  return (
    <>
      <section id="historia" className="section-block scroll-mt-28 border-t border-line bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Historia"
            title={`Fundo Montechico — desde ${site.historySince}`}
            description="Tradición agrícola en el valle y el camino hacia Don Santino."
          />
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 font-sans text-lg leading-relaxed text-ink/80">
            {somosCopy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-line shadow-sm">
            <Image
              src={somosCopy.image}
              alt={somosCopy.imageAlt}
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 560px"
              quality={90}
            />
          </div>
        </div>
      </section>

      <div id="ubicacion" className="scroll-mt-28">
        <ChaparraMapSection />
      </div>

      <section className="section-block border-t border-line bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <FeatureGrid features={ubicacionCopy.features} />
        </div>
      </section>

      <section id="video" className="section-block scroll-mt-28 border-t border-line bg-paper">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Video"
            title="Conoce el fundo"
            description="Un recorrido por nuestro vivero y el fundo."
          />
          <div className="mt-12 aspect-video w-full overflow-hidden">
            <iframe
              className="h-full w-full"
              src={site.video.embedUrl}
              title={site.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
