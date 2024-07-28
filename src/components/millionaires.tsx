import AnswersContainer from './containers/answers-container/answers-container'
import RewardsContainer from './containers/rewards-container/rewards-container'
import './millionaires.sass'
import { useState } from "react";

const Millionaires = () => {
    const [questionNumber, setQuestionNumber] = useState<number>(0);

  return (
    <div className='millionaires'>
        <AnswersContainer questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        <RewardsContainer questionNumber={questionNumber} />
    </div>
  )
}

export default Millionaires