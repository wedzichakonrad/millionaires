import './lifebuoys.sass'
import AskAudience from "./components/ask-audience/ask-audience";
import PhoneFriend from "./components/phone-friend/phone-friend";
import FiftyFifty from "./components/fifty-fifty/fifty-fifty";

export const LifebuoyTypes = {
    PhoneFriend: 'PHONE_FRIEND',
    FiftyFifty: 'FIFTY_FIFTY',
    AskAudience: 'ASK_AUDIENCE'
}

const Lifebuoys = () => {
    return (
        <div className='lifebuoys'>
            <div className='lifebuoys__list'>
                <AskAudience type={LifebuoyTypes.AskAudience}/>
                <PhoneFriend type={LifebuoyTypes.PhoneFriend}/>
                <FiftyFifty type={LifebuoyTypes.FiftyFifty}/>
            </div>
        </div>
    )
}

export default Lifebuoys;