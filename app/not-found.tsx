import { ButtonLink } from "@/components/shared/button-link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl rounded-[34px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(12,17,24,0.95),rgba(7,10,15,0.98))] p-8 text-center shadow-[var(--shadow-soft)] sm:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
          页面未找到
        </h1>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
          你访问的内容可能已被移动，或者这条链接还没有配置到正式页面。
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" showArrow>
            返回首页
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
