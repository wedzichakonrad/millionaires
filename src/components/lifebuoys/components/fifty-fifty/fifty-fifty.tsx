import './fifty-fifty.sass'
import { Lifebuoy } from '../lifebouy/lifebouy'
import { useGame } from '../../../../hooks/use-game-context'
import { shuffleArray } from '../../../../utils/helpers'
import { Answer, Question } from '../../../../containers/millionaires'

type FiftyFiftyProps = {
    type: string
}

const FiftyFifty = ({type}:FiftyFiftyProps) => {
    const { setQuestions, questions, questionNumber, setAnimateAnswers } = useGame();

    const onFiftyFiftyClick = () => {
    if (!setQuestions) return;
        setAnimateAnswers(true)
        const questionsCopy = JSON.parse(JSON.stringify(questions));

        const currentQuestion = questionsCopy[questionNumber];
        const currentAnswers = currentQuestion.answers;
        const correctAnswerIndex = currentAnswers.findIndex((answer: Answer) => answer.isCorrect);

        const disabledAnswers = currentAnswers
            .map((_:Answer, index: number) => index)
            .filter((index: number) => index !== correctAnswerIndex)
            .sort(shuffleArray)
            .slice(0, 2);

        disabledAnswers.forEach((index: number) => {
            questionsCopy[questionNumber].answers[index].disabled = true;
        });
        setTimeout(() => {
            setAnimateAnswers(false);
            setQuestions(questionsCopy)
        }, 4000)
    };

    return (
        <Lifebuoy className='fifty-fifty' type={type} disableNotification={true} onClick={onFiftyFiftyClick}/>
    )
}

export default FiftyFifty