import "./single-answer.sass";
import Tile from "../../common/tile/tile";
import React, { useState } from "react";
import { useGame } from '../../../hooks/use-game-context';
import { Answer } from '../../../containers/millionaires';
import { config } from '../../../utils/config/config';

interface SingleAnswerProps {
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
  const { isOver, setIsGameOver, questionNumber, setQuestionNumber, setIsGameWon, animateAnswers } = useGame();

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
    if (config.gameRules.questionsCount === questionNumber) {
      setIsGameWon(true);
    } else {
      setQuestionNumber(currentNumber => ++currentNumber)
      setIsAnswerPending(false);
    }
  };

  return (
    <Tile
      className={`single-answer ${getAnswerClass()} ${animateAnswers ? 'single-answer--animated' : ''}`}
      tileTag="li"
      innerTag="button"
      onClick={onAnswerClick}
    >
      <>
        <span className="single-answer__letter">{answer.letter}:</span>
        <p className="single-answer__content">{answer.content}{answer.isCorrect.toString()}</p>
      </>
    </Tile>
  );
};

export default SingleAnswer;
