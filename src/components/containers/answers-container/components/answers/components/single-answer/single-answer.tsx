import "./single-answer.sass";
import Tile from "../../../../../../common/tile/tile";
import React, { useContext, useState } from "react";
import { Answer, GameContext } from '../../../../../../millionaires';

type SingleAnswerProps = {
  answer: Answer,
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

const nextQuestionDelay = 2000;

const SingleAnswer = ({
  answer,
  isDisabled,
  setIsAnswerPending,
  setQuestionNumber,
}: SingleAnswerProps) => {
  const [answerState, setAnswerState] = useState<string>(answerStates.default);
  const gameContext = useContext(GameContext);

  const getAnswerClass = () => {

    if (gameContext?.isOver && answer.isCorrect) {
      return answerClasses.correct;
    }

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
    setTimeout(markAnswer, nextQuestionDelay);
  };

  const markAnswer = () => {
    if (answer.isCorrect) {
      setTimeout(nextQuestion, nextQuestionDelay);
      setAnswerState(answerStates.correct);
    } else {
      setAnswerState(answerStates.incorrect);
      gameContext?.setIsGameOver?.(true);
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
        <span className="single-answer__letter">{answer.letter}:</span>
        <p>{answer.content}{answer.isCorrect.toString()}</p>
      </>
    </Tile>
  );
};

export default SingleAnswer;
