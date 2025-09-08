import { useContext } from 'react';
import { NotificationContext } from '../containers/millionaires';

export const useNotificationContext = () => {
        const notificationContext = useContext(NotificationContext);
    
        if (!notificationContext) {
          throw Error('Notification Context is not defined')
        } 
  
        return notificationContext;
};