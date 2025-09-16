import { SoundEffectService } from '../../../services/sound-effect.service';
import './button.sass';
import { ReactElement } from 'react';

interface ButtonProps {
  children?: ReactElement | string;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
}

export const Button = ({onClick, className, children, tabIndex, disabled}: ButtonProps) => {
  const { playButtonClickSound, playButtonHoverSound } = SoundEffectService;
  console.log(disabled)
  return (
    <button className={`button ${className}`} tabIndex={tabIndex} 
      onMouseEnter={playButtonHoverSound}
      onFocus={!disabled ? playButtonHoverSound : undefined}
      onClick={() => {
        !disabled && playButtonClickSound();
        onClick();
      }}
    >
      {children}
    </button>
  )
}