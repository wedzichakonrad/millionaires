import './fifty-fifty.sass'
import { Lifebuoy } from '../common/lifebouy/lifebouy'

type FiftyFiftyTypes = {
    type: string
}

const FiftyFifty = ({type}:FiftyFiftyTypes) => {

    return (
        <Lifebuoy className='fifty-fifty' type={type} >
            <div className='fifty-fifty__notification'>
                50 - 50 notification
            </div>
        </Lifebuoy>
    )
}

export default FiftyFifty