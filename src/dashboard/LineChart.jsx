/* eslint-disable no-unused-vars */
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ chartData, option }) => {
    return (
        <div>
            <Line data={chartData} options={option} />
        </div>
    )
}

export default LineChart