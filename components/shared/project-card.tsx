import Image from "next/image";

import type { Project } from "@/types/content";

export function ProjectCard({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <article className="group rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(11,15,22,0.96),rgba(8,10,15,0.98))] p-4 shadow-[0_24px_50px_rgba(0,0,0,0.24)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(129,177,255,0.32)] sm:p-5">
      <div
        className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)]"
        style={{
          background: `linear-gradient(135deg, ${project.palette.from}, ${project.palette.to})`,
        }}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes={compact ? "(min-width: 1280px) 30vw, 100vw" : "(min-width: 1280px) 46vw, 100vw"}
            className="object-cover object-center opacity-90 transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,16,0.08),rgba(6,10,16,0.18)_30%,rgba(4,8,12,0.82)_100%)]" />
        <div
          className="absolute right-[-16%] top-[-24%] h-36 w-36 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${project.palette.accent}55, transparent 68%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/90">
              {project.category}
            </span>
            <span className="text-xs text-white/70">{project.duration}</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="mt-10 text-xs uppercase tracking-[0.28em] text-white/60">
            Outcome
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            {project.coverMetric}
          </p>
        </div>
      </div>

      <div className="px-1 pb-1 pt-6">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          {project.background}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-xs text-white/88"
            >
              {highlight}
            </span>
          ))}
        </div>

        {compact ? (
          <div className="mt-6">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              {project.result}
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-5">
            <div className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                负责内容
              </p>
              <p className="mt-3 text-sm leading-7 text-white/92">
                {project.responsibility}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  解决的问题
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  最终成果
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.result}
                </p>
              </div>
            </div>

            <div className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                使用工具
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-3 py-1.5 text-xs text-white/88"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
