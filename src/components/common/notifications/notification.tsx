import "./notifications.sass";
import { ReactElement, useContext } from "react";
import { NotificationContext } from "../../millionaires";

type NotificationProps = {
  children: ReactElement;
  isOpen: boolean | undefined;
  type: string;
}

const Notification = ({ children, isOpen, type }: NotificationProps) => {
    const notifcationContext = useContext(NotificationContext)

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

  return (
    <div className={`notification ${isOpen ? 'notification--active' : ''}`}>
      <div className="notification__children-wrapper">{children}</div>
      <div className="notification__backdrop" onClick={onBackdropClick} />
    </div>
  );
};

export default Notification;
