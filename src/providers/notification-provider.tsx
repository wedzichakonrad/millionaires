import React, { useState } from 'react';
import { config } from '../utils/config/config';
import { NotificationState } from '../utils/types/types';
import { NotificationContext } from '../context/notification-context';

interface NotificationProviderProps {
  children: React.ReactNode;
}

export interface NotificationContextType {
  notificationStates: NotificationState | undefined;
  setNotificationStates: React.Dispatch<React.SetStateAction<NotificationState>>;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const { gameRules } = config;

  const [notificationStates, setNotificationStates] = useState<NotificationState>(gameRules.notificationsData);

  return (
    <NotificationContext.Provider value={{ notificationStates, setNotificationStates }}>
      {children}
    </NotificationContext.Provider>
  );
};