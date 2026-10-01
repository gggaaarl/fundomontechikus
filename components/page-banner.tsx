import { SectionHeading } from "@/components/section-heading";

type PageBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="border-b border-line bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
