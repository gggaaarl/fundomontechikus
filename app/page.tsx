import { ProductPanel } from "@/components/product-panel";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col">
      
      {/* PANEL PRINCIPAL DEL PRODUCTO */}
      <ProductPanel />

      {/* SECCIÓN ACERCA DE NOSOTROS (CON VIDEO) */}
      <section className="bg-paper border-t border-line py-24">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl text-olive tracking-wide">
              Acerca de Nosotros
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto"></div>
            <p className="text-ink/70 max-w-2xl mx-auto font-sans text-lg">
              Conoce nuestro vivero en el Valle de Chaparra y descubre la tradición agrícola detrás de Fundo Montechico.
            </p>
          </div>

          <div className="aspect-video w-full bg-line shadow-sm border border-line rounded-sm overflow-hidden p-2 bg-white">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NGp9IKwggiI"
              title="CHAPARRA ACHANIZO VIVERO FUNDO MONTECHICO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
        </div>
      </section>

    </main>
  );
}