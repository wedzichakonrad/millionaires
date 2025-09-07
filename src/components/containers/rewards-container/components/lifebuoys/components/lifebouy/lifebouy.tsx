import { ReactElement } from 'react';
import './lifebouy.sass';
import Notification from '../../../../../../common/notifications/notification';
import { useNotificationContext } from '../../../../../../../hooks/use-notification-context';

export type LifebuoyProps = {
  className: string;
  children?: ReactElement;
  type: string;
  disableNotification?: boolean;
  onClick?: () => void;
}

export const Lifebuoy = ({ className, children= <></>, type, disableNotification, onClick}: LifebuoyProps) => {
  const notifcationContext = useNotificationContext();
  const currentLifebouy = notifcationContext?.notificationStates?.[type];
 
  const openNotification = () => {
    if (!notifcationContext?.setNotificationStates || currentLifebouy?.isUsed) return;

    notifcationContext.setNotificationStates(cl => ({
      ...cl,
      [type]: {
        isOpen: !disableNotification,
        isUsed: true,
      }
    }))
  }

  return (
      <div className={`lifebuoy ${className} ${currentLifebouy?.isUsed ? 'lifebuoy--used' : ''}`}>
          <button 
            onClick={() => {
              openNotification();
              onClick?.();
            }} 
            tabIndex={currentLifebouy?.isUsed ? -1 : 0}
          />
          <Notification isOpen={currentLifebouy?.isOpen} type={type}>
            {children}
          </Notification>
      </div>
  )
}