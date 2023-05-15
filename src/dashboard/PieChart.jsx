import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const PieChart = ({ chartData }) => {

    return (
        <div>
            <Pie data={{ labels: chartData.state.labels, datasets: chartData.state.datasets }} options={chartData.options} />
        </div>
    )
}

export default PieChart