import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { getUnsafeSvgReasons } from "./svg-safety.mjs";

const manifest = JSON.parse(
  await readFile("content/assets.manifest.json", "utf8"),
);
const failures = [];
const publicRoot = path.resolve(process.cwd(), "public");
const expectedMimeByFormat = {
  avif: "image/avif",
  png: "image/png",
  svg: "image/svg+xml",
  webp: "image/webp",
};

const sha256 = (buffer) => createHash("sha256").update(buffer).digest("hex");

function resolvePublicFile(publicPath) {
  const candidate = path.resolve(publicRoot, publicPath.replace(/^\/+/, ""));
  if (!candidate.startsWith(`${publicRoot}${path.sep}`)) {
    throw new Error(`unsafe public path: ${publicPath}`);
  }
  return candidate;
}

function isPng(buffer) {
  const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  return (
    buffer.length >= 24 &&
    signature.every((byte, index) => buffer[index] === byte)
  );
}

function isWebp(buffer) {
  return (
    buffer.length >= 16 &&
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  );
}

function isAvif(buffer) {
  if (buffer.length < 20 || buffer.toString("ascii", 4, 8) !== "ftyp")
    return false;
  const boxSize = Math.min(buffer.readUInt32BE(0), buffer.length);
  for (let offset = 8; offset + 4 <= boxSize; offset += 4) {
    const brand = buffer.toString("ascii", offset, offset + 4);
    if (brand === "avif" || brand === "avis") return true;
  }
  return false;
}

function svgText(buffer) {
  const text = buffer
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trimStart();
  return /^(?:<\?xml[\s\S]*?\?>\s*)?(?:<!--(?:[\s\S]*?)-->\s*)?<svg\b/i.test(
    text,
  )
    ? text
    : null;
}

function detectMime(buffer) {
  if (isPng(buffer)) return "image/png";
  if (isWebp(buffer)) return "image/webp";
  if (isAvif(buffer)) return "image/avif";
  if (svgText(buffer)) return "image/svg+xml";
  return null;
}

function readPngDimensions(buffer) {
  if (!isPng(buffer) || buffer.toString("ascii", 12, 16) !== "IHDR")
    return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function readUInt24LE(buffer, offset) {
  return (
    buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16)
  );
}

