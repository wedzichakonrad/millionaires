import SingleAnswer from "./single-answer/single-answer";
import "./answers.sass";
import { useMemo, useState } from "react";
import { sortByLetter } from '../../utils/helpers';
import { Answer } from '../../containers/millionaires';
 
interface AnswersProps {
  answers: Answer[];
};

const Answers = ({ answers }: AnswersProps) => {
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
            isDisabled={isAnswerPending || answer.disabled}
            setIsAnswerPending={setIsAnswerPending}
          />
        );
      })}
    </ul>
  );
};

export default Answers;
