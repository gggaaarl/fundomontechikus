type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-bold tracking-[0.3em] text-gold uppercase">{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display text-3xl tracking-wide text-olive uppercase sm:text-4xl ${
          eyebrow ? "mt-3" : ""
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-px bg-gold ${centered ? "mx-auto w-16" : "w-16"}`}
        aria-hidden
      />
      {description ? (
        <p
          className={`mt-6 font-sans text-lg leading-relaxed text-ink/70 ${
            centered ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
