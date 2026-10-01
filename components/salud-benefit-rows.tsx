import Image from "next/image";
import { saludCopy } from "@/lib/site-content";

const ROW_MIN_LG = "lg:min-h-[22rem] xl:min-h-[27.5rem]";

function BenefitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={`relative aspect-square w-full lg:aspect-auto ${ROW_MIN_LG}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 50vw, 50vw"
        quality={88}
      />
    </div>
  );
}

function BenefitText({ title, description }: { title: string; description: string }) {
  return (
    <div
      className={`flex aspect-square w-full flex-col items-center justify-center bg-salud-cream px-3 py-5 text-center sm:px-5 lg:aspect-auto lg:px-12 lg:py-14 ${ROW_MIN_LG}`}
    >
      <h2 className="font-display text-2xl leading-tight tracking-wide text-ink uppercase sm:text-3xl lg:text-[2rem]">
        {title}
      </h2>
      <p className="mt-3 max-w-md font-sans text-base leading-snug text-ink/75 sm:mt-4 sm:text-lg lg:leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/** Grid 50/50 en todos los breakpoints (bento); en desktop filas más altas. */
export function SaludBenefitRows() {
  return (
    <div className="bg-white">
      {saludCopy.benefits.map((item, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <div key={item.title} className="grid grid-cols-2">
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
