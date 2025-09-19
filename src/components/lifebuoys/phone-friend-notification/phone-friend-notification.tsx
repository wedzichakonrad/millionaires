import { useGame } from '../../../hooks/use-game-context';
import { useSetAfterDelay } from '../../../hooks/use-set-after-delay';
import { PhoneIcon } from '../../common/icons/phone';
import { PhoneFriendMessageService } from '../../../services/phone-friend-message.service';

const callDelay = 2000;

const wordByWordDelay = 400;

export const PhoneFriendNotification = () => {
  const { questions, questionNumber} = useGame();
  const message = PhoneFriendMessageService.getMessage(questions[questionNumber]);
  const [waitForAnswer] = useSetAfterDelay({delay: callDelay, value: true})
  const splitMessage = message?.split(' ')

  return (
    <div className={`phone-friend__notification ${waitForAnswer ? 'phone-friend__notification--popup' : ''}`}>
        <div className='phone-friend__message'>
            <span className='phone-friend__message-pre'>Friend:</span> {splitMessage?.map((word, index) => (
              <span className='phone-friend__message-word' key={word} style={{
                animationDelay: `${index * wordByWordDelay}ms`
              }}>
                {` ${word} `}
              </span>
            ))}
        </div>
        <div className='phone-friend__phone-animated-icon'>
            <PhoneIcon/>
        </div>
    </div>
  )
} 