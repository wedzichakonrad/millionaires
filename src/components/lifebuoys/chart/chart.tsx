import { useSetAfterDelay } from '../../../hooks/use-set-after-delay';
import { SingleChart } from '../../../services/ask-audience-chart.service';
import { sortByLetter } from '../../../utils/helpers/helpers';
import './chart.sass'

interface ChartProps {
    charts: SingleChart[]
}

const loadingChartsDelay = 500;

export const Chart  = ({charts}: ChartProps) => {
    const [finishedWaiting] = useSetAfterDelay({delay: loadingChartsDelay, value: true})

    const renderColumn = (chart: SingleChart) => {
        return (
        <li key={chart.letter} className='chart__list-element'>
          <p className='chart__percent'>{finishedWaiting ? `${chart.percent}%` : ''}</p>
          <div className='chart__column' style={finishedWaiting ? { height: `${chart.percent/10}rem`} : {}}></div>
          <p className='chart__letter'>{chart.letter}</p>
        </li>
        )
    };
  
  return (
    <div className='chart'>
      <div className='chart__grid'>
        {Array.from({length: 11}).map((_:unknown, index: number ) =><div key={index} className='chart__grid-element'/>)}
      </div>
      <ul className='chart__list'>
        {charts.sort(sortByLetter).map(chart => {
          return renderColumn(chart);
        })}
      </ul>
    </div>
  )
}
