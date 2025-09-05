import { useContext } from 'react';
import { GameContext } from '../components/millionaires';

export const useGameContext = () => {
      const gameContext = useContext(GameContext);
  
      if (!gameContext) {
        throw Error('Game Context is not defined')
      } 

      return gameContext;
};