import { useState, createContext } from "react";
import GameOverNotification from '../components/game-over-notification/game-over-notification';
import GameWonNotification from '../components/game-won-notification/game-won-notification';
import { GameArea } from './game-area/game-area';
import { Dashboard } from './dashboard/dashboard';
import { config } from '../utils/config/config';
import { useSetAfterDelay } from '../hooks/use-set-after-delay';

const backToMenuAnimationDelay = 2000;

export type Answer = {
  content: string;
  isCorrect: boolean;
  letter: string;
  disabled?: boolean;
}

export type Question = {
  question: string;
  answers: Answer[];
}

export type NotificationState = {
 [key: string]: { [key: string]: boolean }
}

interface GameContextType {
    isOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    isWon: boolean;
    setIsGameWon: React.Dispatch<React.SetStateAction<boolean>>;
    restartGame: () => void;
    questions: Question[];
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
    questionNumber: number;
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
    startGame: (category: string) => void;
    setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
    gameStarted: boolean;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    animateAnswers: boolean;
    setAnimateAnswers:  React.Dispatch<React.SetStateAction<boolean>>;
    openMenu: () => void;
    setIsSoundOn:  React.Dispatch<React.SetStateAction<boolean>>;
    isSoundOn: boolean;
}

interface NotificationContextType {
    notificationStates: NotificationState | undefined;
    setNotificationStates: React.Dispatch<React.SetStateAction<NotificationState>>;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const GameContext = createContext<GameContextType | undefined>(undefined);

const Millionaires = () => {
  const { gameRules } = config;
  const [notificationStates, setNotificationStates] = useState<NotificationState>(gameRules.notificationsData);
  const [questionNumber, setQuestionNumber] = useState(gameRules.firstQuestionIndex);
  const [questions, setQuestions] = useState<Question[]>(gameRules.questions);
  const [isOver, setIsGameOver] = useState(gameRules.gameLost);
  const [isWon, setIsGameWon] = useState(gameRules.gameWon);
  const [gameStarted, setGameStarted] = useState(false);
  const [category, setCategory] = useState(gameRules.categoryId);
  const [animateAnswers, setAnimateAnswers] = useState(gameRules.animateAnswers);
  const [isSoundOn, setIsSoundOn] = useState(gameRules.soundOn);
  const [gameStartedDelay] = useSetAfterDelay({delay: backToMenuAnimationDelay, value: gameStarted})

  const startGame = () => {
    setGameStarted(true);
  };

  const restartGame = () => {
    setNotificationStates(gameRules.notificationsData);
    setIsGameOver(false);
    setIsGameWon(false);
    setQuestionNumber(gameRules.firstQuestionIndex);
  }

  const openMenu = () => {
    restartGame();
    setGameStarted(false);
  };

  return (      
    <GameContext.Provider value={{ 
      isOver, 
      isWon, 
      setIsGameOver, 
      restartGame, 
      questions, 
      setQuestions, 
      questionNumber, 
      setQuestionNumber, 
      setIsGameWon, 
      gameStarted, 
      setGameStarted,
      startGame,
      category,
      setCategory,
      setAnimateAnswers,
      animateAnswers,
      openMenu,
      setIsSoundOn,
      isSoundOn,
      }}>
      <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
        <div className='millionaires'>
          <Dashboard/>
          {(gameStartedDelay || gameStarted) && <GameArea/>}
        </div>
        <GameOverNotification/>
        <GameWonNotification/>
      </NotificationContext.Provider>
    </GameContext.Provider>

  );
};

export default Millionaires;
