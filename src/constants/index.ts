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
  logo: "/hero-assets/logo.png",
  student: "/hero-assets/hero.png",
  decorations: {
    limeSpiral: "/hero-assets/left-yellow.png",
    smallWhiteSpiral: "/hero-assets/right-white.png",
    whiteRing: "/hero-assets/left-white-circle.png",
    limeShape: "/hero-assets/right-yellow.png",
    whiteTriangle: "/hero-assets/right-Cone-white.png",
    largeWhiteSpiral: "/hero-assets/lefy-white.png",
  },
  avatars: [
    "/hero-assets/avatar-1.jpg",
    "/hero-assets/avatar-2.jpg",
    "/hero-assets/avatar-3.jpg",
    "/hero-assets/avatar-4.jpg",
    "/hero-assets/avatar-5.jpg",
  ],
} as const satisfies HeroAssets;
