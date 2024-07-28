import SingleAnswer from './components/single-answer/single-answer'
import './answers.sass'
import React, { useState } from "react";

type AnswerProps = {
    content: string,
    isCorrect: boolean,
}

type AnswersProps = {
    answers: AnswerProps[],
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
}

const Answers = ({ answers, setQuestionNumber }: AnswersProps) => {
    const [isAnswerPending, setIsAnswerPending] = useState<boolean>(false)

    const shuffledAnswers = answers;

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
                        setQuestionNumber={setQuestionNumber}
                    />
                )
            })}
        </ul>
    )
}

export default Answers