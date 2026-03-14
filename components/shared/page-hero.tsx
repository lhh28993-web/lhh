import type { Stat } from "@/types/content";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Stat[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
}: PageHeroProps) {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.96),rgba(8,11,16,0.98))] px-6 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.26)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,178,255,0.7),transparent)]" />
          <div className="absolute right-[-12%] top-[-18%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(87,148,255,0.28),transparent_66%)] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">
                {eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                {description}
              </p>
            </div>

            {stats.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/90">
                      {stat.label}
                    </p>
                    {stat.note ? (
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {stat.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
