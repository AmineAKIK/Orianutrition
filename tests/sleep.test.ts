import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateSleepGap,
  durationToMinutes,
  formatDuration,
} from "../src/lib/sleep.ts";

test("converts a duration to minutes", () => {
  assert.equal(durationToMinutes({ hours: 7, minutes: 30 }), 450);
});

test("reports an observed sleep gap without pseudo-precision", () => {
  assert.deepEqual(
    calculateSleepGap({ hours: 7, minutes: 30 }, { hours: 6, minutes: 15 }),
    {
      targetMinutes: 450,
      observedMinutes: 375,
      differenceMinutes: -75,
      status: "below",
    },
  );
  assert.equal(formatDuration(-75), "1 h 15");
});

test("distinguishes aligned and above-target durations", () => {
  assert.equal(
    calculateSleepGap({ hours: 7, minutes: 0 }, { hours: 7, minutes: 0 })
      .status,
    "aligned",
  );
  assert.equal(
    calculateSleepGap({ hours: 7, minutes: 0 }, { hours: 7, minutes: 45 })
      .status,
    "above",
  );
});

test("rejects invalid minute values", () => {
  assert.throws(() => durationToMinutes({ hours: 7, minutes: 60 }), RangeError);
});
