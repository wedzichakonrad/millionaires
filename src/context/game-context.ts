import { createContext } from 'react';
import { GameContextType } from '../providers/game-provider';

export const GameContext = createContext<GameContextType | undefined>(undefined);