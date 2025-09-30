import GameOverNotification from '../components/game-over-notification/game-over-notification';
import GameWonNotification from '../components/game-won-notification/game-won-notification';
import { useGame } from '../hooks/use-game';
import { Menu } from './dashboard/menu';
import { GameArea } from './game-area/game-area';

const Millionaires = () => {
  const { gameStartedDelay, gameStarted } = useGame();

  return (
    <div className='millionaires'>
      <Menu />
      {(gameStartedDelay || gameStarted) && <GameArea/>}
      <GameOverNotification />
      <GameWonNotification />
    </div>
  );
};

export default Millionaires;