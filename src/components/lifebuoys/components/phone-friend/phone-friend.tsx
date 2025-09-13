import { Lifebuoy } from '../lifebouy/lifebouy';
import { useGame } from '../../../../hooks/use-game-context';
import { PhoneFriendMessageService } from '../../../../services/phone-friend-message.service';
import { PhoneIcon } from '../../../../icons/phone';

type PhoneFriendProps = {
    type: string,
}

const PhoneFriend = ({type}: PhoneFriendProps) => {
    const { questions, questionNumber} = useGame();
    const message = PhoneFriendMessageService.getMessage(questions[questionNumber]);

    return (
        <Lifebuoy className='phone-friend' type={type} icon={<PhoneIcon/>}>
            <div className='phone-friend__notification'>
                {message}
            </div>
        </Lifebuoy>
    )
}

export default PhoneFriend