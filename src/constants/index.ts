// App-wide constants and configuration for ByteSpace
// Add constants here

export const SITE_NAME = "ByteSpace";
export const SITE_DESCRIPTION = "ByteSpace - Your Learning Platform";

type HeroAssets = {
  readonly logo: string;
  readonly student: string;
  readonly decorations: {
    readonly limeSpiral: string;
    readonly smallWhiteSpiral: string;
    readonly whiteRing: string;
    readonly limeShape: string;
    readonly whiteTriangle: string;
    readonly largeWhiteSpiral: string;
  };
  readonly avatars: readonly string[];
};

/**
 * Replace any of these URLs to swap the demo artwork used by the landing hero.
 * All defaults are local so Next.js can optimize them without remote host rules.
 */
export const HERO_ASSETS = {
  logo: "/assets/hero-assets/logo.png",
  student: "/assets/hero-assets/hero.png",
  decorations: {
    limeSpiral: "/assets/hero-assets/left-yellow.png",
    smallWhiteSpiral: "/assets/hero-assets/right-white.png",
    whiteRing: "/assets/hero-assets/left-white-circle.png",
    limeShape: "/assets/hero-assets/right-yellow.png",
    whiteTriangle: "/assets/hero-assets/right-Cone-white.png",
    largeWhiteSpiral: "/assets/hero-assets/lefy-white.png",
  },
  avatars: [
    "/assets/hero-assets/avatar-1.jpg",
    "/assets/hero-assets/avatar-2.jpg",
    "/assets/hero-assets/avatar-3.jpg",
    "/assets/hero-assets/avatar-4.jpg",
    "/assets/hero-assets/avatar-5.jpg",
  ],
} as const satisfies HeroAssets;
