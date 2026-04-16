"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SonicDancerProps = {
  playing: boolean;
};

/**
 * Affiche un GIF Sonic animé quand `playing` est vrai.
 * Au passage à false, on capture la frame en cours dans un <canvas> pour
 * la figer sans coupure brutale (la frame d'arrêt reste affichée).
 */
export function SonicDancer({ playing }: SonicDancerProps): JSX.Element {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [frozen, setFrozen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (playing) {
      setFrozen(false);
      return;
    }

    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas || !ready) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    canvas.width = width;
    canvas.height = height;

    try {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      setFrozen(true);
    } catch {
      setFrozen(false);
    }
  }, [playing, ready]);

  return (
    <div className="relative h-24 w-24 select-none">
      <Image
        ref={imgRef}
        src="/sonic.gif"
        alt="Sonic qui danse"
        width={96}
        height={96}
        unoptimized
        className={`h-full w-full object-contain transition-opacity duration-200 ${
          frozen ? "opacity-0" : "opacity-100"
        }`}
        style={{ imageRendering: "pixelated" }}
        onLoad={() => setReady(true)}
        draggable={false}
        priority
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`absolute inset-0 h-full w-full transition-opacity duration-200 ${
          frozen ? "opacity-100" : "opacity-0"
        }`}
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}
