import './fifty-fifty.sass'
import Notification from './../../../../../../common/notifications/notification'

const FiftyFifty = () => {

    return (
        <div className='lifebuoy fifty-fifty'>
            <button className='fifty-fifty__inner'>
                50:50
            </button>
            <Notification>
                <div className='phone-friend__notification'>
                    test
                </div>
            </Notification>
        </div>
    )
}

export default FiftyFifty