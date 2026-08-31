import assert from "node:assert/strict";
import test from "node:test";
import { resolveOrientationRecommendation } from "../src/lib/orientation.ts";

test("recommends ongoing support when the schedule is highly variable", () => {
  const result = resolveOrientationRecommendation({
    planning: "volatile",
    priority: "meals",
    support: "assessment",
  });

  assert.equal(result.key, "follow-up");
});

test("recommends ongoing support when energy is the priority", () => {
  const result = resolveOrientationRecommendation({
    planning: "stable",
    priority: "energy",
    support: "assessment",
  });

  assert.equal(result.key, "follow-up");
});

test("recommends a discovery call for a targeted need", () => {
  const result = resolveOrientationRecommendation({
    planning: "stable",
    priority: "targeted",
    support: "focused",
  });

  assert.equal(result.key, "discovery");
});

test("recommends an assessment for a stable planning and general check-in", () => {
  const result = resolveOrientationRecommendation({
    planning: "stable",
    priority: "meals",
    support: "assessment",
  });

  assert.equal(result.key, "assessment");
});
