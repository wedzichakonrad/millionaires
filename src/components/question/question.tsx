import './question.sass'
import Tile from "../common/tile/tile";
import { decodeHTMLEntities } from '../../utils/helpers';

interface QuestionProps {
  question: string,
}

const Question = ({ question }: QuestionProps) => {
  const decodedQuestion = decodeHTMLEntities(question)
  
  return (
      <div className='question-container'>
          <Tile className='question' tileTag='div'>
              <span>{decodedQuestion}</span>
          </Tile>
      </div>
  )
}

export default Question