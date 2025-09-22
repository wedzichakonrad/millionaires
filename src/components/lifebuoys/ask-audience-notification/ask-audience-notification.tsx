import { useGame } from '../../../hooks/use-game-context';
import { useNotification } from '../../../hooks/use-notification-context';
import { AskAudienceChartService } from '../../../services/ask-audience-chart.service';
import { Button } from '../../common/button/button';
import { Chart } from '../chart/chart';
import { LifebuoyTypes } from '../lifebuoys';

export const AskAudienceNotification = () => {
  const {questions, questionNumber} = useGame();
  const {setNotificationStates} = useNotification();
  const charts = AskAudienceChartService.getCharts(questions[questionNumber])
  
  return (
    <div className='ask-audience__notification'>
        <Chart charts={charts}/>
        <Button onClick={() => {
          setNotificationStates(cl => ({
            ...cl,
            [LifebuoyTypes.askAudience]: {
              ...cl[LifebuoyTypes.askAudience],
              isOpen: false,
            },
          }));
        }}>
          Close
        </Button>
    </div>
  )
}