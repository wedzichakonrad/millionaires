import AnswersContainer from "./containers/answers-container/answers-container";
import RewardsContainer from "./containers/rewards-container/rewards-container";
import "./millionaires.sass";
import { useState } from "react";
import { createContext } from 'react';

interface NotificationContextType {
    isNotificationOpen: { [key: string]: boolean };
    setIsNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const Millionaires = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>({});
 
  return (
      <NotificationContext.Provider value={{ isNotificationOpen, setIsNotificationOpen }}>
          <div className="millionaires">
              <AnswersContainer
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
              />
              <RewardsContainer questionNumber={questionNumber} />
          </div>
      </NotificationContext.Provider>
  );
};

export default Millionaires;
