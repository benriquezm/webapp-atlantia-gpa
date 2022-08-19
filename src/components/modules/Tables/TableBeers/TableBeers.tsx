import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBeerProducts from '../../../../redux/actions/beerProductsAction';
import TableHeader from '../../../elements/TableHeader/TableHeader';
import TableRow from '../../../elements/TableRow/TableRow';
import { TableBeersStyles } from './styles';

/** TODO separate interfaces for others components use */
interface IProduct {
	id: number;
	sku: number;
	name: string;
	persistence: number;
	averagePrice: number;
	productImage: string;
	averagePosition: number;
}

const TableBeers = () => {
	const getBeerProducts = useSelector((state: any) => state.beerProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBeerProducts());
	}, [dispatch]);

	//	console.log('[products]: ', getBeerProducts.beerProducts);

	return (
		<>
			{getBeerProducts.loading && <div>Cargando tabla ...</div>}
			{getBeerProducts.beerProducts.length >= 1 && (
				<TableBeersStyles>
					<TableHeader />
					{getBeerProducts.beerProducts.map((product: IProduct) => {
						console.log('[product]: ', product);
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
			{getBeerProducts.error !== '' && <div>{getBeerProducts.error}</div>}
		</>
	);
};

export default TableBeers;
