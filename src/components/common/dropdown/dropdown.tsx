import { useEffect, useRef, useState } from 'react'
import './dropdown.sass';

export type DropdownElement = {
  name: string,
  value: string,
}

type DropdownProps = {
  list: DropdownElement[],
  onChange: (element: DropdownElement) => void,
}

export const Dropdown = ({list, onChange}: DropdownProps) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState(list[0]);


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
    <button className={`dropdown ${isListOpen ? 'dropdown--list-open' : ''}`} onClick={() => setIsListOpen(state => !state)} ref={dropdownRef}>
      <div className='dropdown__header'>
        {currentElement.name}
      </div>
      {isListOpen && (
              <div className='dropdown__list'>
                <ul>
          {list.map(listElement => {
            return <li className='dropdown__list-element'>
              <button onClick={() => {
                setCurrentElement(listElement)
                onChange(listElement)
              }}>
                {listElement.name}
              </button>
            </li>
          })}
        </ul>
      </div>)
      }
    </button>
    )
}