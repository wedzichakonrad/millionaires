import "./single-answer.sass";
import Tile from "../../../common/tile/tile";
import React, { useState } from "react";
import { useGame } from '../../../../hooks/use-game-context';
import { gameRules } from '../../../../utils/config/game-rules';
import { Answer } from '../../../../containers/millionaires';

type SingleAnswerProps = {
  answer: Answer,
  setIsAnswerPending: React.Dispatch<React.SetStateAction<boolean>>,
  isDisabled: boolean | undefined,
};

const answerClasses = {
  default: "",
  pending: "single-answer--pending",
  correct: "single-answer--correct",
  incorrect: "single-answer--incorrect",
  disabled: "single-answer--disabled",
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
}: SingleAnswerProps) => {
  const [answerState, setAnswerState] = useState<string>(answerStates.default);
  const { isOver, setIsGameOver, questionNumber, setQuestionNumber, setIsGameWon } = useGame();

  const getAnswerClass = () => {

    if (isOver && answer.isCorrect) {
      return answerClasses.correct;
    }

    if (answer.disabled) {
      return answerClasses.disabled;
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
    if (isDisabled) return;
    
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
      setIsGameOver?.(true);
    }
  };

  const nextQuestion = () => {
    if (gameRules.questionsCount === questionNumber) {
      setIsGameWon(true);
    } else {
      setQuestionNumber(currentNumber => ++currentNumber)
      setIsAnswerPending(false);
    }
  };

  return (
    <Tile
      className={`single-answer ${getAnswerClass()}`}
      tileTag="li"
      innerTag="button"
      onClick={onAnswerClick}
    >
      <>
        <span className="single-answer__letter">{answer.letter}:</span>
        <p>{answer.content}{answer.isCorrect.toString()}</p>
      </>
    </Tile>
  );
};

export default SingleAnswer;
