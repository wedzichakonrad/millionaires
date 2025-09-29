import { config } from './../utils/config/config';
import { useGame } from './use-game';
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
      audio.volume = config.gameRules.effectsVolume;
      audio.currentTime = 0;
      audio?.play();
    }
  };

  return { play }
}