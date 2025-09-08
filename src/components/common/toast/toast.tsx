import { useEffect, useState } from 'react';
import './toast.sass';

export const ToastTypes = {
  ERROR: 'error',
  SUCCESS: 'success'
}

interface ToastProps {
  message: string;
  type: string;
}

const animationDelay = 300;

export const Toast = ({message, type}: ToastProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [finishedWaiting, setFinishedWaiting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => setFinishedWaiting(isOpen), animationDelay);

    return () => clearTimeout(timeout);
  },[isOpen]);

  const onCloseClick = () => {
    setIsOpen(false);
  }

  return (
    <div className={`toast ${finishedWaiting ? 'toast--slide-in' : ''} ${type === ToastTypes.SUCCESS ? 'toast--success' : 'toast--error'}`}>
      <p>{message}</p>
      <button onClick={onCloseClick}>Close</button>
    </div>
  );
}