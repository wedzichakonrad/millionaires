import './phone-friend.sass';
import { Lifebuoy } from '../lifebouy/lifebouy';
import { PhoneIcon } from '../../../../icons/phone';
import { PhoneFriendNotification } from '../phone-friend-notification/phone-friend-notification';

type PhoneFriendProps = {
    type: string,
}

const PhoneFriend = ({type}: PhoneFriendProps) => {
    return (
        <Lifebuoy className='phone-friend' type={type} icon={<PhoneIcon/>}>
            <PhoneFriendNotification/>
        </Lifebuoy>
    )
}

export default PhoneFriend