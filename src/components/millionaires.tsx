import AnswersContainer from './containers/answers-container/answers-container'
import RewardsContainer from './containers/rewards-container/rewards-container'
import './millionaires.sass'

const Millionaires = () => {

  return (
    <div className='millionaires'>
        <AnswersContainer/>
        <RewardsContainer/>
    </div>
  )
}

export default Millionaires