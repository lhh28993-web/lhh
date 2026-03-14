import Link from "next/link";

import { contactChannels, navigationLinks, profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(5,7,11,0.88)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.7fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
            {profile.role}
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
            {profile.name}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
            {profile.summary}
          </p>
          <p className="mt-5 text-sm text-[var(--color-muted)]">{profile.location}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">页面导航</p>
          <div className="mt-4 flex flex-col gap-3">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-muted)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-white">联系方式</p>
          <div className="mt-4 space-y-4">
            {contactChannels.map((channel) => (
              <div key={channel.type}>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                  {channel.type}
                </p>
                {channel.href === "#" ? (
                  <span className="mt-1 inline-block text-sm text-[var(--color-muted)]">
                    {channel.value}
                  </span>
                ) : (
                  <Link
                    href={channel.href}
                    className="mt-1 inline-block text-sm text-[var(--color-muted)] transition hover:text-white"
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {channel.value}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-[var(--color-muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. Personal portfolio site.</p>
          <p>当前站点为可替换的正式展示模板，可继续替换为你的真实案例与联系方式。</p>
        </div>
      </div>
    </footer>
  );
}
