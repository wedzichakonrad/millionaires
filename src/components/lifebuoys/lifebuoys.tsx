import './lifebuoys.sass'
import AskAudience from "./ask-audience/ask-audience";
import PhoneFriend from "./phone-friend/phone-friend";
import FiftyFifty from "./fifty-fifty/fifty-fifty";

export const LifebuoyTypes = {
    phoneFriend: 'PHONE_FRIEND',
    fiftyFifty: 'FIFTY_FIFTY',
    askAudience: 'ASK_AUDIENCE'
}

const Lifebuoys = () => {
    return (
        <div className='lifebuoys'>
            <div className='lifebuoys__list'>
                <AskAudience/>
                <PhoneFriend/>
                <FiftyFifty/>
            </div>
        </div>
    )
}

export default Lifebuoys;