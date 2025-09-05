import './phone-friend.sass'
import { PhoneFriendMessageService } from "../../../../../../../services/phone-friend-message.service";
import { Lifebuoy } from '../lifebouy/lifebouy';
import { useContext } from 'react';
import { GameContext } from '../../../../../../millionaires';

type PhoneFriendProps = {
    type: string,
}

const PhoneFriend = ({type}: PhoneFriendProps) => {
    const gameContext = useContext(GameContext);
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