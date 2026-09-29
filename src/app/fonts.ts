import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: "./fonts/clash-display-600.woff2",
  display: "swap",
  fallback: ["Arial Black", "Arial", "sans-serif"],
  weight: "600",
});

export const poppins = localFont({
  src: [
    {
      path: "./fonts/poppins-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/poppins-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/satoshi-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
