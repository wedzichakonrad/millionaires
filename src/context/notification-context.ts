import { createContext } from 'react';
import { NotificationContextType } from '../providers/notification-provider';

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);