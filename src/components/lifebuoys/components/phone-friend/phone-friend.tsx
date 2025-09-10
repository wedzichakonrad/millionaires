import './phone-friend.sass'
import { Lifebuoy } from '../lifebouy/lifebouy';
import { useGame } from '../../../../hooks/use-game-context';
import { PhoneFriendMessageService } from '../../../../services/phone-friend-message.service';

type PhoneFriendProps = {
    type: string,
}

const PhoneFriend = ({type}: PhoneFriendProps) => {
    const { questions, questionNumber} = useGame();
    const message = PhoneFriendMessageService.getMessage(questions[questionNumber]);

    return (
        <Lifebuoy className='phone-friend' type={type} >
            <div className='phone-friend__notification'>
                {message}
            </div>
        </Lifebuoy>
    )
}

export default PhoneFriend