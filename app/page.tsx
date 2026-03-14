import type { Metadata } from "next";
import Image from "next/image";

import {
  FactoryIcon,
  LayersIcon,
  MapPinIcon,
  ShieldIcon,
} from "@/components/icons";
import { ButtonLink } from "@/components/shared/button-link";
import { CapabilityCard } from "@/components/shared/capability-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  focusAreas,
  heroStats,
  professionalHighlights,
  profile,
} from "@/data/site";
import { projects } from "@/data/projects";
import { capabilityDomains, engineeringProcess } from "@/data/skills";

export const metadata: Metadata = {
  title: "首页",
  description:
    "产品结构工程师个人官网首页，展示专业方向、核心能力、项目作品预览与联系方式入口。",
};

const focusIcons = [LayersIcon, ShieldIcon, FactoryIcon];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredCapabilities = capabilityDomains.slice(0, 4);

  return (
    <>
      <section className="pt-8 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="panel-glow relative overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(11,16,24,0.96),rgba(6,9,14,0.98))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(124,178,255,0.78),transparent)]" />
              <div className="absolute right-[-10%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(87,148,255,0.24),transparent_65%)] blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

              <div className="relative max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                  Product Structure Engineer
                </p>
                <h1 className="text-balance mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[3.6rem]">
                  {profile.tagline}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  {profile.shortIntro}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/88">
                  {profile.summary}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/projects" size="lg" showArrow>
                    查看项目作品
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary" size="lg">
                    联系合作
                  </ButtonLink>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5"
                    >
                      <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/92">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[32px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,18,28,0.94),rgba(7,10,15,0.98))] p-6 shadow-[var(--shadow-soft)]">
                <div className="relative overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/site/hero-products.svg"
                      alt="消费电子、手持终端与中控屏产品结构示意图组合。"
                      fill
                      priority
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.08),rgba(8,12,18,0.16)_32%,rgba(8,12,18,0.58)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                      Product Snapshot
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/86">
                      用统一的工程视角处理外观、堆叠、结构与量产导入。
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(124,178,255,0.28)] bg-[rgba(90,162,255,0.08)] text-[var(--color-accent-soft)]">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{profile.location}</p>
                    <p className="text-sm text-[var(--color-muted)]">{profile.availability}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {engineeringProcess.slice(0, 3).map((step) => (
                    <div
                      key={step.step}
                      className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                          {step.step}
                        </span>
                        <p className="text-sm font-medium text-white">{step.title}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(10,14,21,0.96),rgba(9,11,15,0.98))] p-6 shadow-[var(--shadow-soft)]">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                  核心判断
                </p>
                <div className="mt-4 space-y-4">
                  {professionalHighlights.slice(0, 3).map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4"
                    >
                      <p className="text-sm font-medium text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Focus"
            title="专业方向与工作重心"
            description="围绕产品结构设计的关键场景展开：前期方案判断、复杂堆叠协调、量产工艺对接，以及问题分析与改善闭环。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((item, index) => {
              const Icon = focusIcons[index];

              return (
                <article
                  key={item.title}
                  className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(14,19,27,0.95),rgba(8,11,16,0.98))] p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(124,178,255,0.28)] bg-[rgba(90,162,255,0.08)] text-[var(--color-accent-soft)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/92">{item.description}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="核心能力摘要"
            description="不只是会建模或出图，而是能从结构方案、制造可行性、风险预判和跨团队协同四个层面推动产品落地。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredCapabilities.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Projects"
              title="项目作品预览"
              description="以下项目为展示用高质量占位案例，结构、场景与工程问题均按真实产品开发语境撰写，后续可直接替换为你的实际项目。"
            />
            <ButtonLink href="/projects" variant="ghost" showArrow>
              查看全部项目
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
