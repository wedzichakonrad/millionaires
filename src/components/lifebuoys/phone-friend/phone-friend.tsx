import './phone-friend.sass';
import { Lifebuoy } from '../lifebouy/lifebouy';
import { PhoneIcon } from '../../common/icons/phone';
import { PhoneFriendNotification } from '../phone-friend-notification/phone-friend-notification';
import { LifebuoyTypes } from '../lifebuoys';

const PhoneFriend = () => {
    return (
        <Lifebuoy className='phone-friend' type={LifebuoyTypes.phoneFriend} icon={<PhoneIcon/>}>
            <PhoneFriendNotification/>
        </Lifebuoy>
    )
}

export default PhoneFriend