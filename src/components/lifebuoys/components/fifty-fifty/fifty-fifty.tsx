import './fifty-fifty.sass'
import { Lifebuoy } from '../lifebouy/lifebouy'
import { useGame } from '../../../../hooks/use-game-context'
import { shuffleArray } from '../../../../utils/helpers'

type FiftyFiftyProps = {
    type: string
}

const FiftyFifty = ({type}:FiftyFiftyProps) => {
    const { setQuestions, questions, questionNumber } = useGame();

    const onFiftyFiftyClick = () => {
    if (!setQuestions) return;
    
        const questionsCopy = [...questions];
        const currentQuestion = questionsCopy[questionNumber];
        const currentAnswers = currentQuestion.answers;
        const correctAnswerIndex = currentAnswers.findIndex(answer => answer.isCorrect);

        const disabledAnswers = currentAnswers
            .map((_, index) => index)
            .filter(index => index !== correctAnswerIndex)
            .sort(shuffleArray)
            .slice(0, 2);

        disabledAnswers.forEach(index => {
            questionsCopy[questionNumber].answers[index].disabled = true;
        });

        setQuestions(questionsCopy);
    };

    return (
        <Lifebuoy className='fifty-fifty' type={type} disableNotification={true} onClick={onFiftyFiftyClick}/>
    )
}

export default FiftyFifty