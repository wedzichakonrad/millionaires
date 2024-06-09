import './single-answer.sass'
import Tile from "../../../../../../common/tile/tile";

interface AnswerProps {
  text: string,
  isCorrect: boolean,
}

const SingleAnswer = ({ text, isCorrect }: AnswerProps) => {
  return (
      <Tile className='single-answer' tileTag='li'>
          <>
              <p>{text}</p>
          </>
      </Tile>
  )
}

export default SingleAnswer