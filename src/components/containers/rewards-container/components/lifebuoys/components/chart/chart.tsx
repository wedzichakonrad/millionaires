import './chart.sass'
import { SingleChart } from '../../../../../../../services/ask-audience-chart.service'
import { sortByLetter } from '../../../../../../../utils/helpers'
import { useEffect, useState } from 'react'

type ChartProps = {
    charts: SingleChart[]
}

const mockLoadingChartsDelay = 500;

export const Chart  = ({charts}: ChartProps) => {
    const [finishedWaiting, setFinishedWaiting] = useState(false);
    
    useEffect(() => {
      const timeout = setTimeout(() => setFinishedWaiting(true), mockLoadingChartsDelay);

      return () => clearTimeout(timeout);
    },[]);

    const renderColumn = (chart: SingleChart) => {
        return (
        <li key={chart.letter} className='chart__list-element'>
          <p className='chart__percent'>{chart.percent}%</p>
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
