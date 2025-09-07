import { useGameContext } from '../../../../hooks/use-game-context';
import Notification from '../notification'

type GameOverNotificationProps = {
  isOpen: boolean
}

const gameOverNotificationType = 'GAME_OVER';

const GameOverNotification = ({isOpen}: GameOverNotificationProps) => {
  const { restartGame } = useGameContext();
  
  return (
    <Notification isOpen={isOpen} type={gameOverNotificationType} >
      <div>
        <p>Game Over!</p>
        <button onClick={restartGame}>
          Restart
        </button>
      </div>
    </Notification>
  )
}

export default GameOverNotification;