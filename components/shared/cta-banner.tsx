import { ButtonLink } from "@/components/shared/button-link";

export function CtaBanner() {
  return (
    <section className="pb-20 pt-10 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-[rgba(124,178,255,0.28)] bg-[linear-gradient(135deg,rgba(15,23,35,0.98),rgba(14,35,60,0.94))] px-6 py-8 shadow-[0_24px_70px_rgba(10,41,84,0.26)] sm:px-8 lg:px-10 lg:py-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:38px_38px] opacity-20" />
          <div className="absolute left-[-10%] top-[-35%] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(84,145,255,0.26),transparent_65%)] blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                如果你正在寻找可靠的结构工程合作伙伴，这里可以直接开始。
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                可用于正式求职展示，也适合对外介绍项目经验、工程方法与合作方式。支持后续替换为真实案例、简历和对外联系方式。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" showArrow>
                发起沟通
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary" size="lg">
                查看项目作品
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
