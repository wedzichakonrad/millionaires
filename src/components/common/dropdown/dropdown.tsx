import { useEffect, useRef, useState } from 'react'
import './dropdown.sass';
import { useSoundEffects } from '../../../hooks/use-sound-effects';
import buttonHover from '../../../assets/sounds/button-hover.mp3';
import buttonClick from '../../../assets/sounds/button.mp3';

export type DropdownElement = {
  name: string;
  value: string;
}

interface DropdownProps {
  list: DropdownElement[];
  onChange: (element: DropdownElement) => void;
  value: any;
}

const enterKeyName = 'Enter';

export const Dropdown = ({list, onChange, value}: DropdownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState(list.find(listEl => listEl.value === value) || list[0]);
  const { play: playOnClick } = useSoundEffects({soundSrc: buttonClick});
  const { play: playOnHover } = useSoundEffects({soundSrc: buttonHover});

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

  const onOptionSelect = (listElement: DropdownElement) => {
    playOnClick();
    setCurrentElement(listElement);
    onChange(listElement);
  }

  return (
    <button 
      className={`dropdown ${isListOpen ? 'dropdown--list-open' : ''}`} 
      onClick={() => {
        playOnClick();
        setIsListOpen(state => !state)
      }} 
      ref={dropdownRef}
      onMouseEnter={playOnHover}
      onFocus={playOnHover}
    >
      <div className='dropdown__header'>
        {currentElement.name}
      </div>
      {isListOpen && (
      <div className='dropdown__list'>
        <ul>
          {list.map(listElement => {
            return <li 
              className='dropdown__list-element' 
              key={listElement.value}
              onClick={() => onOptionSelect(listElement)}
              onMouseEnter={playOnHover}
              tabIndex={0}
              onKeyDown={e => e.key === enterKeyName && onOptionSelect(listElement)}
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