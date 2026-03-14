import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </BaseIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 9v8" />
      <path d="M11 17v-4.2A2.8 2.8 0 0 1 13.8 10 2.2 2.2 0 0 1 16 12.2V17" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </BaseIcon>
  );
}

export function WechatIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9.4 5.5C5.9 5.5 3 7.9 3 10.9c0 1.8 1 3.4 2.6 4.5l-.8 2.2 2.7-1.3c.6.1 1.2.2 1.9.2 3.5 0 6.4-2.4 6.4-5.4S12.9 5.5 9.4 5.5Z" />
      <path d="M15.7 10.2c2.9 0 5.3 1.9 5.3 4.3 0 1.4-.8 2.7-2.1 3.5l.6 1.8-2.2-1.1c-.5.1-1 .2-1.6.2-2.9 0-5.3-1.9-5.3-4.4s2.4-4.3 5.3-4.3Z" />
      <circle cx="7.5" cy="10.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="11.3" cy="10.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="14.6" r=".9" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="14.6" r=".9" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function BlueprintIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 4h10l4 4v12H5Z" />
      <path d="M15 4v4h4" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="M9 19h4" />
    </BaseIcon>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 21V9l6 4V9l6 4V5l6 4v12Z" />
      <path d="M3 21h18" />
    </BaseIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12.5 8 4.5 8-4.5" />
      <path d="m4 17 8 4 8-4" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v6c0 4.5 2.9 7.5 7 9 4.1-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" />
    </BaseIcon>
  );
}
