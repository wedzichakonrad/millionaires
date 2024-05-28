import './answers-container.sass'
import Logo from './components/logo/logo'
import Question from './components/question/question'
import Answers from './components/answers/answers'
import { mockAnswers } from '../../../utils/game-data/questions'

const AnswersContainer = () => {
  return (
    <section className='answers-container'>
        <Logo/>
        <Question question={mockAnswers.question}/>
        <Answers answers={mockAnswers.answers}/>
    </section>
  )
}

export default AnswersContainer