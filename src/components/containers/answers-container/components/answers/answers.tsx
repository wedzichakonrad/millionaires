import SingleAnswer from './components/single-answer/single-answer'
import './answers.sass'

interface SingleAnswer {
  content: string,
  isCorrect: boolean,
}

interface Answers {
  answers: SingleAnswer[],
}

const Answers = ({answers}: Answers) => {
  return (
    <div className='answers'>
      {answers.map((answer, index) => {
        return (
          <SingleAnswer
            key={`${answer.content}-${index}`}
            text={answer.content}
            isCorrect={answer.isCorrect}
          />
        )
      })}
    </div>
  )
}

export default Answers