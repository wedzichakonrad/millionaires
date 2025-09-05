import { Lifebuoy } from '../lifebouy/lifebouy'
import './ask-audience.sass'
import { AskAudienceChartService } from '../../../../../../../services/ask-audience-chart.service'
import { Chart } from '../chart/chart'
import { useGameContext } from '../../../../../../../hooks/use-game-context'

type AskAudienceProps = {
    type: string
}

const AskAudience = ({type}: AskAudienceProps) => {
    const gameContext = useGameContext();
    const charts = AskAudienceChartService.getCharts(gameContext?.questions[gameContext?.questionNumber])

    return (
        <Lifebuoy className='ask-audience' type={type} >
            <div className='ask-audience__notification'>
                <Chart charts={charts}/>
            </div>
        </Lifebuoy>
    )
}

export default AskAudience