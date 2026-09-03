import { existsSync } from "node:fs";
import { resolve, sep } from "node:path";
import type { CSSProperties } from "react";
import Image, { type ImageProps } from "next/image";

import assetManifestJson from "../../../content/assets.manifest.json";
import {
  assetViewports,
  getAssetCompatibilityIssue,
  parseAssetManifest,
  type AssetExport,
  type AssetKind,
  type AssetLanguage,
  type AssetRecord,
  type AssetViewport,
} from "@/types/asset-manifest";
import { getCopy } from "@/lib/copy";
import styles from "./Asset.module.css";

const assetManifest = parseAssetManifest(assetManifestJson);

export type AssetId = keyof typeof assetManifestJson.assets;

export interface ResolvedAsset {
  id: AssetId;
  kind: AssetKind;
  requestedPath: string;
  renderedPath: string;
  width: number;
  height: number;
  format: AssetExport["format"];
  maxBytes: number;
  exports: Record<AssetViewport, AssetExport>;
  isPlaceholder: boolean;
  blocker: AssetRecord["implementation"]["blocker"];
  approvalStatus: AssetRecord["approval"]["status"];
  alt: string;
}

export interface AssetProps extends Omit<
  ImageProps,
  | "alt"
  | "className"
  | "fill"
  | "height"
  | "src"
  | "srcSet"
  | "unoptimized"
  | "width"
> {
  id: AssetId;
  lang: AssetLanguage;
  viewport?: AssetViewport;
  alt?: string;
  className?: string;
  imageClassName?: string;
}

const mimeByFormat: Record<AssetExport["format"], string> = {
  avif: "image/avif",
  webp: "image/webp",
  png: "image/png",
  svg: "image/svg+xml",
};

function publicFileExists(publicPath: string): boolean {
  const publicRoot = resolve(process.cwd(), "public");
  const candidate = resolve(publicRoot, publicPath.replace(/^\/+/, ""));
  const isInsidePublic = candidate.startsWith(`${publicRoot}${sep}`);

  return isInsidePublic && existsSync(candidate);
}

function getRecord(id: AssetId): AssetRecord {
  const record = assetManifest.assets[id];
  if (!record) {
    throw new Error(`[Asset] Unknown manifest id "${String(id)}".`);
  }

  return record;
}

export function resolveAsset(
  id: AssetId,
  options: { lang: AssetLanguage; viewport?: AssetViewport; alt?: string },
): ResolvedAsset {
  const lang = options.lang;
  const viewport = options.viewport ?? "desktop";
  const record = getRecord(id);
  const compatibilityIssue = getAssetCompatibilityIssue(record, lang);
  if (compatibilityIssue) {
    throw new Error(
      `[Asset:${String(id)}] Incompatible language/direction: ${compatibilityIssue}.`,
    );
  }

  const selectedExport = record.exports[viewport];
  const isApprovedProductionAsset =
    record.implementation.status === "implemented" &&
    record.approval.status === "approved" &&
    assetViewports.every((target) =>
      publicFileExists(record.exports[target].path),
    );
  const isPlaceholder = !isApprovedProductionAsset;

  return {
    id,
    kind: record.type,
    requestedPath: selectedExport.path,
    renderedPath: isPlaceholder
      ? record.implementation.placeholderPath
      : selectedExport.path,
    width: selectedExport.width,
    height: selectedExport.height,
    format: selectedExport.format,
    maxBytes: selectedExport.maxBytes,
    exports: record.exports,
    isPlaceholder,
    blocker: isPlaceholder ? record.implementation.blocker : null,
    approvalStatus: record.approval.status,
    alt: isPlaceholder
      ? ""
      : record.alt.role === "informative"
        ? (options.alt ?? record.alt[lang])
        : "",
  };
}

function joinClasses(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(" ");
}

function createResponsiveSrcSet(
  exports: Record<AssetViewport, AssetExport>,
): string {
  const candidatesByWidth = new Map<number, string>();
  for (const viewport of assetViewports) {
    const candidate = exports[viewport];
    candidatesByWidth.set(candidate.width, candidate.path);
  }

  const candidates = [...candidatesByWidth.entries()].sort(
    ([first], [second]) => first - second,
  );
  if (candidates.length === 1) return candidates[0]?.[1] ?? "";
  return candidates.map(([width, path]) => `${path} ${width}w`).join(", ");
}

export function Asset({
  id,
  lang,
  viewport = "desktop",
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  ...imageProps
}: AssetProps) {
  const asset = resolveAsset(id, { lang, viewport, alt });
  const placeholderTodo = asset.blocker
    ? getCopy(lang).diagnostics.assetPlaceholderTodo.replace(
        "{blocker}",
        asset.blocker,
      )
    : null;
  const aspectStyle = {
    "--asset-aspect-ratio": `${asset.width} / ${asset.height}`,
  } as CSSProperties;

  return (
    <figure
      className={joinClasses(
        styles.root,
        asset.isPlaceholder && styles.placeholder,
        className,
      )}
      style={aspectStyle}
      data-asset-id={asset.id}
      data-asset-kind={asset.kind}
      data-asset-status={asset.approvalStatus}
      data-placeholder={asset.isPlaceholder ? "true" : undefined}
      data-blocker={asset.blocker ?? undefined}
    >
      {asset.isPlaceholder ? (
        <Image
          {...imageProps}
          src={asset.renderedPath}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          unoptimized
          className={joinClasses(styles.image, imageClassName)}
        />
      ) : (
        <picture>
          <source
            srcSet={createResponsiveSrcSet(asset.exports)}
            sizes={sizes}
            type={mimeByFormat[asset.exports.desktop.format]}
          />
          <Image
            {...imageProps}
            src={asset.renderedPath}
            alt={asset.alt}
            fill
            sizes={sizes}
            priority={priority}
            unoptimized={asset.renderedPath.endsWith(".svg")}
            className={joinClasses(styles.image, imageClassName)}
          />
        </picture>
      )}

      {asset.isPlaceholder ? (
        <figcaption className={styles.placeholderMeta} aria-hidden="true">
          <span className={styles.placeholderId}>{asset.id}</span>
          <span className={styles.placeholderBlocker}>{placeholderTodo}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
