import './ChartBar.css';

const ChartBar = props => {
  const barFillHeight = props.maxValue === 0 ? '0%'
    : `${props.value / props.maxValue * 100}%`;

  return (
    <div className='chart-bar'>
      <div className="chart-bar__inner">
        <div style={{height: barFillHeight}} className="chart-bar__fill">
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
};

export default ChartBar;