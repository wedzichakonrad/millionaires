import './menu.sass';
import Logo from '../../components/logo/logo';
import { useGame } from '../../hooks/use-game';
import { config } from '../../utils/config/config';
import { Dropdown, DropdownElement } from '../../components/common/dropdown/dropdown';
import { Button } from '../../components/common/button/button';
import { SoundOnIcon } from '../../components/common/icons/sound-on';
import { SoundOffIcon } from '../../components/common/icons/sound-off';

export const Menu = () => {
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
    <div className={`menu ${gameStarted ? 'menu--hidden' : ''}`}>
      <div className='menu__inner'>
        <Button className='menu__toggle-sound-btn' onClick={() => setIsSoundOn(isOn => !isOn)}>
          {isSoundOn ? <SoundOnIcon/> : <SoundOffIcon/>}
        </Button>
        <Logo/>
        <header className='menu__welcome-msg'>
          Welcome to Millionaires!
        </header>
        <p className='menu__choose-category-msg'>
          Choose questions category and play!
        </p>
        <Dropdown className='menu__category-dropdown' list={categoryList} onChange={onCategoryChange} value={category}/>
        <Button className='menu__start-btn' onClick={() => startGame(category)}>Start Game</Button>
      </div>
    </div>
)
}