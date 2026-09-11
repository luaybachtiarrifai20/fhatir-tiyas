// src/utils/audio.ts

let globalAudio: HTMLAudioElement | null = null;

export const setGlobalAudio = (audio: HTMLAudioElement | null) => {
  globalAudio = audio;
};

export const playBackgroundMusic = async () => {
  try {
    if (globalAudio) {
      await globalAudio.play();
    }
  } catch (err) {
    console.error('Failed to play music:', err);
  }
};