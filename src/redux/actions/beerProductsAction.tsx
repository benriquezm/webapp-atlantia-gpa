import Axios from 'axios';

export const FETCH_BEERPRODUCTS_REQUEST = 'FETCH_BEERPRODUCTS_REQUEST';
export const FETCH_BEERPRODUCTS_SUCCESS = 'FETCH_BEERPRODUCTS_SUCCESS';
export const FETCH_BEERPRODUCTS_FAILURE = 'FETCH_BEERPRODUCTS_FAILURE';

interface IFetchRequest {
	type: typeof FETCH_BEERPRODUCTS_REQUEST;
}

interface IFetchSuccess {
	type: typeof FETCH_BEERPRODUCTS_SUCCESS;
	payload: [];
}

interface IFetchFailure {
	type: typeof FETCH_BEERPRODUCTS_FAILURE;
	payload: string;
}

/** * actions ***/
export const fetchBeerProductsRequest = () => {
	return {
		type: FETCH_BEERPRODUCTS_REQUEST,
	};
};

export const fetchBeerProductsSuccess = (beerProducts: IFetchSuccess) => {
	return {
		type: FETCH_BEERPRODUCTS_SUCCESS,
		payload: beerProducts,
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
			.catch((error) => dispatch(fetchBeerProductsFailure('No se obtuvieron datos.')));
	};
};

/* const fetchBeerProducts = () => async (dispatch: Dispatch) => {
	return (dispatch: any) => {
		dispatch(fetchBeerProductsRequest());
		Axios.get('https://atlantia-dev-test.herokuapp.com/api/beer-products/')
			.then((response) => {
				dispatch(fetchBeerProductsSuccess(response.data));
			})
			.catch((error) => fetchBeerProductsFailure('No se obtuvieron datos.'));
	};
};*/

export default fetchBeerProducts;
