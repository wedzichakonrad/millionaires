import { useEffect, useRef, useState } from 'react'
import './dropdown.sass';
import { SoundEffectService } from '../../../services/sound-effect.service';

export type DropdownElement = {
  name: string;
  value: string;
}

interface DropdownProps {
  list: DropdownElement[];
  onChange: (element: DropdownElement) => void;
}

export const Dropdown = ({list, onChange}: DropdownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState(list[0]);
  const { playButtonClickSound, playButtonHoverSound } = SoundEffectService;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsListOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <button 
      className={`dropdown ${isListOpen ? 'dropdown--list-open' : ''}`} 
      onClick={() => {
        playButtonClickSound();
        setIsListOpen(state => !state)
      }} 
      ref={dropdownRef}
      onMouseEnter={playButtonHoverSound}
      onFocus={playButtonHoverSound}
    >
      <div className='dropdown__header'>
        {currentElement.name}
      </div>
      {isListOpen && (
      <div className='dropdown__list'>
        <ul>
          {list.map(listElement => {
            return <li className='dropdown__list-element'>
              <button 
                onClick={() => {
                  playButtonClickSound();
                  setCurrentElement(listElement);
                  onChange(listElement);
                }}
                onMouseEnter={playButtonHoverSound}
                onFocus={playButtonHoverSound}
              >
                {listElement.name}
              </button>
            </li>
          })}
        </ul>
      </div>
      )}
    </button>
    )
}