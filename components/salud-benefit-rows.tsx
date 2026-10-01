import Image from "next/image";
import { saludCopy } from "@/lib/site-content";

export function SaludBenefitRows() {
  return (
    <div className="divide-y divide-line border-t border-line">
      {saludCopy.benefits.map((item, index) => {
        const imageFirst = index % 2 === 0;

        const imageBlock = (
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper shadow-sm">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
              quality={88}
            />
          </div>
        );

        const textBlock = (
          <div className="flex flex-col justify-center px-1 py-2 lg:py-8">
            <h2 className="font-display text-2xl tracking-wide text-olive uppercase sm:text-3xl">
              {item.title}
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
            <p className="mt-5 font-sans text-lg leading-relaxed text-ink/80">{item.description}</p>
          </div>
        );

        return (
          <section
            key={item.title}
            className={`section-block ${index % 2 === 1 ? "bg-paper" : "bg-background"}`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
              {imageFirst ? (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
