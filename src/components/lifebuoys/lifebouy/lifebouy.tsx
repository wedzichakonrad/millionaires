import { ReactElement } from 'react';
import './lifebouy.sass';
import { useNotificationContext } from '../../../hooks/use-notification-context';
import Notification from '../../common/notification/notification'
import { Button } from '../../common/button/button';

interface LifebuoyProps {
  className: string;
  children?: ReactElement;
  type: string;
  disableNotification?: boolean;
  onClick?: () => void;
  icon?: ReactElement;
}

export const Lifebuoy = ({ className, children= <></>, type, disableNotification, onClick, icon}: LifebuoyProps) => {
  const notifcationContext = useNotificationContext();
  const currentLifebouy = notifcationContext?.notificationStates?.[type];
 
  const openNotification = () => {
    if (!notifcationContext?.setNotificationStates) return;

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
          <Button 
            onClick={() => {
              if (currentLifebouy?.isUsed) return;
              openNotification();
              onClick?.();
              
            }}
            tabIndex={currentLifebouy?.isUsed ? -1 : 0}
            disabled={currentLifebouy?.isUsed}
          >
            {icon}
          </Button>
          <Notification isOpen={currentLifebouy?.isOpen} type={type}>
            {children}
          </Notification>
      </div>
  )
}