import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { fetchPriceEvolution } from '../../../../redux/slices/priceEvolution/priceEvolution.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';
import {
	getArrKeys,
	getDate,
	groupByKey,
	newArrObj,
	structureSeries,
	uniqueArr,
} from '../../../../utils/lineChart.func';
import { LineChartStyle } from './styles';

const LineChart = () => {
	const dispatch = useAppDispatch();

	const error = useAppSelector((state) => state.priceEvolution.error);
	const loading = useAppSelector((state) => state.priceEvolution.loading);
	const evolutionPriceProd = useAppSelector((state) => state.priceEvolution.evolutionPriceProd);

	const productsGroup = groupByKey(evolutionPriceProd, 'sku');

	const arrSKU = getArrKeys(productsGroup);
	const seriesProducts: { name: string; data: number[] }[] = [];
	let dates: string[] = [];
	arrSKU.forEach((sku) => {
		const arrProducts = newArrObj(productsGroup[sku], 'name', true);
		const objPrice = structureSeries(
			newArrObj(productsGroup[sku], 'price', false),
			arrProducts[0],
		);
		seriesProducts.push(objPrice);
		const arrDates = newArrObj(productsGroup[sku], 'dateExtraction', false);
		dates.push(...arrDates);
	});
	dates = uniqueArr(dates);
	dates = dates.map((date) => {
		return getDate(date);
	});

	useEffect(() => {
		dispatch(fetchPriceEvolution());
	}, [dispatch]);
	/** data for LineChart library apexcharts */
	const options: ApexOptions = {
		xaxis: {
			categories: dates,
		},
		stroke: {
			curve: 'smooth',
		},
	};
	return (
		<>
			{loading && <div>Cargando gráfica ...</div>}
			<LineChartStyle>
				<Chart options={options} series={seriesProducts} type='line' height='100%' />
			</LineChartStyle>
			{error !== '' && <div>{error}</div>}
		</>
	);
};

export default LineChart;
