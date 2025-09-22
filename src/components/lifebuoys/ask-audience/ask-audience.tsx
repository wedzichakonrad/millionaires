import './ask-audience.sass'
import AudienceIcon from '../../common/icons/audience'
import { LifebuoyTypes } from '../lifebuoys'
import { Lifebuoy } from '../lifebouy/lifebouy'
import { AskAudienceNotification } from '../ask-audience-notification/ask-audience-notification'

const AskAudience = () => {
    return (
        <Lifebuoy className='ask-audience' type={LifebuoyTypes.askAudience}  icon={<AudienceIcon/>}>
            <AskAudienceNotification/>
        </Lifebuoy>
    )
}

export default AskAudience