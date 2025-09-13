import './toast.sass';
import { useSetAfterDelay } from '../../../hooks/use-set-after-delay';

interface ToastProps {
  message: string;
  isErrorToast: boolean;
}

const toastSlideAnimationDelay = 300;
const autoCloseToastDelay = 5000;

export const Toast = ({message, isErrorToast}: ToastProps) => {
  const [isOpen, setIsOpen] = useSetAfterDelay({delay: toastSlideAnimationDelay, value: true})
  const [autoClose] = useSetAfterDelay({delay: autoCloseToastDelay, value: true})
  
  const onCloseClick = () => {
    setIsOpen(false);
  }

  return (
    <div className={`toast ${isOpen && !autoClose ? 'toast--slide-in' : ''} ${isErrorToast ? 'toast--error' : 'toast--success'}`}>
      <p>{message}</p>
      <button onClick={onCloseClick}>Close</button>
    </div>
  );
}