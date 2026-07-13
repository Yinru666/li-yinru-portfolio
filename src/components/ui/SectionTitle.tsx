type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <p className="editorial-caption text-teal-300">
        {eyebrow}
      </p>
      <Heading className="mt-3 text-3xl font-semibold tracking-normal text-slate-50 sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 max-w-3xl text-balance text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
