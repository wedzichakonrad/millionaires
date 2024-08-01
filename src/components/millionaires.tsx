import AnswersContainer from "./containers/answers-container/answers-container";
import RewardsContainer from "./containers/rewards-container/rewards-container";
import "./millionaires.sass";
import { useState } from "react";
import { createContext, useContext } from 'react';

export const NotificationContext = createContext<{ isOpen: boolean}>({ isOpen: false});

const Millionaires = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  return (
      <NotificationContext.Provider value={{ isOpen: false}}>
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
