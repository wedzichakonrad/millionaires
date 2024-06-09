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

    // TODO DO POPRAWY FETCH, CZASEM ZWRACA BŁĄD

    useEffect(() => {
        setIsFetchingData(true)
        getGameData()
            .then(data => {
                setQuestions(data)
            })
            .finally(() => setIsFetchingData(false))

    },[]);

    return (
    <section className='answers-container'>
        <Logo/>
        <Question question={questions[0].question}/>
        {isFetchingData ? <Preloader/> : <Answers answers={questions[0].answers}/>}
    </section>
    )
}

export default AnswersContainer