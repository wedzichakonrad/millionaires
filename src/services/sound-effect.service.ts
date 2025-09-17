import buttonClickSound from '../assets/sounds/button.mp3';
import buttonHoverSound from '../assets/sounds/button-hover.mp3';

const playButtonClickSound = () => {
  const btnClickSound = new Audio(buttonClickSound);
  btnClickSound.play();
};

const playButtonHoverSound = () => {
  const btnHoverSound = new Audio(buttonHoverSound);
  btnHoverSound.play();
};

export const SoundEffectService = {
  playButtonClickSound,
  playButtonHoverSound,
}