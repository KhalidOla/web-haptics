import type { HapticPreset } from "./types";

export const defaultPatterns = {
  success: {
    pattern: [{ duration: 50 }, { delay: 50, duration: 50 }],
    description: "A series of taps indicating success.",
  },
  nudge: {
    pattern: [
      { duration: 80, intensity: 0.8 },
      { delay: 80, duration: 50, intensity: 0.3 },
    ],
    description: "A series of taps indicating a nudge.",
  },
  error: {
    pattern: [
      { duration: 50, intensity: 0.75 },
      { delay: 50, duration: 50, intensity: 0.75 },
      { delay: 50, duration: 50, intensity: 0.75 },
    ],
    description: "A series of taps indicating a warning or error.",
  },
  buzz: {
    pattern: [{ duration: 1000, intensity: 1 }],
    description: "A long vibration.",
  },
} as const satisfies Record<string, HapticPreset>;
