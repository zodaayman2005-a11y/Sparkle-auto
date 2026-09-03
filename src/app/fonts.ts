import localFont from "next/font/local";

export const cairo = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/cairo/files/cairo-arabic-wght-normal.woff2",
      weight: "200 900",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
  fallback: ["Noto Sans Arabic", "system-ui", "sans-serif"],
});

export const nunito = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2",
      weight: "200 1000",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});
