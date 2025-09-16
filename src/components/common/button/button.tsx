import './button.sass';
import buttonClickSound from '../../../assets/sounds/button.mp3';
import buttonHoverSound from './../../../assets/sounds/button-hover.mp3';
import { ReactElement } from 'react';

interface ButtonProps {
  children?: ReactElement | string;
  onClick: () => void;
  className?: string;
  tabIndex?: number;
}

export const Button = ({onClick, className, children, tabIndex}: ButtonProps) => {
  const btnHoverSound = new Audio(buttonHoverSound);

  const handleMouseEnter = () => {
    btnHoverSound.currentTime = 0;
    btnHoverSound.play();
  };

  return (
    <button className={`button ${className}`} tabIndex={tabIndex} 
      onMouseEnter={handleMouseEnter}
      onClick={() => {
        const btnClickSound = new Audio(buttonClickSound);
        btnClickSound.play();
        onClick();
      }}
    >
      {children}
    </button>
  )
}