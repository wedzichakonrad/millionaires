import { ReactElement } from 'react';
import './lifebouy.sass';
import { useNotification } from '../../../hooks/use-notification';
import Notification from '../../common/notification/notification'
import { Button } from '../../common/button/button';
import { useGame } from '../../../hooks/use-game';

interface LifebuoyProps {
  className: string;
  children?: ReactElement;
  type: string;
  disableNotification?: boolean;
  onClick?: () => void;
  icon?: ReactElement;
}

export const Lifebuoy = ({ className, children= <></>, type, disableNotification, onClick, icon}: LifebuoyProps) => {
  const { notificationStates, setNotificationStates } = useNotification();
  const { isPendingAnswer } = useGame();
  const currentLifebouy = notificationStates?.[type];
 
  const openNotification = () => {
    setNotificationStates(cl => ({
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
              openNotification();
              onClick?.();              
            }}
            tabIndex={currentLifebouy?.isUsed ? -1 : 0}
            disabled={currentLifebouy?.isUsed || isPendingAnswer}
          >
            {icon}
          </Button>
          <Notification isOpen={currentLifebouy?.isOpen} type={type}>
            {children}
          </Notification>
      </div>
  )
}