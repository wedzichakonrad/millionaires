import './phone-friend.sass'
import Notification from "../../../../../../common/notifications/notification";
import { PhoneFriendMessageService } from "../../../../../../../services/phone-friend-message.service";

const PhoneFriend = () => {
    const message = PhoneFriendMessageService.getMessage();
    const openNotification = () => {

    }

    return (
        <div className='lifebuoy phone-friend' onClick={openNotification}>
            <button className='phone-friend__inner'/>
            <Notification isOpen={false}>
                <div className='phone-friend__notification'>
                    {message}
                </div>
            </Notification>
        </div>
    )
}

export default PhoneFriend