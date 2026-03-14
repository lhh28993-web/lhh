import type { Metadata } from "next";
import Link from "next/link";

import {
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  WechatIcon,
} from "@/components/icons";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  contactChannels,
  contactExpectations,
  profile,
} from "@/data/site";

export const metadata: Metadata = {
  title: "联系方式",
  description:
    "通过联系表单、邮箱、LinkedIn 和微信占位信息发起合作或求职沟通。",
};

const contactStats = [
  { value: "24h", label: "常规回复时间", note: "工作日内通常可完成首轮回复" },
  { value: "4 字段", label: "联系表单", note: "内置完整前端校验，适合静态部署" },
  { value: "多渠道", label: "沟通入口", note: "支持邮箱、LinkedIn、微信等方式" },
];

const contactIcons = {
  邮箱: MailIcon,
  LinkedIn: LinkedInIcon,
  微信: WechatIcon,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="联系方式"
        description="如果你正在招聘产品结构工程师，或需要一位能够兼顾设计判断、制造落地和项目协同的工程伙伴，可以直接从这里开始沟通。"
        stats={contactStats}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.95),rgba(7,10,15,0.98))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                  Direct Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                  直接联系我
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  默认信息为专业占位内容，上线前可替换为你的真实邮箱、LinkedIn、微信二维码或企业微信入口。
                </p>

                <div className="mt-8 space-y-4">
                  {contactChannels.map((channel) => {
                    const Icon = contactIcons[channel.type as keyof typeof contactIcons];

                    const content = (
                      <>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(124,178,255,0.24)] bg-[rgba(90,162,255,0.08)] text-[var(--color-accent-soft)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{channel.type}</p>
                          <p className="mt-1 text-sm text-[var(--color-muted)]">{channel.label}</p>
                          <p className="mt-2 text-sm text-white/92">{channel.value}</p>
                        </div>
                      </>
                    );

                    return channel.href === "#" ? (
                      <div
                        key={channel.type}
                        className="flex items-start gap-4 rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4"
                      >
                        {content}
                      </div>
                    ) : (
                      <Link
                        key={channel.type}
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4 transition duration-200 hover:border-[rgba(124,178,255,0.24)] hover:bg-[rgba(255,255,255,0.05)]"
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(14,19,27,0.95),rgba(8,11,16,0.98))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(124,178,255,0.24)] bg-[rgba(90,162,255,0.08)] text-[var(--color-accent-soft)]">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{profile.location}</p>
                    <p className="text-sm text-[var(--color-muted)]">支持线上沟通与项目协作</p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {contactExpectations.map((item) => (
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

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cooperation"
            title="适合这类合作沟通"
            description="无论你是招聘方、客户还是合作伙伴，都可以根据下面的合作场景快速判断是否匹配。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "正式求职沟通",
                description: "适用于结构工程师岗位招聘、面试邀约、岗位职责确认和项目履历补充。",
              },
              {
                title: "项目制合作",
                description: "适用于新品结构预研、量产问题诊断、堆叠协调和试产问题闭环支持。",
              },
              {
                title: "专业交流",
                description: "适用于与同行工程师、设计团队、模具与供应链伙伴进行经验交流与合作探讨。",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.95),rgba(7,10,15,0.98))] p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
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
