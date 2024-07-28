import SingleAnswer from "./components/single-answer/single-answer";
import "./answers.sass";
import React, { useMemo, useState } from "react";
import { shuffleArray } from "../../../../../helpers/helpers";

type AnswerProps = {
  content: string;
  isCorrect: boolean;
};

type AnswersProps = {
  answers: AnswerProps[];
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Answers = ({ answers, setQuestionNumber }: AnswersProps) => {
  const [isAnswerPending, setIsAnswerPending] = useState<boolean>(false);
  const memoizedAnswers = useMemo(() => {
    return [...answers.sort(shuffleArray)];
  }, [answers]);

  return (
    <ul className="answers">
      {memoizedAnswers.map((answer, index) => {
        return (
          <SingleAnswer
            key={`${answer.content}-${index}`}
            answer={answer}
            index={index}
            isDisabled={isAnswerPending}
            setIsAnswerPending={setIsAnswerPending}
            setQuestionNumber={setQuestionNumber}
          />
        );
      })}
    </ul>
  );
};

export default Answers;
