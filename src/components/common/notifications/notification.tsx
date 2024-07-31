import "./notifications.sass";
import { ReactElement, useState } from "react";

type NotificationProps = {
  children: ReactElement;
  isOpen: boolean;
};

const Notification = ({ children, isOpen }: NotificationProps) => {

    const onBackdropClick = () => {

    }

  return (
    <div className={`notification ${isOpen ? 'notification--active' : ''}`}>
      <div className="notification__children-wrapper">{children}</div>
      <div className="notification__backdrop" onClick={onBackdropClick} />
    </div>
  );
};

export default Notification;
