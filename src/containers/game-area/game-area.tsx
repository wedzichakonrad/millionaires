import './game-area.sass';
import AnswersContainer from '../answers/answers-container';
import RewardsContainer from '../rewards/rewards-container';
import { Toast } from '../../components/common/toast/toast';
import { useEffect, useState } from 'react';
import { getGameData } from '../../api/get-game-data';
import Preloader from '../../components/common/preloaders/preloader';
import { useGame } from '../../hooks/use-game-context';

const loadingAnimationDelay = 2500;

export const GameArea = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [finishedWaiting, setFinishedWaiting] = useState(false);
  const { setQuestions, isOver, category } = useGame();
    
  useEffect(() => {
    const timeout = setTimeout(() => setFinishedWaiting(true), loadingAnimationDelay);

    return () => clearTimeout(timeout);
  },[]);


  useEffect(() => {
      const fetchData = async () => {
          setIsFetchingData(true);
          try {
              const data = await getGameData({category});

              if (data && data.length > 0) {
                  setQuestions?.(data);
                  setError(null);
              } else {
                  setError("No data received");
              }
          } catch (err) {
            console.log(err === 429, err)
              setError("Failed to load questions. Using mock data.");
          } finally {
              setIsFetchingData(false);
          }
      };

      if (!isOver) {
          fetchData();
      }
  }, [isOver]);

  return (
    <div className="game-area">
      {isFetchingData || !finishedWaiting ? <Preloader/> : (
        <>
          <AnswersContainer/>
          <RewardsContainer/>
        </>
      )}
      {error && <Toast isErrorToast={true} message={error}/>}
    </div>
)
}