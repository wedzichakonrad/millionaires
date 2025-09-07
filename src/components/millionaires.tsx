import { mockData } from '../utils/game-data/game-data';
import GameOverNotification from './common/notifications/game-over/game-over-notification';
import AnswersContainer from "./containers/answers-container/answers-container";
import RewardsContainer from "./containers/rewards-container/rewards-container";
import "./millionaires.sass";
import { useState } from "react";
import { createContext } from 'react';

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
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [notificationStates, setNotificationStates] = useState<NotificationState>({});
  const [isOver, setIsGameOver] = useState<boolean>(false);
  const [questions, setQuestions] = useState(mockData);

  const restartGame = () => {
    setNotificationStates({});
    setIsGameOver(false);
  }

  return (      
    <GameContext.Provider value={{ isOver, setIsGameOver, restartGame, questions, setQuestions, questionNumber, setQuestionNumber }}>
      <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
          <div className="millionaires">
              <AnswersContainer/>
              <RewardsContainer/>
          </div>
          <GameOverNotification isOpen={isOver}/>
      </NotificationContext.Provider>
    </GameContext.Provider>

  );
};

export default Millionaires;
