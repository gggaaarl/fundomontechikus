import { GalleryGrid } from "@/components/gallery-grid";
import { PageBanner } from "@/components/page-banner";

export default function GaleriaPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Galería"
        title="Imágenes del fundo"
        description="Imágenes del fundo y del valle."
      />
      <section className="section-block bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
