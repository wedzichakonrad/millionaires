import { useSoundEffects } from '../../../hooks/use-sound-effects';
import './button.sass';
import { ReactElement } from 'react';
import buttonHover from '../../../assets/sounds/button-hover.mp3';
import buttonClick from '../../../assets/sounds/button.mp3';

interface ButtonProps {
  children?: ReactElement | string;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
}

export const Button = ({onClick, className = '', children, tabIndex, disabled}: ButtonProps) => {
  const { play: playOnClick } = useSoundEffects({soundSrc: buttonClick});
  const { play: playOnHover } = useSoundEffects({soundSrc: buttonHover});
  const playHoverSound = !disabled ? playOnHover : undefined;

  return (
    <button 
      className={`button ${className}`} 
      tabIndex={tabIndex} 
      onMouseEnter={playHoverSound}
      onFocus={playHoverSound}
      onClick={() => {
        if (disabled) return

        playOnClick();
        onClick();
      }}
    >
      {children}
    </button>
  )
}