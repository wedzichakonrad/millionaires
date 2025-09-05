import './fifty-fifty.sass'
import { Lifebuoy } from '../lifebouy/lifebouy'

type FiftyFiftyProps = {
    type: string
}

const FiftyFifty = ({type}:FiftyFiftyProps) => {

    return (
        <Lifebuoy className='fifty-fifty' type={type} >
            <div className='fifty-fifty__notification'>
                50 - 50 notification
            </div>
        </Lifebuoy>
    )
}

export default FiftyFifty