import buttonClickSound from '../assets/sounds/button.mp3';
import buttonHoverSound from '../assets/sounds/button-hover.mp3';
import { useGame } from './use-game-context';

export const useSoundEffects = () => {
  const { isSoundOn } = useGame();

  const playButtonClickSound = () => {
    if (isSoundOn) {
      const btnClickSound = new Audio(buttonClickSound);
      btnClickSound?.play();
    }
  };

  const playButtonHoverSound = () => {
    if (isSoundOn) {
      const btnHoverSound = new Audio(buttonHoverSound);
      btnHoverSound?.play();
    }
  };

  return {playButtonClickSound, playButtonHoverSound}
}