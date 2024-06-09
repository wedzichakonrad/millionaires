import './rewards.sass'
import {defaultCurrency, rewards} from "../../../../../utils/game-data/rewards";
import {formatPriceValue} from "../../../../../helpers/helpers";

const Rewards = () => {
    const currency = defaultCurrency;

    return (
        <div className='rewards'>
            <ol className='rewards__list'>
                {rewards.map((reward, index) => {
                    const rewardNumber = index + 1;
                    return (
                        <li key={`${reward}-${index}`} className={`reward ${rewardNumber === 1 || rewardNumber % 5 === 0 ? 'reward--white-theme' : '' }`}>
                            <span className='reward__number'>{rewardNumber}</span>
                            <span className='reward__diamond'/>
                            <span className='reward__price'>{formatPriceValue(reward)}</span>
                            <span className='reward__currency'> {currency}</span>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Rewards