import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border transition duration-200 ease-out",
        size === "lg" ? "px-6 py-3.5 text-sm" : "px-4 py-2.5 text-sm",
        variant === "primary" &&
          "border-[rgba(123,175,255,0.6)] bg-[linear-gradient(135deg,rgba(101,162,255,0.28),rgba(62,107,173,0.18))] text-white shadow-[0_16px_32px_rgba(33,88,163,0.22)] hover:-translate-y-0.5 hover:border-[rgba(147,193,255,0.8)]",
        variant === "secondary" &&
          "border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-white hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.24)] hover:bg-[rgba(255,255,255,0.07)]",
        variant === "ghost" &&
          "border-transparent bg-transparent text-[var(--color-muted)] hover:text-white",
        className,
      )}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}
