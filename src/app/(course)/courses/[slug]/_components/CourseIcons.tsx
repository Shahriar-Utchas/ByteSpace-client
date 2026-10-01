import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ShareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function LevelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 19v-4M12 19V9M19 19V4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.7 2.78 5.64 6.22.9-4.5 4.39 1.06 6.2L12 16.9l-5.56 2.93 1.06-6.2L3 9.24l6.22-.9L12 2.7Z" />
    </svg>
  );
}

export function StudentsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 18c.5-3.3 2.4-5 5.5-5s5 1.7 5.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 6.2a2.7 2.7 0 0 1 0 5.2M16 13c2.7.2 4.1 1.9 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="4.5" y="8" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="2.4" />
      <path d="m20.5 13 7-3.5v13l-7-3.5v-6Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="m5.2 10.1 3.1 3.1 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8.2 5.7v12.6a1 1 0 0 0 1.55.83l9.1-6.3a1 1 0 0 0 0-1.66l-9.1-6.3a1 1 0 0 0-1.55.83Z" />
    </svg>
  );
}

export function FeatureIcon({ index, ...props }: IconProps & { index: number }) {
  if (index === 1) return <VideoIcon {...props} />;
  if (index === 3) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path d="M4 7h8l2 3h6v9H4V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6h6l2 2h8v11H4V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 12h8M8 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
