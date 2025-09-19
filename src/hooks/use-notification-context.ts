import { useContext } from 'react';
import { NotificationContext } from '../context/notification-context';

export const useNotification = () => {
  const notificationContext = useContext(NotificationContext);

  if (!notificationContext) {
    throw Error('Notification Context is not defined')
  } 

  return notificationContext;
};