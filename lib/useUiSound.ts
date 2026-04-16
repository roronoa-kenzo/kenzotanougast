"use client";

import { useCallback, useEffect, useRef } from "react";

type SoundName = "hover" | "click";

type FrequencyMap = Record<SoundName, number>;

const FREQUENCIES: FrequencyMap = {
  hover: 880,
  click: 1320,
};

/**
 * Minimal UI sounds via WebAudio. The AudioContext is only created after the
 * first real user gesture (pointerdown / keydown / touchstart) to respect
 * Chrome's autoplay policy and avoid "not allowed to start" warnings.
 */
export function useUiSound(): (name: SoundName) => void {
  const ctxRef = useRef<AudioContext | null>(null);
  const unlockedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const unlock = (): void => {
      if (unlockedRef.current) return;

      const AudioCtor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtor) return;

      try {
        const ctx = new AudioCtor();
        ctxRef.current = ctx;
        unlockedRef.current = true;
      } catch {
        // Ignore : WebAudio indisponible
      }
    };

    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "touchstart",
    ];
    const listener = (): void => unlock();

    for (const event of events) {
      window.addEventListener(event, listener, { once: true, passive: true });
    }

    return () => {
      for (const event of events) {
        window.removeEventListener(event, listener);
      }
    };
  }, []);

  return useCallback((name: SoundName) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    try {
      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = FREQUENCIES[name];

      const now = ctx.currentTime;
      const duration = name === "click" ? 0.07 : 0.05;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Silently ignore
    }
  }, []);
}
