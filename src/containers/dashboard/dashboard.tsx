import './dashboard.sass';
import Logo from '../../components/logo/logo';
import { useGame } from '../../hooks/use-game-context';
import { config } from '../../utils/config/config';

export const Dashboard = () => {
  const { gameStarted, startGame, setCategory, category } = useGame();

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setCategory(categoryId);
  }

  return (
    <div className={`dashboard ${gameStarted ? 'dashboard--hidden' : ''}`}>
      <Logo/>
      <header className='dashboard__welcome-msg'>
        Welcome to Millionaires!
      </header>
      <label className='dashboard__category-label'>
        Choose your category and play!
      </label>
      <select className='dashboard__category-select' onChange={onCategoryChange}>
        {Object.entries(config.questionCategories).map(entry => {
          const categroryId = entry[0];
          const categoryName = entry[1];
          return <option value={categroryId}>{categoryName}</option>
        })}
      </select>
      <button className='dashboard__start-btn' onClick={() => startGame(category)}>
        Start game
      </button>
    </div>
)
}