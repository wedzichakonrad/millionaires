import './phone-friend.sass'
import { PhoneFriendMessageService } from "../../../../../../../services/phone-friend-message.service";
import { Lifebuoy } from '../common/lifebouy/lifebouy';

type PhoneFriendTypes = {
    type: string
}

const PhoneFriend = ({type}: PhoneFriendTypes) => {
    const message = PhoneFriendMessageService.getMessage();

    return (
        <Lifebuoy className='phone-friend' type={type} >
            <div className='phone-friend__notification'>
                {message}
            </div>
        </Lifebuoy>
    )
}

export default PhoneFriend