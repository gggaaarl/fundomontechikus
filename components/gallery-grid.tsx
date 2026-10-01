import Image from "next/image";
import { galleryItems } from "@/lib/site-content";

export function GalleryGrid() {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
      {galleryItems.map((item) => (
        <li key={item.src} className="min-w-0">
          <figure className="flex h-full flex-col overflow-hidden border border-line bg-white shadow-sm">
            <div className="flex min-h-[min(72vw,420px)] items-center justify-center bg-paper p-2 sm:min-h-0 sm:p-0">
              <Image
                src={item.src}
                alt={item.alt}
                width={1400}
                height={1050}
                quality={90}
                className="h-auto w-full max-w-full object-contain sm:aspect-[4/3] sm:object-cover sm:object-center"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
            <figcaption className="border-t border-line px-4 py-3 text-center text-sm text-ink/70">
              {item.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
