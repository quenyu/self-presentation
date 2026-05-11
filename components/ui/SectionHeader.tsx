type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 flex w-full max-w-6xl flex-col gap-4 md:mb-14">
      <div className="font-mono text-xs uppercase text-cyan/80">{eyebrow}</div>
      <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-end">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-pretty text-base leading-7 text-zinc-400 md:justify-self-end md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
