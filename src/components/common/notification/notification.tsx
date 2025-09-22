import "./notification.sass";
import { useNotification } from '../../../hooks/use-notification-context';
import { ReactElement } from "react";

// type prop is something like id of the notification, 
// it helps with determining which notification is currently open 

interface NotificationProps {
  children: ReactElement;
  isOpen: boolean | undefined;
  type: string;
}

const Notification = ({ children, isOpen, type }: NotificationProps) => {
    const notifcationContext = useNotification();
    const onBackdropClick = () => { 
      if(notifcationContext?.setNotificationStates) {
        notifcationContext.setNotificationStates(cl => ({
          ...cl,
          [type]: {
            ...cl[type],
            isOpen: false,
          }
        }))
      }
    }

  return isOpen ?
    <div className={`notification ${isOpen ? 'notification--active' : ''}`}>
      <div className="notification__children-wrapper">{children}</div>
      <div className="notification__backdrop" onClick={onBackdropClick} />
    </div> : <></>
};

export default Notification;
