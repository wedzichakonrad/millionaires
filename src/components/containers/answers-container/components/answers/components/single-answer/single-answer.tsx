import "./single-answer.sass";
import Tile from "../../../../../../common/tile/tile";
import React, { useState } from "react";

type SingleAnswerProps = {
  answer: { isCorrect: boolean; content: string },
  index: number,
  setIsAnswerPending: React.Dispatch<React.SetStateAction<boolean>>,
  isDisabled: boolean,
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
};

export const answerClasses = {
  default: "",
  pending: "single-answer--pending",
  correct: "single-answer--correct",
  incorrect: "single-answer--incorrect",
};

const answerStates = {
  default: "DEFAULT",
  pending: "PENDING",
  correct: "CORRECT",
  incorrect: "INCORRECT",
};

const answerLetters = ["A", "B", "C", "D"];

const SingleAnswer = ({
  answer,
  index,
  isDisabled,
  setIsAnswerPending,
                        setQuestionNumber,
}: SingleAnswerProps) => {
  const [answerState, setAnswerState] = useState<string>("default");

  const getAnswerClass = () => {
    switch (answerState) {
      case answerStates.correct:
        return answerClasses.correct;
      case answerStates.incorrect:
        return answerClasses.incorrect;
      case answerStates.pending:
        return answerClasses.pending;
      default:
        return answerClasses.default;
    }
  };

  const onAnswerClick = () => {
    setIsAnswerPending(true);
    setAnswerState(answerStates.pending);
    setTimeout(markAnswer, 2000);
  };

  const markAnswer = () => {
    if (answer.isCorrect) {
      setTimeout(nextQuestion, 2000);
      setAnswerState(answerStates.correct);
    } else {
      setAnswerState(answerStates.incorrect);
    }
  };

  const nextQuestion = () => {
    setQuestionNumber(currentNumber => ++currentNumber)
    setIsAnswerPending(false);
  };

  return (
    <Tile
      className={`single-answer ${getAnswerClass()}`}
      tileTag="li"
      innerTag="button"
      onClick={onAnswerClick}
      disabled={isDisabled}
    >
      <>
        <span className="single-answer__letter">{answerLetters[index]}:</span>
        <p>{answer.content}{answer.isCorrect.toString()}</p>
      </>
    </Tile>
  );
};

export default SingleAnswer;
