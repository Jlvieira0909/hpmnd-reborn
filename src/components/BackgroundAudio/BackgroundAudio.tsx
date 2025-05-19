// components/BackgroundAudio.tsx
"use client";

import { useEffect, useRef } from "react";

const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const playAudio = () => {
      audio.loop = true; // toca em loop
      audio.volume = 0.2; // volume de 0.0 a 1.0
      audio.play().catch((err) => {
        console.warn("Falha ao tocar o áudio automaticamente:", err);
      });
    };

    // Requer interação do usuário em alguns navegadores
    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/deepCover.mp3" preload="auto" />;
};

export default BackgroundAudio;
