import type { Metadata } from "next";

import { CapabilityCard } from "@/components/shared/capability-card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  capabilityDomains,
  collaborationThemes,
  engineeringProcess,
  toolGroups,
} from "@/data/skills";

export const metadata: Metadata = {
  title: "专业能力",
  description:
    "展示结构设计能力、材料与工艺认知、DFMEA / DFM / DFA 思维、跨团队协同能力与常用软件工具。",
};

const skillStats = [
  { value: "6 大项", label: "能力模块", note: "围绕结构、工艺、风险与协同展开" },
  { value: "5 步法", label: "工程流程", note: "从需求拆解到量产闭环" },
  { value: "3 组工具", label: "软件与方法", note: "方便后续替换成你的实际工具栈" },
];

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="专业能力"
        description="能力展示强调工程方法与落地经验，而不是简单的“会什么软件”。我更关注自己能否在复杂约束下把结构方案推进到可靠交付。"
        stats={skillStats}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capability Map"
            title="结构工程能力地图"
            description="以卡片形式展示结构设计、材料与工艺、DFMEA / DFM / DFA、问题分析和协同推进等关键能力，信息更专业，也更便于维护。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {capabilityDomains.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="我的工程推进方式"
            description="把结构工作拆成可评审、可验证、可追踪的步骤，能够显著提升项目效率，也能减少因为信息不对称导致的反复返工。"
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-5">
            {engineeringProcess.map((item) => (
              <article
                key={item.step}
                className="rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.95),rgba(7,10,15,0.98))] p-6 shadow-[var(--shadow-soft)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tools"
            title="常用工具与表达能力"
            description="以“主力 / 高频 / 支持”替代俗气的百分比进度条，更符合工程岗位的专业表达，也方便后续根据你的真实情况调整。"
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {toolGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(13,18,26,0.95),rgba(8,11,16,0.98))] p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {group.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {group.description}
                </p>

                <div className="mt-6 space-y-4">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-base font-medium text-white">{tool.name}</p>
                        <span className="rounded-full border border-[rgba(124,178,255,0.24)] bg-[rgba(90,162,255,0.08)] px-3 py-1 text-xs text-[var(--color-accent-soft)]">
                          {tool.level}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        {tool.note}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration"
            title="跨团队协同能力"
            description="结构设计的价值，往往体现在跨部门之间的信息翻译和方案推动能力。好的协同，会让项目显著更顺。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {collaborationThemes.map((item) => (
              <CapabilityCard key={item.title} capability={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
