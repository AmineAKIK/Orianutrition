import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const assetsDir = fileURLToPath(new URL("../dist/assets/", import.meta.url));
const files = readdirSync(assetsDir);

const entryFile = files.find((file) => /^index-.*\.js$/.test(file));
if (!entryFile) {
  throw new Error("Unable to find the production entry JavaScript chunk.");
}

const entryGzipBytes = gzipSync(readFileSync(join(assetsDir, entryFile))).byteLength;
const entryGzipBudgetBytes = 90 * 1024;

if (entryGzipBytes > entryGzipBudgetBytes) {
  throw new Error(
    `Initial JavaScript gzip budget exceeded: ${(entryGzipBytes / 1024).toFixed(2)} KiB > 90 KiB.`,
  );
}

const imageBudgetBytes = 225 * 1024;
const oversizedImages = files
  .filter((file) => file.endsWith(".webp"))
  .map((file) => ({ file, bytes: statSync(join(assetsDir, file)).size }))
  .filter(({ bytes }) => bytes > imageBudgetBytes);

if (oversizedImages.length > 0) {
  const details = oversizedImages
    .map(({ file, bytes }) => `${file}: ${(bytes / 1024).toFixed(2)} KiB`)
    .join(", ");
  throw new Error(`Editorial image budget exceeded: ${details}`);
}

console.log(
  `Performance budgets passed: entry ${(entryGzipBytes / 1024).toFixed(2)} KiB gzip; WebP assets <= 225 KiB.`,
);
