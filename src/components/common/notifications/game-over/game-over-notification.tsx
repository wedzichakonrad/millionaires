import { useContext } from 'react';
import Notification from '../notification'
import { GameContext } from '../../../millionaires';

type GameOverNotificationProps = {
  isOpen: boolean
}

const gameOverNotificationType = 'GAME_OVER';

const GameOverNotification = ({isOpen}: GameOverNotificationProps) => {
  const gameContext = useContext(GameContext);
  
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