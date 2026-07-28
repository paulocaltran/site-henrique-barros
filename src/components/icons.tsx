import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconFactory(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 21h18" />
      <path d="M4 21V9l6 4V9l6 4V6l4-2v17" />
      <path d="M8 21v-4M13 21v-4M18 21v-4" />
    </svg>
  );
}

export function IconCap(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" />
      <path d="M22 9v5" />
    </svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconUsers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="3.2" />
      <path d="M22 20v-1a4 4 0 0 0-3-3.87" />
      <path d="M16 3.5a4 4 0 0 1 0 7" />
    </svg>
  );
}

export function IconTrending(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

export function IconScale(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v18M7 21h10" />
      <path d="M12 6 5 8l-3 6a4 4 0 0 0 6 0L5 8Z" />
      <path d="M12 6l7-2 3 6a4 4 0 0 1-6 0l3-6Z" />
    </svg>
  );
}

export function IconWhatsApp(p: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.36 9.36 0 0 1-1.44-5A9.43 9.43 0 0 1 18.7 5.3a9.36 9.36 0 0 1 2.76 6.66c0 5.2-4.24 9.43-9.42 9.53Zm8.02-17.55A11.3 11.3 0 0 0 12.05.6C5.85.6.8 5.65.8 11.85c0 2.05.54 4.05 1.56 5.82L.7 23.4l5.87-1.54a11.24 11.24 0 0 0 5.47 1.4h.01c6.2 0 11.25-5.05 11.25-11.26 0-3.01-1.17-5.83-3.3-7.95Z" />
    </svg>
  );
}

export function IconInstagram(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function IconHeart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.35-9.3-8.5C1.2 8.7 2.6 5.5 5.6 5.5c1.9 0 3.2 1.1 3.9 2.3.7-1.2 2-2.3 3.9-2.3 3 0 4.4 3.2 2.9 6-2.3 4.15-9.3 8.5-9.3 8.5Z" />
    </svg>
  );
}

export function IconShare(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.6-4.3M8.2 13.2l7.6 4.3" />
    </svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12 4.5 4.5L19 6" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 5.5C3 4.7 3.7 4 4.5 4H7l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1L12 12.5 16 14v2.5c0 .8-.7 1.5-1.5 1.5A13.5 13.5 0 0 1 3 5.5Z" />
    </svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconFacebook(p: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M14 9V7.5c0-.7.5-1 1.2-1H17V3.5h-2.4C11.9 3.5 11 5 11 6.9V9H8.5v3H11v8.5h3V12h2.3l.4-3H14Z" />
    </svg>
  );
}

export function IconYouTube(p: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12Zm-13 3V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function IconLinkedIn(p: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M6.5 8.5v10h-3v-10h3ZM5 3.5A1.75 1.75 0 1 1 5 7a1.75 1.75 0 0 1 0-3.5ZM20.5 18.5h-3v-5.2c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.3h-3v-10h3v1.4a3 3 0 0 1 2.7-1.5c2 0 3.2 1.3 3.2 4v6.1Z" />
    </svg>
  );
}
