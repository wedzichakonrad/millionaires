import SingleAnswer from './components/single-answer/single-answer'
import './answers.sass'
import { useState } from "react";

type AnswerProps = {
    content: string,
    isCorrect: boolean,
}

type AnswersProps = {
    answers: AnswerProps[],
}

const Answers = ({ answers }: AnswersProps) => {
    const [isAnswerPending, setIsAnswerPending] = useState<boolean>(false)

    return (
        <ul className='answers'>
            {answers.map((answer, index) => {
                return (
                    <SingleAnswer
                        key={`${answer.content}-${index}`}
                        answer={answer}
                        index={index}
                        isDisabled={isAnswerPending}
                        setIsAnswerPending={setIsAnswerPending}
                    />
                )
            })}
        </ul>
    )
}

export default Answers