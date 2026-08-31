import test from "node:test";
import assert from "node:assert/strict";
import {
  publicBasePath,
  publicIndexingEnabled,
  publicManifestUrl,
  publicOgImageUrl,
  publicOrigin,
  publicSiteUrl,
} from "../src/config/release.ts";

test("keeps the public release identity internally consistent", () => {
  assert.ok(publicBasePath.startsWith("/"));
  assert.ok(publicBasePath.endsWith("/"));
  assert.equal(publicBasePath, publicBasePath.toLowerCase());
  assert.equal(publicSiteUrl, `${publicOrigin}${publicBasePath}`);
  assert.equal(publicManifestUrl, `${publicSiteUrl}manifest.webmanifest`);
  assert.equal(publicOgImageUrl, `${publicSiteUrl}pwa-512.png`);
});

test("ships the v1 public release as indexable", () => {
  assert.equal(publicIndexingEnabled, true);
});
