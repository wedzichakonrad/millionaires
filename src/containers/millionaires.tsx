import { useState, createContext } from "react";
import GameOverNotification from '../components/common/notifications/game-over/game-over-notification';
import GameWonNotification from '../components/common/notifications/game-won/game-won-notification';
import { gameRules } from '../utils/config/game-rules';
import { mockData } from '../utils/game-data/game-data';
import { GameArea } from './game-area/game-area';
import { Dashboard } from './dashboard/dashboard';

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
    startGame: () => void;
    gameStarted: boolean;
}

interface NotificationContextType {
    notificationStates: NotificationState | undefined;
    setNotificationStates: React.Dispatch<React.SetStateAction<NotificationState>>;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const GameContext = createContext<GameContextType | undefined>(undefined);

const Millionaires = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(gameRules.firstQuestionIndex);
  const [notificationStates, setNotificationStates] = useState<NotificationState>(gameRules.notificationsData);
  const [questions, setQuestions] = useState(mockData);
  const [isOver, setIsGameOver] = useState<boolean>(gameRules.gameLost);
  const [isWon, setIsGameWon] = useState(gameRules.gameWon);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
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
      startGame 
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
