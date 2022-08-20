import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { LineChartStyle } from './styles';

const LineChart = () => {
	const series = [
		{
			name: 'Desktops',
			data: [19, 22, 20, 26],
		},
		{
			name: 'Laptops',
			data: [10, 12, 40, 36],
		},
		{
			name: 'Tablets',
			data: [29, 42, 30, 56],
		},
	];
	const options: ApexOptions = {
		xaxis: {
			categories: ['2019-05-01', '2019-05-02', '2019-05-03', '2019-05-04'],
		},
		stroke: {
			curve: 'smooth',
		},
	};
	return (
		<>
			<LineChartStyle>
				<Chart options={options} series={series} type='line' height='100%' />
			</LineChartStyle>
		</>
	);
};

export default LineChart;
