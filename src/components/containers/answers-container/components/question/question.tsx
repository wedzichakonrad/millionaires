import './question.sass'
import Tile from "../../../../common/tile/tile";

interface QuestionProps {
  question: string,
}

const Question = ({ question }: QuestionProps) => {
  return (
      <div className='question-container'>
          <Tile className='question' tileTag='div'>
              <span>{question}</span>
          </Tile>
      </div>
  )
}

export default Question