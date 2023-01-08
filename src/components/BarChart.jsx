import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const options = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
	  legend: {
		display: false,
		position: 'bottom',
		labels: {
			borderRadius: 4,
			useBorderRadius: true,
		}
	  },
	  title: {
		display: true,
		text: 'Statistics',
		position: 'top',
		padding: {
			top: 10,
			bottom: 0
		},
		align: 'start',
		font: {
			weight: 'bold',
			size: '30px'
		},
		color: 'black',
	  },
	  subtitle: {
		display: true,
		text: 'Apr 01 - Apr 30',
		align: 'start',
		padding: {
			bottom: 20
		},
		color: 'rgba(0, 0, 0, 0.5)',
	  }
	},
};
export default function BarChart({ chartData }) {
	return (
		<div style={{ }}>
			{/* <ChartTitle/> */}
			<Bar options = {options} data = {chartData} height = {'300'} />
		</div>
	)
}

