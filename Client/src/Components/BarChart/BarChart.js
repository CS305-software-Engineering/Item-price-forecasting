import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Button } from 'antd';

const BarChart = ({ timeLine, dataSet, legend, height, width, downloadAsImage }) => {

    let chartReference = React.createRef();
    const bgColor = ['rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)'];
    let backgroundColor = [...bgColor];
    let n = dataSet.length / 6;

    for (let i = 0; i < n; i++) {
        backgroundColor = [...backgroundColor, ...bgColor];
    }

    const chart = (<Bar
        data={{
            labels: timeLine,
            datasets: [
                {
                    label: legend,
                    data: dataSet,
                    borderWidth: 1,
                    backgroundColor: backgroundColor,
                }
            ]
        }}
        height={height}
        width={width}
        ref={chartReference}
        options={{
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }} />);

    const download = () => {
        const imageLink = chartReference.current.chartInstance.toBase64Image();
        downloadAsImage(imageLink);
    }

    const final = (
        <>
            {chart}
        </>
    )

    return (
        final
    );
}

export default BarChart;