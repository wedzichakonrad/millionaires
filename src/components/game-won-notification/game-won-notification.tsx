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
        <p className='game-won-notification__message'>Game Won!</p>
        <div className='game-won-notification__buttons-wrapper'>
          <Button onClick={restartGame}>Another game ?</Button>
          <Button onClick={openMenu}>Back to menu</Button>
        </div>
      </div>
    </Notification>
  )
}

export default GameWonNotification;