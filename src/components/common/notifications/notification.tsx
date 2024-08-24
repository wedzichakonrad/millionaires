import "./notifications.sass";
import { ReactElement, useContext, useState } from "react";
import { NotificationContext } from "../../millionaires";

type NotificationProps = {
  children: ReactElement;
  isNotificationOpen: boolean;
  setIsNotificationOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notification = ({ children }: NotificationProps) => {

    const notifcationContext = useContext(NotificationContext)

    const onBackdropClick = () => {
      console.log('test', notifcationContext?.isNotificationOpen)
      notifcationContext?.setIsNotificationOpen(false)
    }

  return (
    <div className={`notification ${notifcationContext?.isNotificationOpen ? 'notification--active' : ''}`}>
      <div className="notification__children-wrapper">{children}</div>
      <div className="notification__backdrop" onClick={onBackdropClick} />
    </div>
  );
};

export default Notification;
