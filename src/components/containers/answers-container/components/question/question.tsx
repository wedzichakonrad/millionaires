import './question.sass'

interface QuestionProps {
  question: string,
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className='question'>{question}</div>
  )
}

export default Question