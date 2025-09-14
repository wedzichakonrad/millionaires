import { useContext } from 'react';
import { GameContext } from '../containers/millionaires';

export const useGame = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw Error('Game Context is not defined')
  } 

  return gameContext;
};