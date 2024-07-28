import './rewards-container.sass'
import Lifebuoys from "./components/lifebuoys/lifebuoys";
import Rewards from "./components/rewards/rewards";

type RewardsContainerProps = {
    questionNumber: number;
}

const RewardsContainer = ({questionNumber}: RewardsContainerProps) => {
  return (
    <section className='rewards-container'>
      <Lifebuoys/>
      <Rewards questionNumber={questionNumber}/>
    </section>
  )
}

export default RewardsContainer