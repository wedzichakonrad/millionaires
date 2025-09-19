import { useEffect, useRef, useState } from 'react'
import './dropdown.sass';
import { useSoundEffects } from '../../../hooks/use-sound-effects';

export type DropdownElement = {
  name: string;
  value: string;
}

interface DropdownProps {
  list: DropdownElement[];
  onChange: (element: DropdownElement) => void;
  value: any;
}

export const Dropdown = ({list, onChange, value}: DropdownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState(list.find(listEl => listEl.value === value) || list[0]);
  const { playButtonClickSound, playButtonHoverSound } = useSoundEffects();

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
      tabIndex={2}
    >
      <div className='dropdown__header'>
        {currentElement.name}
      </div>
      {isListOpen && (
      <div className='dropdown__list'>
        <ul>
          {list.map((listElement,index) => {
            return <li 
              className='dropdown__list-element' 
              key={listElement.value}
              onClick={() => {
                console.log('x')
                playButtonClickSound();
                setCurrentElement(listElement);
                onChange(listElement);
              }}
              onMouseEnter={playButtonHoverSound}
              onFocus={playButtonHoverSound}
              tabIndex={index + 3}
            >
              {listElement.name}
            </li>
          })}
        </ul>
      </div>
      )}
    </button>
    )
}