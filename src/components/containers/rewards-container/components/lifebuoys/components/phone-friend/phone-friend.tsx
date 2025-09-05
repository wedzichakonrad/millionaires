import './phone-friend.sass'
import { PhoneFriendMessageService } from "../../../../../../../services/phone-friend-message.service";
import { Lifebuoy } from '../lifebouy/lifebouy';
import { useGameContext } from '../../../../../../../hooks/use-game-context';

type PhoneFriendProps = {
    type: string,
}

const PhoneFriend = ({type}: PhoneFriendProps) => {
    const gameContext = useGameContext();
    const message = PhoneFriendMessageService.getMessage(gameContext?.questions[gameContext?.questionNumber]);

    return (
        <Lifebuoy className='phone-friend' type={type} >
            <div className='phone-friend__notification'>
                {message}
            </div>
        </Lifebuoy>
    )
}

export default PhoneFriend