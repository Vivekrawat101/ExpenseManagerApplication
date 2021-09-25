
import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
   
    const dataPointValuesArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const MaximumOfDataPoints = Math.max(...dataPointValuesArray);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.id}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={MaximumOfDataPoints}
                />))}
        </div>
    )
}
