import './answers-container.sass'
import Logo from './components/logo/logo'
import Question from './components/question/question'
import Answers from './components/answers/answers'
import React, {useContext, useEffect, useState} from "react";
import {getGameData} from "../../../api/get-game-data";
import Preloader from "../../common/preloaders/preloader";
import { GameContext } from '../../millionaires';

export const answerLetters = ["A", "B", "C", "D"];

type AnswersContainerProps = {
    questionNumber: number;
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>,
    isGameOver: boolean,
}
const AnswersContainer = ({questionNumber, setQuestionNumber, isGameOver}: AnswersContainerProps) => {
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const gameContext = useContext(GameContext);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetchingData(true);
            try {
                const data = await getGameData();
                if (data && data.length > 0) {
                    gameContext?.setQuestions?.(data);
                    setError(null);
                } else {
                    setError("No data received");
                }
            } catch (err) {
                setError("Failed to load questions. Using mock data.");
            } finally {
                setIsFetchingData(false);
            }
        };

        if (!isGameOver) {
            fetchData();
        }
    }, [isGameOver]);

    const currentQuestion = gameContext?.questions?.[questionNumber];

    return (
        <section className='answers-container'>
            <Logo/>
            {isFetchingData ? (
                <Preloader/>
            ) : (
                <>
                    {error && <div className="error-message">{error}</div>}
                    {currentQuestion && (
                        <>
                            <Question question={currentQuestion?.question}/>
                            <Answers answers={currentQuestion?.answers} setQuestionNumber={setQuestionNumber}/>
                        </>
                    )}
                </>
            )}
        </section>
    )
}

export default AnswersContainer
