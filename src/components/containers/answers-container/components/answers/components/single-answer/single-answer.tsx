import './single-answer.sass'

interface AnswerProps {
  text: string,
  isCorrect: boolean,
}

const SingleAnswer = ({ text, isCorrect }: AnswerProps) => {
  return (
    <div className='single-answer'>
      <span>{isCorrect.toString()}</span>
      <p>{text}</p>
    </div>
  )
}

export default SingleAnswer