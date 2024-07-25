import './answers-container.sass'
import Logo from './components/logo/logo'
import Question from './components/question/question'
import Answers from './components/answers/answers'
import {mockData} from '../../../utils/game-data/game-data'
import {useEffect, useState} from "react";
import {getGameData} from "../../../api/get-game-data";
import Preloader from "../../common/preloaders/preloader";

const AnswersContainer = () => {
    const [questions, setQuestions] = useState(mockData);
    const [isFetchingData, setIsFetchingData] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetchingData(true);
            try {
                const data = await getGameData();
                if (data && data.length > 0) {
                    setQuestions(data);
                    setError(null);
                } else {
                    throw new Error("No data received");
                }
            } catch (err) {
                console.error("Error fetching game data:", err);
                setError("Failed to load questions. Using mock data.");
            } finally {
                setIsFetchingData(false);
            }
        };

        fetchData();
    }, []);

    const currentQuestion = questions[0];

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
                            <Question question={currentQuestion.question}/>
                            <Answers answers={currentQuestion.answers}/>
                        </>
                    )}
                </>
            )}
        </section>
    )
}

export default AnswersContainer