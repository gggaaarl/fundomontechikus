import Image from "next/image";
import { saludCopy } from "@/lib/site-content";

function BenefitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative min-h-[240px] w-full lg:min-h-[min(36vw,440px)]">
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" quality={88} />
    </div>
  );
}

function BenefitText({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[240px] w-full flex-col items-center justify-center bg-salud-cream px-8 py-14 text-center lg:min-h-[min(36vw,440px)] lg:px-12">
      <h2 className="font-display text-2xl tracking-wide text-ink uppercase sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-ink/65 sm:text-base">
        {description}
      </p>
    </div>
  );
}

/** Cuadrícula tipo El Olivar Beneficios: 50/50 sin gutters, imagen | texto alternado. */
export function SaludBenefitRows() {
  return (
    <div>
      {saludCopy.benefits.map((item, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <div key={item.title} className="grid grid-cols-1 lg:grid-cols-2">
            {imageFirst ? (
              <>
                <BenefitImage src={item.image} alt={item.imageAlt} />
                <BenefitText title={item.title} description={item.description} />
              </>
            ) : (
              <>
                <BenefitText title={item.title} description={item.description} />
                <BenefitImage src={item.image} alt={item.imageAlt} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
