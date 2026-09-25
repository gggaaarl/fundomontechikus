import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-olive text-paper border-t border-line mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Logo e Información */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-white p-2 mb-4 inline-block rounded-sm shadow-sm">
            <Image 
              src="/logo_nuevo.jpeg" 
              alt="Fundo Montechico" 
              width={120} 
              height={120} 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <p className="mt-2 text-sm text-paper/80 font-sans tracking-wide">
            Valle de Chaparra, Arequipa, Perú
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center md:items-end h-full mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61592874851778&locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold transition-colors duration-300 group"
          >
            <span className="text-[11px] tracking-[0.18em] uppercase font-sans text-paper/80 group-hover:text-gold">
              Síguenos en
            </span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>

      </div>
      
      {/* Copyright */}
      <p className="border-t border-white/10 px-6 py-4 text-center text-[11px] tracking-[0.18em] text-paper/60 uppercase font-sans">
        © {new Date().getFullYear()} Fundo Montechico
      </p>
    </footer>
  );
}
