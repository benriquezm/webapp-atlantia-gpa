import {
	FETCH_BEERPRODUCTS_FAILURE,
	FETCH_BEERPRODUCTS_REQUEST,
	FETCH_BEERPRODUCTS_SUCCESS,
} from '../actions/beerProductsAction';

interface IInitialState {
	loading: boolean;
	beerProducts: [];
	error: string;
}

const initialState: IInitialState = {
	loading: false,
	beerProducts: [],
	error: '',
};

const beerProducts = (state: IInitialState = initialState, action: any): IInitialState => {
	switch (action.type) {
		case FETCH_BEERPRODUCTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_BEERPRODUCTS_SUCCESS:
			return {
				loading: false,
				beerProducts: action.payload,
				error: '',
			};
		case FETCH_BEERPRODUCTS_FAILURE:
			return {
				loading: false,
				beerProducts: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default beerProducts;
