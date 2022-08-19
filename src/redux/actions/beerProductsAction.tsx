import Axios from 'axios';

export const FETCH_BEERPRODUCTS_REQUEST = 'FETCH_BEERPRODUCTS_REQUEST';
export const FETCH_BEERPRODUCTS_SUCCESS = 'FETCH_BEERPRODUCTS_SUCCESS';
export const FETCH_BEERPRODUCTS_FAILURE = 'FETCH_BEERPRODUCTS_FAILURE';

/** * actions ***/
export const fetchBeerProductsRequest = () => {
	return {
		type: FETCH_BEERPRODUCTS_REQUEST,
	};
};

export const fetchBeerProductsSuccess = (endpoint: any) => {
	return {
		type: FETCH_BEERPRODUCTS_SUCCESS,
		payload: endpoint,
	};
};

export const fetchBeerProductsFailure = (error: any) => {
	return {
		type: FETCH_BEERPRODUCTS_FAILURE,
		payload: error,
	};
};

const fetchBeerProducts = () => {
	return (dispatch: any) => {
		dispatch(fetchBeerProductsRequest());
		Axios.get('https://atlantia-dev-test.herokuapp.com/api/beer-products/')
			.then((response) => {
				dispatch(fetchBeerProductsSuccess(response.data));
			})
			.catch((error) => fetchBeerProductsFailure('No se obtuvieron datos.'));
	};
};

export default fetchBeerProducts;
