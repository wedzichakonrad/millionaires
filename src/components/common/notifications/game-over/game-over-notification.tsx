import { useGame } from '../../../../hooks/use-game-context';
import Notification from '../notification'

const gameOverNotificationType = 'GAME_OVER';

const GameOverNotification = () => {
  const { restartGame, isOver } = useGame();
  
  return (
    <Notification isOpen={isOver} type={gameOverNotificationType} >
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