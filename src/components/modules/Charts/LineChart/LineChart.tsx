import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { fetchPriceEvolution } from '../../../../redux/slices/priceEvolution/priceEvolution.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';
import { LineChartStyle } from './styles';

const LineChart = () => {
	const dispatch = useAppDispatch();

	const error = useAppSelector((state) => state.priceEvolution.error);
	const loading = useAppSelector((state) => state.priceEvolution.loading);
	const evolutionPriceProd = useAppSelector((state) => state.priceEvolution.evolutionPriceProd);

	console.log('[error]: ', error);
	console.log('[loading]: ', loading);
	console.log('[evolutionPriceProd]: ', evolutionPriceProd);

	/** TODO separate function in file helpers for use others components */

	const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
		list.reduce((previous, currentItem) => {
			const group = getKey(currentItem);
			if (!previous[group]) previous[group] = [];
			previous[group].push(currentItem);
			return previous;
		}, {} as Record<K, T[]>);

	const productsGroup = console.log(groupBy(evolutionPriceProd, (i) => i.sku));

	useEffect(() => {
		dispatch(fetchPriceEvolution());
	}, [dispatch]);
	/** data for LineChart library apexcharts */
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
