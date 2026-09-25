export default function NosotrosPage() {
  return (
    <main className="w-full bg-background py-20 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        
        {/* Título y Decoración */}
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] text-gold font-bold uppercase">
            Nuestra Historia
          </p>
          <h1 className="font-display text-5xl leading-tight text-olive uppercase sm:text-6xl">
            Nosotros
          </h1>
          <div className="w-16 h-[2px] bg-gold"></div>
        </div>

        {/* Texto Descriptivo */}
        <div className="max-w-lg text-lg leading-relaxed text-ink/80 font-sans space-y-6 border-l border-line pl-6 lg:pl-10">
          <p>
            <strong className="text-olive font-semibold">Fundo Montechico</strong> elabora aceite de oliva extra virgen en el Valle de Chaparra, Arequipa. La aceituna se
            elige en el fundo y el aceite sale de una presión física, sin mezclas.
          </p>
          <p>
            El resultado es un aceite auténtico, pensado para la mesa y para la cocina diaria.
          </p>
        </div>

      </div>
    </main>
  );
}