import "./reward.sass";
import { defaultCurrency } from "../../../../../../utils/game-data/rewards";
import { formatPriceValue } from '../../../../../../utils/helpers';
import { useGameContext } from '../../../../../../hooks/use-game-context';

type RewardProps = {
  index: number;
  rewardStake: string;
};

const Reward = ({ rewardStake, index }: RewardProps) => {
  const currency = defaultCurrency;
  const { questionNumber } = useGameContext(); 
  const rewardNumber = index + 1;
  const isRewardWhiteThemed = rewardNumber === 1 || rewardNumber % 5 === 0;

  const getRewardState = (rewardNumber: number) => {
    const currentRewardNumber = questionNumber + 1;
    if (rewardNumber === currentRewardNumber) return "reward--current-stake";
    if (rewardNumber < currentRewardNumber) return "reward--guaranteed-stake";
    return "";
  };

  return (
    <li
      key={rewardStake}
      className={`reward ${isRewardWhiteThemed ? "reward--white-theme" : ""} ${getRewardState(rewardNumber)}`}
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
