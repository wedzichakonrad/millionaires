import { useEffect, useState } from 'react';
import './toast.sass';

interface ToastProps {
  message: string;
  isErrorToast: boolean;
}

const animationDelay = 300;
const autoCloseToastDelay = 5000;

export const Toast = ({message, isErrorToast}: ToastProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [finishedWaiting, setFinishedWaiting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => setFinishedWaiting(isOpen), animationDelay);

    return () => clearTimeout(timeout);
  },[isOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(false), autoCloseToastDelay);

    return () => clearTimeout(timeout);
  },[])

  const onCloseClick = () => {
    setIsOpen(false);
  }

  return (
    <div className={`toast ${finishedWaiting ? 'toast--slide-in' : ''} ${isErrorToast ? 'toast--error' : 'toast--success'}`}>
      <p>{message}</p>
      <button onClick={onCloseClick}>Close</button>
    </div>
  );
}