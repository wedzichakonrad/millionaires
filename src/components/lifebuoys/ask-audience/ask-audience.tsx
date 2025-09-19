import './ask-audience.sass'
import { useGame } from '../../../hooks/use-game-context'
import { AskAudienceChartService } from '../../../services/ask-audience-chart.service'
import AudienceIcon from '../../common/icons/audience'
import { LifebuoyTypes } from '../lifebuoys'
import { Lifebuoy } from '../lifebouy/lifebouy'
import { Chart } from '../chart/chart'


const AskAudience = () => {
    const {questions, questionNumber} = useGame();
    const charts = AskAudienceChartService.getCharts(questions[questionNumber])

    return (
        <Lifebuoy className='ask-audience' type={LifebuoyTypes.askAudience}  icon={<AudienceIcon/>}>
            <div className='ask-audience__notification'>
                <Chart charts={charts}/>
            </div>
        </Lifebuoy>
    )
}

export default AskAudience