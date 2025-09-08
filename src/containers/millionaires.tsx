import "./millionaires.sass";
import { useState, createContext } from "react";
import GameOverNotification from '../components/common/notifications/game-over/game-over-notification';
import GameWonNotification from '../components/common/notifications/game-won/game-won-notification';
import AnswersContainer from './answers/answers-container';
import RewardsContainer from './rewards/rewards-container';
import { firstQuestionIndex, questionsCount } from '../utils/config/game-rules';
import { mockData } from '../utils/game-data/game-data';

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
}

interface NotificationContextType {
    notificationStates: NotificationState | undefined;
    setNotificationStates: React.Dispatch<React.SetStateAction<NotificationState>>;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const GameContext = createContext<GameContextType | undefined>(undefined);

const Millionaires = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(firstQuestionIndex);
  const [notificationStates, setNotificationStates] = useState<NotificationState>({});
  const [questions, setQuestions] = useState(mockData);
  const [isOver, setIsGameOver] = useState<boolean>(false);
  const [isWon, setIsGameWon] = useState(false);

  const restartGame = () => {
    setNotificationStates({});
    setIsGameOver(false);
    setIsGameWon(false);
    setQuestionNumber(firstQuestionIndex);
  }

  console.log(questionNumber, questionsCount, questionNumber === questionsCount, )
  return (      
    <GameContext.Provider value={{ isOver, isWon, setIsGameOver, restartGame, questions, setQuestions, questionNumber, setQuestionNumber, setIsGameWon }}>
      <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
          <div className="millionaires">
              <AnswersContainer/>
              <RewardsContainer/>
          </div>
          <GameOverNotification/>
          <GameWonNotification/>
      </NotificationContext.Provider>
    </GameContext.Provider>

  );
};

export default Millionaires;
