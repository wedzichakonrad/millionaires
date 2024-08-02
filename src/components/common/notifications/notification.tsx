import "./notifications.sass";
import { ReactElement, useContext, useState } from "react";
import { NotificationContext } from "../../millionaires";

type NotificationProps = {
  children: ReactElement;
  isOpen: boolean;
};

const Notification = ({ children }: NotificationProps) => {

    const isOpenObj = useContext(NotificationContext);

    const onBackdropClick = () => {

    }

  return (
    <div className={`notification ${isOpenObj.isOpen ? 'notification--active' : ''}`}>
      <div className="notification__children-wrapper">{children}</div>
      <div className="notification__backdrop" onClick={onBackdropClick} />
    </div>
  );
};

export default Notification;
