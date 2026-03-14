import type { Metadata } from "next";

import { ButtonLink } from "@/components/shared/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  engineeringPrinciples,
  experienceTimeline,
  focusAreas,
  heroStats,
  profile,
} from "@/data/site";

export const metadata: Metadata = {
  title: "关于我",
  description:
    "关于产品结构工程师的专业背景、工作经历、工程思维与职业理念介绍。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="关于我"
        description="长期服务于消费电子与智能硬件项目，工作重点覆盖结构方案、内部堆叠、量产导入和问题闭环。相比单点设计，我更关注产品在真实制造环境中是否稳定、可执行、可交付。"
        stats={heroStats}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="rounded-[32px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.95),rgba(7,10,15,0.98))] p-8 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
              Personal Profile
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              {profile.name}
            </h2>
            <p className="mt-4 text-lg text-white/92">{profile.role}</p>
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
              {profile.shortIntro}
            </p>
            <p className="mt-5 text-base leading-8 text-white/92">{profile.summary}</p>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">{profile.availability}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects" showArrow>
                查看作品
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                联系我
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(14,19,27,0.95),rgba(8,11,16,0.98))] p-8 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                擅长领域
              </p>
              <div className="mt-6 space-y-5">
                {focusAreas.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[rgba(124,178,255,0.25)] bg-[linear-gradient(135deg,rgba(16,24,36,0.98),rgba(12,32,56,0.94))] p-8 shadow-[0_24px_60px_rgba(13,36,74,0.2)]">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                职业理念
              </p>
              <blockquote className="mt-5 text-2xl font-semibold leading-10 tracking-[-0.04em] text-white">
                “把复杂约束变成可交付的结构方案，把项目压力前置消化在评审与验证阶段。”
              </blockquote>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                这是我对结构工程工作的理解：不是追求形式上的复杂，而是在产品目标、制造能力与交付节奏之间做出可靠判断。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Background"
            title="工作背景"
            description="从助理结构工程师到高级产品结构工程师，持续在真实项目里积累对风险、工艺和协同节奏的判断。"
          />

          <div className="mt-10 space-y-5">
            {experienceTimeline.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="grid gap-5 rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(13,18,26,0.95),rgba(8,11,16,0.98))] p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{item.company}</p>
                </div>
                <p className="text-sm leading-8 text-white/92">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Principles"
            title="工程思维与设计理念"
            description="工程判断的价值，往往不体现在一次漂亮的建模上，而体现在长期稳定地避坑、收敛和交付。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {engineeringPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.95),rgba(7,10,15,0.98))] p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
