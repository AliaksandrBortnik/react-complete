import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
  const maxValue = Math.max(...props.dataPoints.map(point => point.value));

  return (
    <div className="chart">
      {
        props.dataPoints.map(dataPoint =>
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        )
      }
    </div>
  )
};

export default Chart;