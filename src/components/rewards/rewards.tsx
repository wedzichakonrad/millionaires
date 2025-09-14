import "./rewards.sass";
import { rewards } from "../../utils/game-data/rewards";
import Reward from "./reward/reward";

const Rewards = () => {
  return (
    <div className="rewards">
      <ol className="rewards__list">
        {rewards.map((reward, index) => {
          return (
            <Reward
              rewardStake={reward}
              index={index}
              key={index}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Rewards;
