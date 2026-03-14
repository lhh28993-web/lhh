"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/shared/button-link";
import { navigationLinks, profile } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(5,7,11,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(124,178,255,0.28)] bg-[linear-gradient(180deg,rgba(18,28,41,0.94),rgba(10,16,25,0.96))] text-sm font-semibold tracking-[0.22em] text-[var(--color-accent-soft)] transition duration-200 group-hover:border-[rgba(124,178,255,0.5)]">
            ZY
          </span>
          <span>
            <span className="block text-sm font-medium text-white">{profile.name}</span>
            <span className="block text-xs text-[var(--color-muted)]">{profile.role}</span>
          </span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition duration-200",
                  active
                    ? "bg-[rgba(255,255,255,0.08)] text-white"
                    : "text-[var(--color-muted)] hover:bg-[rgba(255,255,255,0.04)] hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact" variant="secondary">
            预约沟通
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-white transition hover:border-[rgba(255,255,255,0.18)] md:hidden"
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(7,9,13,0.96)] px-4 py-4 md:hidden">
          <nav aria-label="移动端导航" className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm transition duration-200",
                    active
                      ? "bg-[rgba(255,255,255,0.08)] text-white"
                      : "bg-[rgba(255,255,255,0.03)] text-[var(--color-muted)] hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href="/contact" className="mt-2 w-full justify-center">
              预约沟通
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
