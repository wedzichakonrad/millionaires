import './answers-container.sass'
import Logo from '../../components/logo/logo'
import Question from '../../components/question/question'
import Answers from '../../components/answers/answers'
import { useGame } from '../../hooks/use-game';

const AnswersContainer = () => {
    const { questions, questionNumber } = useGame();
    const currentQuestion = questions?.[questionNumber];

    return (
        <section className='answers-container'>
            <Logo/>
            {currentQuestion && (
                <>
                    <Question question={currentQuestion?.question}/>
                    <Answers answers={currentQuestion?.answers}/>
                </>
            )}
        </section>
    )
}

export default AnswersContainer
