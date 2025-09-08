import { useGameContext } from '../../../../hooks/use-game-context';
import Notification from '../notification'

const gameWonNotificationType = 'GAME_WON';

const GameWonNotification = () => {
  const { restartGame, isWon } = useGameContext();
  
  return (
    <Notification isOpen={isWon} type={gameWonNotificationType} >
      <div>
        <p>Game Won!</p>
        <button onClick={restartGame}>
          Another game ?
        </button>
      </div>
    </Notification>
  )
}

export default GameWonNotification;