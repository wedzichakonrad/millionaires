import './game-area.sass';
import AnswersContainer from '../answers/answers-container';
import RewardsContainer from '../rewards/rewards-container';
import { Toast } from '../../components/common/toast/toast';
import { useEffect, useState } from 'react';
import { getGameData } from '../../api/get-game-data';
import Preloader from '../../components/common/preloaders/preloader';
import { useGame } from '../../hooks/use-game';
import { useSetAfterDelay } from '../../hooks/use-set-after-delay';
import { Button } from '../../components/common/button/button';

const loadingAnimationDelay = 2000;

export const GameArea = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setQuestions, isOver, isWon, category, setGameStarted, restartGame } = useGame();
  const [finishedWaiting] = useSetAfterDelay({delay: loadingAnimationDelay, value: true})

  useEffect(() => {
      if (!isOver && !isWon) {
        getGameData({
          setError,
          setData: setQuestions,
          setIsFetching: setIsFetchingData,
          category,
        });
      }
  }, [isOver, isWon, category, setQuestions]);
  
  const openMenu = () => {
    restartGame();
    setGameStarted(false);
  }

  return (
    <div className="game-area">
      {isFetchingData || !finishedWaiting ? <Preloader/> : (
        <>
          <Button className='game-area__back-btn' onClick={openMenu}>Back to menu</Button>
          <AnswersContainer/>
          <RewardsContainer/>
        </>
      )}
      {error && <Toast isErrorToast={true} message={error}/>}
    </div>
)
}