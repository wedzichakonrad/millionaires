import { Lifebuoy } from '../common/lifebouy/lifebouy'
import './ask-audience.sass'

type AskAudienceTypes = {
    type: string
}


const AskAudience = ({type}: AskAudienceTypes) => {
    return (
        <Lifebuoy className='ask-audience' type={type} >
            <div className='ask-audience__notification'>
                ask-audience notification
            </div>
        </Lifebuoy>
    )
}

export default AskAudience