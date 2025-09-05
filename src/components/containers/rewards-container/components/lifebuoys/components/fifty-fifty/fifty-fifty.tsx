import './fifty-fifty.sass'
import { Lifebuoy } from '../lifebouy/lifebouy'
import { useGameContext } from '../../../../../../../hooks/use-game-context'

type FiftyFiftyProps = {
    type: string
}

const FiftyFifty = ({type}:FiftyFiftyProps) => {
    const gameContext = useGameContext();

    const onFiftyFiftyClick = () => {
    };

    return (
        <Lifebuoy className='fifty-fifty' type={type} disableNotification={true} onClick={onFiftyFiftyClick}/>
    )
}

export default FiftyFifty