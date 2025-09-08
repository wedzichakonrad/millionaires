import { Lifebuoy } from '../lifebouy/lifebouy'
import './ask-audience.sass'
import { Chart } from '../chart/chart'
import { useGameContext } from '../../../../hooks/use-game-context'
import { AskAudienceChartService } from '../../../../services/ask-audience-chart.service'

type AskAudienceProps = {
    type: string
}

const AskAudience = ({type}: AskAudienceProps) => {
    const {questions, questionNumber} = useGameContext();
    const charts = AskAudienceChartService.getCharts(questions[questionNumber])

    return (
        <Lifebuoy className='ask-audience' type={type} >
            <div className='ask-audience__notification'>
                <Chart charts={charts}/>
            </div>
        </Lifebuoy>
    )
}

export default AskAudience