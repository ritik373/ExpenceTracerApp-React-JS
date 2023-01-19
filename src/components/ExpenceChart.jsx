import React from 'react';
import Chart from '../components/Chart/Chart';

const ExpenceChart = (props) => {

    const chartDataPoint = [
        { id: Math.random().toFixed(5), lable: 'Jan', value: 0 },
        { id: Math.random().toFixed(5), lable: 'Feb', value: 0 },
        { id: Math.random().toFixed(5), lable: 'March', value: 0 },
        { id: Math.random().toFixed(5), lable: 'April', value: 0 },
        { id: Math.random().toFixed(5), lable: 'May', value: 0 },
        { id: Math.random().toFixed(5), lable: 'June', value: 0 },
        { id: Math.random().toFixed(5), lable: 'July', value: 0 },
        { id: Math.random().toFixed(5), lable: 'Aug', value: 0 },
        { id: Math.random().toFixed(5), lable: 'Sep', value: 0 },
        { id: Math.random().toFixed(5), lable: 'Oct', value: 0 },
        { id: Math.random().toFixed(5), lable: 'Nov', value: 0 },
        { id: Math.random().toFixed(5), lable: 'Dec', value: 0 },
    ]

    for (const expence of props.expences) {

        let expenceMonth=expence.date.getMonth();

        chartDataPoint[expenceMonth].value +=expence.amount;
        
    }
    return <Chart dataPoints={chartDataPoint} />
}
export default ExpenceChart;