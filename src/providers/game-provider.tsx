import React, { useState } from 'react';
import { config } from '../utils/config/config';
import { useSetAfterDelay } from '../hooks/use-set-after-delay';
import { Question } from '../utils/types/types';
import { GameContext } from '../context/game-context';
import { useNotification } from '../hooks/use-notification';

const backToMenuAnimationDelay = 1000;

interface GameProviderProps {
  children: React.ReactNode;
}

export interface GameContextType {
  isOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  isWon: boolean;
  setIsGameWon: React.Dispatch<React.SetStateAction<boolean>>;
  restartGame: () => void;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  isPendingAnswer: boolean;
  setIsPendingAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  startGame: (category: string) => void;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  gameStarted: boolean;
  gameStartedDelay: boolean;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  animateAnswers: boolean;
  setAnimateAnswers:  React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: () => void;
  setIsSoundOn:  React.Dispatch<React.SetStateAction<boolean>>;
  isSoundOn: boolean;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const { setNotificationStates } = useNotification();
  const { 
    firstQuestionIndex, 
    questions: defaultQuestions, 
    gameLost, 
    gameWon, 
    categoryId, 
    animateAnswers: defaultAnimateAnswers, 
    soundOn, 
    notificationsData 
  } = config.gameRules;

  const [questionNumber, setQuestionNumber] = useState(firstQuestionIndex);
  const [isPendingAnswer, setIsPendingAnswer] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>(defaultQuestions);
  const [isOver, setIsGameOver] = useState(gameLost);
  const [isWon, setIsGameWon] = useState(gameWon);
  const [category, setCategory] = useState(categoryId);
  const [animateAnswers, setAnimateAnswers] = useState(defaultAnimateAnswers);
  const [isSoundOn, setIsSoundOn] = useState(soundOn);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameStartedDelay] = useSetAfterDelay({delay: backToMenuAnimationDelay, value: gameStarted});

  const restartGame = () => {
    setNotificationStates(notificationsData);
    setIsGameOver(false);
    setIsGameWon(false);
    setQuestionNumber(firstQuestionIndex);
  }

  const startGame = () => {
    restartGame();
    setGameStarted(true);
  };

  const openMenu = () => {
    setGameStarted(false);
  };

  const value = {
    isOver,
    isWon,
    setIsGameOver,
    restartGame,
    questions,
    setQuestions,
    isPendingAnswer,
    setIsPendingAnswer,
    questionNumber,
    setQuestionNumber,
    setIsGameWon,
    gameStarted,
    gameStartedDelay,
    setGameStarted,
    startGame,
    category,
    setCategory,
    setAnimateAnswers,
    animateAnswers,
    openMenu,
    setIsSoundOn,
    isSoundOn,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};