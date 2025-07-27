import AnswersContainer from "./containers/answers-container/answers-container";
import RewardsContainer from "./containers/rewards-container/rewards-container";
import "./millionaires.sass";
import { useState } from "react";
import { createContext } from 'react';

interface NotificationContextType {
    notificationStates: { [key: string]: { [key: string]: boolean } } | undefined;
    setNotificationStates: React.Dispatch<React.SetStateAction<{ [key: string]: { [key: string]: boolean }}>> | undefined;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const Millionaires = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [notificationStates, setNotificationStates] = useState<{ [key: string]: { [key: string]: boolean } }>({});

  return (
      <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
          <div className="millionaires">
              <AnswersContainer questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
              <RewardsContainer questionNumber={questionNumber} />
          </div>
      </NotificationContext.Provider>
  );
};

export default Millionaires;
