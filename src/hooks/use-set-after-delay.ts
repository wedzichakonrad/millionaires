import { useEffect, useState } from 'react';

interface SetAfterDelayProps {
  delay: number;
  value: boolean;
}

export const useSetAfterDelay = ({ delay, value}: SetAfterDelayProps) => {
  const [finishedWaiting, setFinishedWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFinishedWaiting(value), delay);

    return () => clearTimeout(timeout);
  },[value, delay]);


  return [finishedWaiting, setFinishedWaiting] as const;
};