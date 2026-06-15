import type { ReactNode } from "react";

// Pixel-art style 16x16 icons (blocky, crisp)
const size = 16;

const icons: Record<string, ReactNode> = {
  book: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={2} width={12} height={12} fill="currentColor" />
      <rect x={4} y={4} width={8} height={1} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={4} y={6} width={8} height={1} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={4} y={8} width={6} height={1} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={7} y={2} width={1} height={12} fill="var(--icon-bg, #2d2d2d)" />
    </svg>
  ),
  briefcase: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={4} width={12} height={10} fill="currentColor" />
      <rect x={4} y={2} width={8} height={3} fill="currentColor" />
      <rect x={6} y={1} width={4} height={2} fill="currentColor" />
      <rect x={4} y={6} width={8} height={1} fill="var(--icon-bg, #2d2d2d)" />
    </svg>
  ),
  trophy: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={4} y={2} width={8} height={4} fill="currentColor" />
      <rect x={5} y={6} width={6} height={5} fill="currentColor" />
      <rect x={2} y={11} width={4} height={2} fill="currentColor" />
      <rect x={10} y={11} width={4} height={2} fill="currentColor" />
      <rect x={7} y={11} width={2} height={3} fill="currentColor" />
      <rect x={6} y={1} width={1} height={2} fill="currentColor" />
      <rect x={9} y={1} width={1} height={2} fill="currentColor" />
    </svg>
  ),
  rocket: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={7} y={2} width={2} height={2} fill="currentColor" />
      <rect x={5} y={4} width={6} height={4} fill="currentColor" />
      <rect x={4} y={8} width={8} height={4} fill="currentColor" />
      <rect x={3} y={10} width={2} height={3} fill="currentColor" />
      <rect x={11} y={10} width={2} height={3} fill="currentColor" />
      <rect x={7} y={12} width={2} height={2} fill="var(--icon-bg, #2d2d2d)" />
    </svg>
  ),
  monitor: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={1} y={2} width={14} height={9} fill="currentColor" />
      <rect x={3} y={4} width={10} height={5} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={6} y={11} width={4} height={2} fill="currentColor" />
      <rect x={7} y={13} width={2} height={1} fill="currentColor" />
    </svg>
  ),
  folder: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={4} width={12} height={10} fill="currentColor" />
      <rect x={2} y={2} width={6} height={3} fill="currentColor" />
      <rect x={4} y={1} width={4} height={2} fill="currentColor" />
    </svg>
  ),
  link: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={6} width={4} height={4} fill="currentColor" />
      <rect x={10} y={6} width={4} height={4} fill="currentColor" />
      <rect x={6} y={2} width={4} height={2} fill="currentColor" />
      <rect x={6} y={12} width={4} height={2} fill="currentColor" />
      <rect x={6} y={6} width={4} height={4} fill="var(--icon-bg, #2d2d2d)" />
    </svg>
  ),
  email: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={2} width={12} height={12} fill="currentColor" />
      <rect x={3} y={3} width={10} height={8} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={3} y={6} width={10} height={1} fill="currentColor" />
      <rect x={5} y={8} width={6} height={1} fill="currentColor" />
    </svg>
  ),
  github: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={1} width={12} height={14} fill="currentColor" />
      <rect x={4} y={3} width={8} height={10} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={6} y={5} width={4} height={2} fill="currentColor" />
      <rect x={5} y={8} width={2} height={2} fill="currentColor" />
      <rect x={9} y={8} width={2} height={2} fill="currentColor" />
      <rect x={7} y={11} width={2} height={1} fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" style={{ imageRendering: "pixelated" }}>
      <rect x={2} y={2} width={12} height={12} fill="currentColor" />
      <rect x={4} y={4} width={3} height={8} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={9} y={4} width={3} height={3} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={8} y={8} width={5} height={4} fill="var(--icon-bg, #2d2d2d)" />
      <rect x={5} y={5} width={1} height={2} fill="currentColor" />
    </svg>
  ),
};

type IconName = keyof typeof icons;

export default function PixelIcon({
  name,
  className = "w-7 h-7 sm:w-8 sm:h-8",
  dark = false,
}: {
  name: IconName;
  className?: string;
  dark?: boolean;
}) {
  const content = icons[name];
  if (!content) return null;
  return (
    <span
      className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        color: dark ? "#fbbf24" : "#d97706",
        ["--icon-bg" as string]: dark ? "#3a3a3a" : "#e8e8e8",
      }}
    >
      {content}
    </span>
  );
}
