import { useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { fetchPresenceShare } from '../../../../redux/slices/presenceShare/presenceShare.slice';
import {
	PresenceShare,
	PresenceShareState,
} from '../../../../redux/slices/presenceShare/presenceShare.types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';
import { PieChartStyle } from './styles';

const PieChart = () => {
	const dispatch = useAppDispatch();

	const error = useAppSelector((state) => state.presenceShare.error);
	const loading = useAppSelector((state) => state.presenceShare.loading);
	const presenceShare = useAppSelector((state) => state.presenceShare.presenceShare);

	useEffect(() => {
		dispatch(fetchPresenceShare());
	}, [dispatch]);

	/** TODO create funtion in helper for use other components */
	const series = presenceShare.map((item) => item.presenceShare);
	const labels = presenceShare.map((item) => item.name);
	/** end TODO */
	const options: ApexOptions = {
		labels: labels,
	};

	return (
		<>
			{loading && <div>Cargando gráfica ...</div>}
			{presenceShare.length >= 1 && (
				<PieChartStyle>
					<Chart options={options} series={series} type='pie' />
				</PieChartStyle>
			)}
			{error !== '' && <div>{error}</div>}
		</>
	);
};

export default PieChart;
