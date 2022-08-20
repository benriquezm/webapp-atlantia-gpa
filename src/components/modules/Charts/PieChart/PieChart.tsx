import Chart from 'react-apexcharts';

import { PieChartStyle } from './styles';

const PieChart = () => {
	const series = [44, 55, 41, 17, 15];
	const options = {
		labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
	};

	return (
		<PieChartStyle>
			<Chart options={options} series={series} type='pie' />
		</PieChartStyle>
	);
};

export default PieChart;
