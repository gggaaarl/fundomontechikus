type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: readonly Feature[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="font-display text-xl text-olive uppercase">{feature.title}</h3>
          <div className="mt-3 h-px w-10 bg-gold" aria-hidden />
          <p className="mt-4 font-sans leading-relaxed text-ink/80">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
