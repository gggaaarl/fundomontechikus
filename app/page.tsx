import { HeroSlider } from "@/components/hero-slider";
import { InicioSections } from "@/components/inicio-sections";

export default function HomePage() {
  return (
    <main className="flex w-full flex-col">
      <HeroSlider />
      <InicioSections />
    </main>
  );
}
