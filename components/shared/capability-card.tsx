import type { Capability } from "@/types/content";

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="group rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(16,22,31,0.92),rgba(10,13,19,0.96))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(128,176,255,0.32)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
            {capability.label}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
            {capability.title}
          </h3>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: 4 }).map((_, index) => (
            <span
              key={`${capability.title}-${index + 1}`}
              className={`h-2.5 w-6 rounded-full ${
                index < capability.level
                  ? "bg-[linear-gradient(90deg,#8dbbff,#3f8cff)]"
                  : "bg-[rgba(255,255,255,0.08)]"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        {capability.summary}
      </p>

      <ul className="mt-6 space-y-3">
        {capability.details.map((detail) => (
          <li key={detail} className="flex items-start gap-3 text-sm text-white/92">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
