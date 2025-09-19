import './style/style.sass'
import { lazy } from 'react';
import { GameProvider } from './providers/game-provider';
import { NotificationProvider } from './providers/notification-provider';
const Millionaires = lazy(() => import('./containers/millionaires'));

const App = () => {
  return (
    <NotificationProvider>
      <GameProvider>
        <Millionaires/>
      </GameProvider>
    </NotificationProvider>
  )
}

export default App;
