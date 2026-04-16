"use client";

type HapticStrength = "light" | "medium" | "strong";

const PATTERNS: Record<HapticStrength, number | number[]> = {
  light: 8,
  medium: 18,
  strong: [8, 40, 8],
};

/**
 * Déclenche un retour haptique via l'API Vibration (Android/Chrome).
 * No-op silencieux sur desktop et iOS (API non supportée).
 */
export function haptic(strength: HapticStrength = "light"): void {
  if (typeof window === "undefined") return;
  if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") {
    return;
  }

  try {
    navigator.vibrate(PATTERNS[strength]);
  } catch {
    // Ignore (ex: user gesture requis non respecté)
  }
}
