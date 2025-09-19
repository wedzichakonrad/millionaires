import { useGame } from '../../../hooks/use-game-context';
import { AskAudienceChartService } from '../../../services/ask-audience-chart.service';
import { Chart } from '../chart/chart';

export const AskAudienceNotification = () => {
  const {questions, questionNumber} = useGame();
  const charts = AskAudienceChartService.getCharts(questions[questionNumber])
  
  return (
    <div className='ask-audience__notification'>
        <Chart charts={charts}/>
    </div>
  )
}