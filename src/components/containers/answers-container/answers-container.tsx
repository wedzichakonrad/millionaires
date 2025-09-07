import './answers-container.sass'
import Logo from './components/logo/logo'
import Question from './components/question/question'
import Answers from './components/answers/answers'
import {useEffect, useState} from "react";
import {getGameData} from "../../../api/get-game-data";
import Preloader from "../../common/preloaders/preloader";
import { useGameContext } from '../../../hooks/use-game-context';

export const answerLetters = ["A", "B", "C", "D"];

const AnswersContainer = () => {
    const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { setQuestions, questions, questionNumber, isOver } = useGameContext();

    useEffect(() => {
        const fetchData = async () => {
            setIsFetchingData(true);
            try {
                const data = await getGameData();
                if (data && data.length > 0) {
                    setQuestions?.(data);
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

        if (!isOver) {
            fetchData();
        }
    }, [isOver]);

    const currentQuestion = questions?.[questionNumber];

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
                            <Answers answers={currentQuestion?.answers}/>
                        </>
                    )}
                </>
            )}
        </section>
    )
}

export default AnswersContainer
