import './dashboard.sass';
import Logo from '../../components/logo/logo';
import { useGame } from '../../hooks/use-game-context';
import { config } from '../../utils/config/config';
import { Dropdown, DropdownElement } from '../../components/common/dropdown/dropdown';

export const Dashboard = () => {
  const { gameStarted, startGame, setCategory, category } = useGame();

  const onCategoryChange = (element: DropdownElement) => {
    const categoryId = element.value;
    setCategory(categoryId);
  }

  const categoryList = Object.entries(config.questionCategories).map(entry => {
    const categroryId = entry[0];
    const categoryName = entry[1];
    return {name: categoryName, value: categroryId};
  })

  return (
    <div className={`dashboard ${gameStarted ? 'dashboard--hidden' : ''}`}>
      <Logo/>
      <header className='dashboard__welcome-msg'>
        Welcome to Millionaires!
      </header>
      <label className='dashboard__category-label'>
        Choose questions category and play!
      </label>
      <Dropdown list={categoryList} onChange={onCategoryChange}/>
      <button className='dashboard__start-btn' onClick={() => startGame(category)}>
        Start game
      </button>
    </div>
)
}