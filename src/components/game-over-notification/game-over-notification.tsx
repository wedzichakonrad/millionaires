import './game-over-notification.sass';
import { useGame } from '../../hooks/use-game-context';
import { Button } from '../common/button/button';
import Notification from '../common/notification/notification';

const gameOverNotificationType = 'GAME_OVER';

const GameOverNotification = () => {
  const { restartGame, isOver, openMenu } = useGame();

  return (
    <Notification isOpen={isOver} type={gameOverNotificationType} >
      <div className='game-over-notification'>
        <p className='game-over-notification__message'>Wrong! Game Over!</p>
        <div className='game-over-notification__buttons-wrapper'>
          <Button onClick={restartGame}>Restart</Button>
          <Button onClick={openMenu}>Back to menu</Button>
        </div>
      </div>
    </Notification>
  )
}

export default GameOverNotification;