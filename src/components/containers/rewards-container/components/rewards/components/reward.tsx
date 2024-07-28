import "./reward.sass";
import { defaultCurrency } from "../../../../../../utils/game-data/rewards";
import { formatPriceValue } from "../../../../../../helpers/helpers";

type RewardProps = {
  questionNumber: number;
  index: number;
  rewardStake: string;
};

const Reward = ({ questionNumber, rewardStake, index }: RewardProps) => {
  const currency = defaultCurrency;
  const rewardNumber = index + 1;

  const getRewardState = (rewardNumber: number) => {
    if (rewardNumber === questionNumber + 1) return "reward--current-stake";
    if (rewardNumber < questionNumber + 1) return "reward--guaranteed-stake";
    return "";
  };

  return (
    <li
      key={`${rewardStake}-${index}`}
      className={`reward ${rewardNumber === 1 || rewardNumber % 5 === 0 ? "reward--white-theme" : ""} ${getRewardState(rewardNumber)}`}
    >
      <div className="reward__inner">
        <span className="reward__number">{rewardNumber}</span>
        <span className="reward__diamond" />
        <span className="reward__price">{formatPriceValue(rewardStake)}</span>
        <span className="reward__currency"> {currency}</span>
      </div>
    </li>
  );
};

export default Reward;
