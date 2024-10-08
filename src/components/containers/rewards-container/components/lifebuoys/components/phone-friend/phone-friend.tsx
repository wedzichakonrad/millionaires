import './phone-friend.sass'
import Notification from "../../../../../../common/notifications/notification";
import { PhoneFriendMessageService } from "../../../../../../../services/phone-friend-message.service";
import { NotificationContext } from '../../../../../../millionaires';
import { useContext } from 'react';

const PhoneFriend = () => {
    const message = PhoneFriendMessageService.getMessage();
    const notifcationContext = useContext(NotificationContext)


    const openNotification = () => {
        notifcationContext?.setIsNotificationOpen(true);
    }

    return (
        <div className='lifebuoy phone-friend'>
            <button className='phone-friend__inner' onClick={openNotification}/>
            <Notification>
                <div className='phone-friend__notification'>
                    {message}
                </div>
            </Notification>
        </div>
    )
}

export default PhoneFriend