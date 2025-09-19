import { useSoundEffects } from '../../../hooks/use-sound-effects';
import './button.sass';
import { ReactElement } from 'react';

interface ButtonProps {
  children?: ReactElement | string;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
}

export const Button = ({onClick, className = '', children, tabIndex, disabled}: ButtonProps) => {
  const { playButtonClickSound, playButtonHoverSound } = useSoundEffects();
  return (
    <button className={`button ${className}`} tabIndex={tabIndex} 
      onMouseEnter={!disabled ? playButtonHoverSound : undefined}
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