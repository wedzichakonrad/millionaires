import "./rewards.sass";
import { rewards } from "../../../../../utils/game-data/rewards";
import Reward from "./components/reward";

type RewardsProps = {
  questionNumber: number;
};

const Rewards = ({ questionNumber }: RewardsProps) => {
  return (
    <div className="rewards">
      <ol className="rewards__list">
        {rewards.map((reward, index) => {
          return (
            <Reward
              rewardStake={reward}
              index={index}
              key={index}
              questionNumber={questionNumber}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default Rewards;
