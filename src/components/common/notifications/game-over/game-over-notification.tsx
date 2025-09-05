import { useGameContext } from '../../../../hooks/use-game-context';
import Notification from '../notification'

type GameOverNotificationProps = {
  isOpen: boolean
}

const gameOverNotificationType = 'GAME_OVER';

const GameOverNotification = ({isOpen}: GameOverNotificationProps) => {
  const gameContext = useGameContext();
  
  return (
    <Notification isOpen={isOpen} type={gameOverNotificationType} >
      <div>
        <p>Game Over!</p>
        <button onClick={gameContext?.restartGame}>
          Restart
        </button>
      </div>
    </Notification>
  )
}

export default GameOverNotification;