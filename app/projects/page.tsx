import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { ProjectCard } from "@/components/shared/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目作品",
  description:
    "展示产品结构工程师在消费电子、结构优化、堆叠协调、量产导入和问题分析方向的项目案例。",
};

const projectStats = [
  { value: "6", label: "示例项目", note: "可直接替换为你的真实案例" },
  { value: "5 类", label: "项目类型", note: "覆盖结构设计到量产改善" },
  { value: "完整闭环", label: "工程视角", note: "包含背景、职责、工具与成果" },
];

const projectCategories = [
  "消费电子",
  "结构优化",
  "外观与内部堆叠协调",
  "工艺与量产配合",
  "问题分析与改进",
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="项目作品"
        description="每个案例均按照真实工程项目的表达逻辑组织，包含项目背景、负责内容、使用工具、问题拆解与最终成果，便于正式展示给招聘方、客户和合作伙伴。"
        stats={projectStats}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 sm:p-6">
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              当前案例内容为高质量示例项目文案，目的是让站点一开始就具备正式展示气质。后续你只需要修改数据文件，就可以替换成自己的真实项目。
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {projectCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs text-white/88"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="案例列表"
            description="项目内容重点体现工程师在项目中的判断与动作，而不是仅仅罗列功能点。这样更适合用于求职、商务介绍和专业背书。"
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
