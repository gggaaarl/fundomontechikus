import Image from "next/image";
import { galleryItems } from "@/lib/site-content";

/** Misma proporción y tamaño en todas las celdas (2 columnas, fotos grandes). */
export function GalleryGrid() {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
      {galleryItems.map((item) => (
        <li key={item.src} className="min-w-0">
          <figure className="flex h-full flex-col overflow-hidden border border-line bg-white shadow-sm">
            <Image
              src={item.src}
              alt={item.alt}
              width={1400}
              height={1050}
              quality={90}
              className="aspect-[4/3] w-full object-cover object-center"
              sizes="(max-width: 640px) 100vw, 640px"
            />
            <figcaption className="border-t border-line px-4 py-3 text-center text-sm text-ink/70">
              {item.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
