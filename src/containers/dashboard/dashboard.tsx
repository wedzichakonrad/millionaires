import './dashboard.sass';
import Logo from '../../components/logo/logo';
import { useGame } from '../../hooks/use-game-context';
import { config } from '../../utils/config/config';
import { Dropdown, DropdownElement } from '../../components/common/dropdown/dropdown';
import { Button } from '../../components/common/button/button';
import { SoundOnIcon } from '../../components/common/icons/sound-on';
import { SoundOffIcon } from '../../components/common/icons/sound-off';

export const Dashboard = () => {
  const { gameStarted, startGame, setCategory, category, isSoundOn, setIsSoundOn } = useGame();

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
      <Button className='dashboard__toggle-sound-btn' onClick={() => setIsSoundOn(isOn => !isOn)}>
        {isSoundOn ? <SoundOnIcon/> : <SoundOffIcon/>}
      </Button>
      <Logo/>
      <header className='dashboard__welcome-msg'>
        Welcome to Millionaires!
      </header>
      <span className='dashboard__choose-category-msg'>
        Choose questions category and play!
      </span>
      <Dropdown list={categoryList} onChange={onCategoryChange} value={category}/>
      <Button className='dashboard__start-btn' onClick={() => startGame(category)}>Start game</Button>
    </div>
)
}