import './game-won-notification.sass';
import { useGame } from '../../hooks/use-game-context';
import { Button } from '../common/button/button';
import Notification from '../common/notification/notification';

const gameWonNotificationType = 'GAME_WON';

const GameWonNotification = () => {
  const { restartGame, isWon, openMenu } = useGame();
  
  return (
    <Notification isOpen={isWon} type={gameWonNotificationType} >
      <div className='game-won-notification'>
        <p>Game Won!</p>
        <Button onClick={restartGame}>Another game ?</Button>
        <Button className='game-area__back-btn' onClick={openMenu}>Back to menu</Button>
      </div>
    </Notification>
  )
}

export default GameWonNotification;