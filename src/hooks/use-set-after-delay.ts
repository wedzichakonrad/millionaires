import { useEffect, useState } from 'react';

type SetAfterDelayProps = {
  delay: number,  
  value: any,
  defaultValue?: boolean,
}

export const useSetAfterDelay = ({ delay, value, defaultValue = false}: SetAfterDelayProps) => {
  const [finishedWaiting, setFinishedWaiting] = useState(defaultValue);

  useEffect(() => {
    const timeout = setTimeout(() => setFinishedWaiting(value), delay);

    return () => clearTimeout(timeout);
  },[value, delay]);


  return [finishedWaiting, setFinishedWaiting] as const;
};