import { ReactElement, useContext } from 'react';
import './lifebouy.sass';
import Notification from '../../../../../../../common/notifications/notification';
import { NotificationContext } from '../../../../../../../millionaires';

export type LifebuoyProps = {
  className: string;
  children: ReactElement;
  type: string,
}

export const Lifebuoy = ({ className, children, type}: LifebuoyProps) => {
  const notifcationContext = useContext(NotificationContext)
  const currentLifebouy = notifcationContext?.notificationStates?.[type];
 
  const openNotification = () => {
    if (!notifcationContext?.setNotificationStates || currentLifebouy?.isUsed) return;

    notifcationContext.setNotificationStates(cl => ({
      ...cl,
      [type]: {
        isOpen: true,
        isUsed: true,
      }
    }))
  }

  return (
      <div className={`lifebuoy ${className} ${currentLifebouy?.isUsed ? 'lifebuoy--used' : ''}`}>
          <button onClick={openNotification}/>
          <Notification isOpen={currentLifebouy?.isOpen} type={type}>
            {children}
          </Notification>
      </div>
  )
}