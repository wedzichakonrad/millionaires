import { useGame } from '../../hooks/use-game-context';
import './dashboard.sass';

export const Dashboard = () => {
  const { gameStarted, startGame } = useGame();

  return (
    <div className={`dashboard ${gameStarted ? 'dashboard--hidden' : ''}`} onClick={startGame}>
      start game
    </div>
)
}