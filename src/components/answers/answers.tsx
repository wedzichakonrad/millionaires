import SingleAnswer from "./single-answer/single-answer";
import "./answers.sass";
import { useMemo } from "react";
import { sortByLetter } from '../../utils/helpers/helpers';
import { Answer } from '../../utils/types/types';
import { useGame } from '../../hooks/use-game-context';
 
interface AnswersProps {
  answers: Answer[];
};

const Answers = ({ answers }: AnswersProps) => {
  const { isPendingAnswer } = useGame();

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
            isDisabled={isPendingAnswer || answer.disabled}
          />
        );
      })}
    </ul>
  );
};

export default Answers;
