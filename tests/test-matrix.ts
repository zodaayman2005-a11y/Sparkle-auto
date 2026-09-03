export const testMatrix = [
  { name: "narrow-mobile", width: 360, height: 740 },
  { name: "large-mobile", width: 430, height: 932 },
  { name: "tablet", width: 834, height: 1194 },
  { name: "small-desktop", width: 1280, height: 800 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "large-desktop", width: 1672, height: 941 },
] as const;

export const languages = [
  { locale: "ar", direction: "rtl" },
  { locale: "en", direction: "ltr" },
] as const;
