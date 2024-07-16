import './single-answer.sass'
import Tile from "../../../../../../common/tile/tile";
import { useState } from "react";

type SingleAnswerProps = {
    answer: { isCorrect: boolean, content: string },
    index: number,
    setIsAnswerPending: React.Dispatch<React.SetStateAction<boolean>>,
    isDisabled: boolean
}

export const answerClasses = {
    default: '',
    pending: 'single-answer--pending',
    correct: 'single-answer--correct',
    incorrect: 'single-answer--incorrect',
}

const answerStates = {
    default: 'DEFAULT',
    pending: 'PENDING',
    correct: 'CORRECT',
    incorrect: 'INCORRECT',
}

const answerLetters = ['A', 'B', 'C', 'D']

const SingleAnswer = ({ answer, index, isDisabled, setIsAnswerPending }: SingleAnswerProps) => {
    const [answerState, setAnswerState] = useState<string>('default');

    const getAnswerClass = () => {
        switch (answerState) {
            case answerStates.correct:
                return answerClasses.correct
            case answerStates.incorrect:
                return answerClasses.incorrect
            case answerStates.pending:
                return answerClasses.pending
            default:
                return answerClasses.default
        }
    }

    const onAnswerClick = () => {
        setIsAnswerPending(true)
        setAnswerState(answerStates.pending)
        setTimeout(markAnswer, 2000)

        console.log('CLICK', index, answer)
    }

    const markAnswer = () => {
        if (answer.isCorrect) {
            setAnswerState(answerStates.correct)
            setTimeout(nextQuestion, 2000)
        } else {
            setAnswerState(answerStates.incorrect)
        }
    }

    const nextQuestion = () => {
        setIsAnswerPending(false)
        console.log('next question')
    };

    return (
        <Tile className={`single-answer ${getAnswerClass()}`} tileTag='li'>
            <button className={'single-answer__button'} onClick={onAnswerClick} disabled={isDisabled}>
                <span className='single-answer__letter'>{answerLetters[index]}: </span>
                <p>{answer.content}</p>
            </button>
        </Tile>
    )
}

export default SingleAnswer