function readWebpDimensions(buffer) {
  if (!isWebp(buffer)) return null;

  for (let offset = 12; offset + 8 <= buffer.length;) {
    const chunkType = buffer.toString("ascii", offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;
    if (dataOffset + chunkSize > buffer.length) return null;

    if (chunkType === "VP8X" && chunkSize >= 10) {
      return {
        width: readUInt24LE(buffer, dataOffset + 4) + 1,
        height: readUInt24LE(buffer, dataOffset + 7) + 1,
      };
    }

    if (
      chunkType === "VP8 " &&
      chunkSize >= 10 &&
      buffer[dataOffset + 3] === 0x9d &&
      buffer[dataOffset + 4] === 0x01 &&
      buffer[dataOffset + 5] === 0x2a
    ) {
      return {
        width: buffer.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: buffer.readUInt16LE(dataOffset + 8) & 0x3fff,
      };
    }

    if (chunkType === "VP8L" && chunkSize >= 5 && buffer[dataOffset] === 0x2f) {
      const byte1 = buffer[dataOffset + 1];
      const byte2 = buffer[dataOffset + 2];
      const byte3 = buffer[dataOffset + 3];
      const byte4 = buffer[dataOffset + 4];
      return {
        width: 1 + (((byte2 & 0x3f) << 8) | byte1),
        height:
          1 + (((byte4 & 0x0f) << 10) | (byte3 << 2) | ((byte2 & 0xc0) >> 6)),
      };
    }

    offset = dataOffset + chunkSize + (chunkSize % 2);
  }

  return null;
}

function readAvifDimensions(buffer) {
  if (!isAvif(buffer)) return null;
  for (let typeOffset = 4; typeOffset + 16 <= buffer.length; typeOffset += 1) {
    if (buffer.toString("ascii", typeOffset, typeOffset + 4) !== "ispe")
      continue;
    const boxOffset = typeOffset - 4;
    const boxSize = buffer.readUInt32BE(boxOffset);
    if (boxSize < 20 || boxOffset + boxSize > buffer.length) continue;
    const width = buffer.readUInt32BE(typeOffset + 8);
    const height = buffer.readUInt32BE(typeOffset + 12);
    if (width > 0 && height > 0) return { width, height };
  }
  return null;
}

function parseSvgNumber(value) {
  const match = value?.match(/^\s*([0-9]+(?:\.[0-9]+)?)(?:px)?\s*$/i);
  return match ? Number(match[1]) : null;
}

function readSvgDimensions(buffer) {
  const text = svgText(buffer);
  if (!text) return null;
  const openingTag = text.match(/<svg\b([^>]*)>/i)?.[1] ?? "";
  const viewBoxValue = openingTag.match(
    /\bviewBox\s*=\s*["']([^"']+)["']/i,
  )?.[1];
  if (viewBoxValue) {
    const values = viewBoxValue
      .trim()
      .split(/[\s,]+/)
      .map(Number);
    if (
      values.length === 4 &&
      values.every(Number.isFinite) &&
      values[2] > 0 &&
      values[3] > 0
    ) {
      return { width: values[2], height: values[3] };
    }
  }
  const width = parseSvgNumber(
    openingTag.match(/\bwidth\s*=\s*["']([^"']+)["']/i)?.[1],
  );
  const height = parseSvgNumber(
    openingTag.match(/\bheight\s*=\s*["']([^"']+)["']/i)?.[1],
  );
  return width && height ? { width, height } : null;
}

function readDimensions(buffer, mime) {
  if (mime === "image/png") return readPngDimensions(buffer);
  if (mime === "image/webp") return readWebpDimensions(buffer);
  if (mime === "image/avif") return readAvifDimensions(buffer);
  if (mime === "image/svg+xml") return readSvgDimensions(buffer);
  return null;
}

const placeholderHashes = new Set();
for (const placeholderPath of Object.values(
  manifest.placeholderProtocol?.paths ?? {},
)) {
  try {
    placeholderHashes.add(
      sha256(await readFile(resolvePublicFile(placeholderPath))),
    );
  } catch (error) {
    failures.push(
      `placeholder contract: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

for (const [id, asset] of Object.entries(manifest.assets ?? {})) {
  const releaseReady =
    asset.implementation?.status === "implemented" &&
    asset.approval?.status === "approved";
  if (!releaseReady) {
    failures.push(
      `${id}: lifecycle is implementation=${asset.implementation?.status ?? "missing"}, ` +
        `approval=${asset.approval?.status ?? "missing"}`,
    );
  }
  if (asset.implementation?.blocker !== null) {
    failures.push(
      `${id}: unresolved blocker=${asset.implementation?.blocker ?? "missing"}`,
    );
  }

  for (const [viewport, exported] of Object.entries(asset.exports ?? {})) {
    if (!exported?.path) {
      failures.push(`${id}/${viewport}: missing export path`);
      continue;
    }
    const declaredExtension = path.posix
      .extname(exported.path)
      .slice(1)
      .toLowerCase();
    if (declaredExtension !== exported.format) {
      failures.push(
        `${id}/${viewport}: extension .${declaredExtension || "missing"} conflicts with format=${exported.format}`,
      );
    }

    let buffer;
    try {
      buffer = await readFile(resolvePublicFile(exported.path));
    } catch (error) {
      failures.push(
        `${id}/${viewport}: ${error instanceof Error && error.message.includes("unsafe") ? error.message : `missing ${exported.path}`}`,
      );
      continue;
    }

    if (buffer.length === 0) {
      failures.push(`${id}/${viewport}: empty file`);
      continue;
    }
    if (buffer.length > exported.maxBytes) {
      failures.push(
        `${id}/${viewport}: ${buffer.length} bytes exceeds maxBytes=${exported.maxBytes}`,
      );
    }
    if (placeholderHashes.has(sha256(buffer))) {
      failures.push(
        `${id}/${viewport}: production path contains an exact placeholder copy`,
      );
    }

    const actualMime = detectMime(buffer);
    const expectedMime = expectedMimeByFormat[exported.format];
    if (!actualMime) {
      failures.push(`${id}/${viewport}: unsupported or corrupt file signature`);
      continue;
    }
    if (actualMime !== expectedMime) {
      failures.push(
        `${id}/${viewport}: declared ${expectedMime ?? exported.format}, magic bytes are ${actualMime}`,
      );
      continue;
    }

    if (actualMime === "image/svg+xml") {
      const svgSource = buffer.toString("utf8");
      const lowerText = svgSource.toLowerCase();
      if (
        lowerText.includes("placeholder") ||
        lowerText.includes("do not ship") ||
        lowerText.includes("data-placeholder")
      ) {
        failures.push(`${id}/${viewport}: SVG contains placeholder markers`);
      }
      for (const reason of getUnsafeSvgReasons(svgSource)) {
        failures.push(`${id}/${viewport}: unsafe SVG (${reason})`);
      }
    }

    const dimensions = readDimensions(buffer, actualMime);
    if (!dimensions) {
      failures.push(`${id}/${viewport}: dimensions could not be decoded`);
      continue;
    }
    const expectedRatio = exported.width / exported.height;
    const actualRatio = dimensions.width / dimensions.height;
    if (Math.abs(expectedRatio - actualRatio) / expectedRatio >= 0.002) {
      failures.push(
        `${id}/${viewport}: actual ratio ${dimensions.width}x${dimensions.height} ` +
          `differs from ${exported.width}x${exported.height}`,
      );
    }
    if (
      actualMime !== "image/svg+xml" &&
      (dimensions.width !== exported.width ||
        dimensions.height !== exported.height)
    ) {
      failures.push(
        `${id}/${viewport}: raster is ${dimensions.width}x${dimensions.height}; ` +
          `manifest requires ${exported.width}x${exported.height}`,
      );
    }
  }
}

if (failures.length) {
  console.error(
    "Release asset gate failed. Every export must be implemented, approved, authentic, and within contract:\n",
  );
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  "Release asset gate passed: all exports are approved, present, authentic, dimensionally correct, and within budget.",
);
