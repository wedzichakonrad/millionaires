import GameOverNotification from './common/notifications/game-over/game-over-notification';
import AnswersContainer from "./containers/answers-container/answers-container";
import RewardsContainer from "./containers/rewards-container/rewards-container";
import "./millionaires.sass";
import { useState } from "react";
import { createContext } from 'react';

interface GameContextType {
    isOver: boolean;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    restartGame: () => void;
}

interface NotificationContextType {
    notificationStates: { [key: string]: { [key: string]: boolean } } | undefined;
    setNotificationStates: React.Dispatch<React.SetStateAction<{ [key: string]: { [key: string]: boolean }}>> | undefined;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
export const GameContext = createContext<GameContextType | undefined>(undefined);

const Millionaires = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [notificationStates, setNotificationStates] = useState<{ [key: string]: { [key: string]: boolean } }>({});
  const [isOver, setIsGameOver] = useState<boolean>(false);

  const restartGame = () => {
    setNotificationStates({});
    setIsGameOver(false);
  }

  return (      
    <GameContext.Provider value={{ isOver, setIsGameOver, restartGame }}>
      <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
          <div className="millionaires">
              <AnswersContainer questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} isGameOver={isOver}/>
              <RewardsContainer questionNumber={questionNumber} />
          </div>
          <GameOverNotification isOpen={isOver}/>
      </NotificationContext.Provider>
    </GameContext.Provider>

  );
};

export default Millionaires;
