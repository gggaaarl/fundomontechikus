import Image from "next/image";
import { productNutrition } from "@/lib/product-nutrition";

export function NutritionPanel() {
  return (
    <div className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">Etiqueta</p>
          <h3 className="mt-3 font-display text-3xl text-olive uppercase sm:text-4xl">Información nutricional</h3>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          <p className="mt-6 font-sans text-base text-ink/70">
            Valores por porción según el envase Don Santino. Porción:{" "}
            <strong className="font-medium text-olive">{productNutrition.servingSize}</strong>.{" "}
            {productNutrition.servingsPerContainer}.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden border border-line bg-white shadow-sm">
            <div className="border-b border-line bg-olive px-5 py-4">
              <p className="text-center font-display text-lg tracking-wide text-paper uppercase">
                Tabla nutricional
              </p>
              <p className="mt-1 text-center text-[11px] tracking-[0.14em] text-paper/75 uppercase">
                Por porción · % valor diario*
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[280px] font-sans text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper/80 text-left text-[11px] tracking-[0.12em] text-olive/80 uppercase">
                    <th className="px-5 py-3 font-semibold">Nutriente</th>
                    <th className="px-5 py-3 font-semibold">Cantidad</th>
                    <th className="px-5 py-3 font-semibold text-right">V.D.</th>
                  </tr>
                </thead>
                <tbody>
                  {productNutrition.rows.map((row, index) => (
                    <tr
                      key={row.nutrient}
                      className={index % 2 === 0 ? "bg-white" : "bg-paper/50"}
                    >
                      <td className="px-5 py-3 text-ink/90">{row.nutrient}</td>
                      <td className="px-5 py-3 text-ink/80">{row.amount}</td>
                      <td className="px-5 py-3 text-right text-ink/70">{row.dailyValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-3 border-t border-line px-5 py-5 text-sm leading-relaxed text-ink/80">
              <p>
                <span className="font-semibold text-olive">Ingredientes: </span>
                {productNutrition.ingredients}
              </p>
              <p>
                <span className="font-semibold text-olive">Conservación: </span>
                {productNutrition.storage}
              </p>
              <p className="text-[11px] leading-relaxed text-ink/55">
                * Porcentaje de valores diarios basado en una dieta de 2000 kcal. Sus valores diarios pueden ser
                mayores o menores según sus necesidades calóricas.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden border border-line bg-white p-3 shadow-sm">
            <div className="relative aspect-[17.5/18.5] w-full bg-paper">
              <Image
                src={productNutrition.labelImage}
                alt={productNutrition.labelImageAlt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 text-center font-sans text-xs tracking-wide text-ink/60">
              Arte de etiqueta Don Santino — Fundo Montechico
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
