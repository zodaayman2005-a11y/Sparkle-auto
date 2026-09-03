const forbiddenElementPattern =
  /<\s*(?:a|audio|embed|feImage|foreignObject|iframe|image|object|script|style|video)\b/i;
const embeddedMotionPattern =
  /<\s*(?:animate|animateMotion|animateTransform|set)\b/i;
const eventAttributePattern = /\son[a-z][\w:.-]*\s*=/i;
const documentTypePattern = /<!\s*(?:DOCTYPE|ENTITY)\b/i;
const processingInstructionPattern = /<\?(?!xml(?:\s|\?>))/i;

export function getUnsafeSvgReasons(source) {
  const reasons = [];

  if (forbiddenElementPattern.test(source))
    reasons.push("forbidden active/embed element");
  if (embeddedMotionPattern.test(source))
    reasons.push("embedded SVG animation");
  if (eventAttributePattern.test(source))
    reasons.push("event-handler attribute");
  if (documentTypePattern.test(source))
    reasons.push("DOCTYPE or ENTITY declaration");
  if (processingInstructionPattern.test(source))
    reasons.push("processing instruction");

  for (const match of source.matchAll(
    /\s(?:href|xlink:href)\s*=\s*(["'])(.*?)\1/gis,
  )) {
    if (!match[2]?.trim().startsWith("#")) {
      reasons.push("non-fragment href");
      break;
    }
  }

  for (const match of source.matchAll(/url\(\s*([^)]+?)\s*\)/gis)) {
    const target = match[1]
      ?.trim()
      .replace(/^(["'])(.*)\1$/, "$2")
      .trim();
    if (!target?.startsWith("#")) {
      reasons.push("non-fragment CSS URL");
      break;
    }
  }

  return [...new Set(reasons)];
}
