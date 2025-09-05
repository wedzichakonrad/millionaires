import SingleAnswer from "./components/single-answer/single-answer";
import "./answers.sass";
import React, { useMemo, useState } from "react";
import { Answer } from '../../../../millionaires';
import { sortByLetter } from '../../../../../utils/helpers';

type AnswersProps = {
  answers: Answer[];
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Answers = ({ answers, setQuestionNumber }: AnswersProps) => {
  const [isAnswerPending, setIsAnswerPending] = useState<boolean>(false);

  const memoizedAnswers = useMemo(() => {
    return [...answers.sort(sortByLetter)];
  }, [answers]);

  return (
    <ul className="answers">
      {memoizedAnswers.map((answer, index) => {
        return (
          <SingleAnswer
            key={`${answer.content}-${index}`}
            answer={answer}
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
