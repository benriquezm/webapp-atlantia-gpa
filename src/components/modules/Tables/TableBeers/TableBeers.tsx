import { useEffect } from 'react';
//	import { useDispatch, useSelector } from 'react-redux';

import { fetchBeerProducts } from '../../../../redux/slices/beerProducts/beerProducts.slice';
import TableHeader from '../../../elements/TableHeader/TableHeader';
import TableRow from '../../../elements/TableRow/TableRow';
import { TableBeersStyles } from './styles';
import { Beer } from '../../../../redux/slices/beerProducts/beerProducts.types';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux/redux';

const TableBeers = () => {
	const dispatch = useAppDispatch();

	const error = useAppSelector((state) => state.beerProducts.error);
	const loading = useAppSelector((state) => state.beerProducts.loading);
	const beerProducts = useAppSelector((state) => state.beerProducts.beerProducts);

	useEffect(() => {
		dispatch(fetchBeerProducts());
	}, [dispatch]);

	return (
		<>
			{loading && <div>Cargando tabla ...</div>}
			{beerProducts.length >= 1 && (
				<TableBeersStyles>
					<TableHeader />
					{beerProducts.map((product: Beer) => {
						return (
							<TableRow
								key={product.id}
								name={product.name}
								sku={product.sku}
								persistence={product.persistence}
								averagePrice={product.averagePrice}
								averagePosition={product.averagePosition}
								productImage={product.productImage}
							/>
						);
					})}
				</TableBeersStyles>
			)}
			{error !== '' && <div>{error}</div>}
		</>
	);
};

export default TableBeers;
