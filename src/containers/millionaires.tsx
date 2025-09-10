import { useState, createContext } from "react";
import GameOverNotification from '../components/common/notifications/game-over/game-over-notification';
import GameWonNotification from '../components/common/notifications/game-won/game-won-notification';
import { mockData } from '../utils/game-data/game-data';
import { GameArea } from './game-area/game-area';
import { Dashboard } from './dashboard/dashboard';
import { config } from '../utils/config/config';

export interface Answer {
  content: string;
  isCorrect: boolean;
  letter: string;
  disabled?: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface NotificationState {
 [key: string]: { [key: string]: boolean }
}

interface GameContextType {
    isOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    isWon: boolean;
    setIsGameWon: React.Dispatch<React.SetStateAction<boolean>>;
    restartGame: () => void;
    questions: Question[],
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>,
    questionNumber: number,
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    startGame: (category: string) => void;
    gameStarted: boolean;
    category: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>,
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
  const [questions, setQuestions] = useState(mockData);
  const [isOver, setIsGameOver] = useState(gameRules.gameLost);
  const [isWon, setIsGameWon] = useState(gameRules.gameWon);
  const [gameStarted, setGameStarted] = useState(false);
  const [category, setCategory] = useState(gameRules.category);

  const startGame = (category: string) => {
    setGameStarted(true);
  };

  const restartGame = () => {
    setNotificationStates({});
    setIsGameOver(false);
    setIsGameWon(false);
    setQuestionNumber(gameRules.firstQuestionIndex);
  }

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
      startGame,
      category,
      setCategory,
      }}>
      <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
        <div className='millionaires'>
          <Dashboard/>
          {gameStarted && <GameArea/>}
        </div>
        <GameOverNotification/>
        <GameWonNotification/>
      </NotificationContext.Provider>
    </GameContext.Provider>

  );
};

export default Millionaires;
