"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { currentTrack } from "@/data/music";
import { haptic } from "@/lib/haptic";
import { useUiSound } from "@/lib/useUiSound";
import { SectionHeader } from "./SectionHeader";
import { SonicDancer } from "./SonicDancer";

export function MusicPlayer(): JSX.Element {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const play = useUiSound();

  const hasAudio = Boolean(currentTrack.src);

  const togglePlay = async (): Promise<void> => {
    const audio = audioRef.current;
    if (!audio) {
      setIsPlaying((prev) => !prev);
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.warn("Audio playback failed", error);
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="music"
      className="relative px-6 py-24 sm:px-10 lg:py-32"
      aria-labelledby="music-title"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Musique du moment"
          title="Ce qui tourne en boucle"
          description="Un petit sas sonore qui m’accompagne quand je code."
        />

        <div className="card-wii flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => {
                play("click");
                haptic("medium");
                void togglePlay();
              }}
              onMouseEnter={() => play("hover")}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? "Mettre en pause" : "Lancer la musique"}
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-wii-grass text-white shadow-wii transition hover:-translate-y-0.5 hover:shadow-wii-hover"
            >
              <PlayPauseIcon playing={isPlaying} />
            </button>

            <div>
              <p className="text-xs uppercase tracking-widest text-wii-ink/50 dark:text-wii-cloud/50">
                Now playing
              </p>
              <p className="font-display text-xl font-bold tracking-tight">
                {currentTrack.title}
              </p>
              <p className="text-sm text-wii-ink/60 dark:text-wii-cloud/60">
                {currentTrack.artist}
              </p>
            </div>
          </div>

          <div className="flex items-end justify-center gap-3">
            <SonicDancer playing={isPlaying} />
          </div>
        </div>

        {hasAudio ? (
          <audio
            ref={audioRef}
            src={currentTrack.src}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="auto"
          />
        ) : null}
      </div>
    </section>
  );
}

function PlayPauseIcon({ playing }: { playing: boolean }): JSX.Element {
  return (
    <motion.span
      key={playing ? "pause" : "play"}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className="text-2xl"
      aria-hidden
    >
      {playing ? "❚❚" : "▶"}
    </motion.span>
  );
}
