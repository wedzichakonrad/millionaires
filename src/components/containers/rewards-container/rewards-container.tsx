import './rewards-container.sass'
import Lifebuoys from "./components/lifebuoys/lifebuoys";
import Rewards from "./components/rewards/rewards";

const RewardsContainer = () => {

  return (
    <section className='rewards-container'>
      <Lifebuoys/>
      <Rewards/>
    </section>
  )
}

export default RewardsContainer