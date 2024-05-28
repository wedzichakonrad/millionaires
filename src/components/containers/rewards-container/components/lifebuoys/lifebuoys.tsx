import './lifebuoys.sass'
import AskAudience from "./components/ask-audience/ask-audience";
import PhoneFriend from "./components/phone-friend/phone-friend";
import FiftyFifty from "./components/fifty-fifty/fifty-fifty";

const Lifebuoys = () => {
    return (
        <div className='lifebuoys'>
            <ul className='lifebuoys__list'>
                <AskAudience/>
                <PhoneFriend/>
                <FiftyFifty/>
            </ul>
        </div>
    )
}

export default Lifebuoys