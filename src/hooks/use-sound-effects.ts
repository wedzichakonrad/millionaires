import { useGame } from './use-game-context';
import { useRef } from 'react';

interface SoundEffectsProps {
  soundSrc: string;
}

export const useSoundEffects = ({soundSrc}: SoundEffectsProps) => {
  const { isSoundOn } = useGame();
  const sound = new Audio(soundSrc);
  const audioRef = useRef(sound);
  const audio = audioRef.current;

  const play = () => {
    if (isSoundOn && audio) {
      audio.currentTime = 0;
      audio?.play();
    }
  };

  return { play }
}