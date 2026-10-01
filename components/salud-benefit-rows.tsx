import Image from "next/image";
import { saludCopy } from "@/lib/site-content";

const ROW_MIN_LG = "lg:min-h-[22rem] xl:min-h-[27.5rem]";

function BenefitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={`relative aspect-[4/3] w-full sm:aspect-[3/2] lg:aspect-auto ${ROW_MIN_LG}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={88}
      />
    </div>
  );
}

function BenefitText({ title, description }: { title: string; description: string }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center bg-salud-cream px-8 py-12 text-center sm:py-14 lg:px-12 ${ROW_MIN_LG}`}
    >
      <h2 className="font-display text-2xl tracking-wide text-ink uppercase sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-ink/70">
        {description}
      </p>
    </div>
  );
}

/** Cuadrícula tipo El Olivar Beneficios: 50/50 sin gutters, imagen | texto alternado. */
export function SaludBenefitRows() {
  return (
    <div className="bg-white">
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
