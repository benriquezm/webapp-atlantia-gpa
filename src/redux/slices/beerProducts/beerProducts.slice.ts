import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppThunk } from '../../store';

import { Beer, BeerProductsState } from './beerProducts.types';

const initialState: BeerProductsState = {
	loading: false,
	beerProducts: [],
	error: '',
};

const beerProductsSlice = createSlice({
	name: 'beerProducts',
	initialState,
	reducers: {
		/** can be occupied state.push */
		fetchBeerProductsRequest(state) {
			return {
				...state,
				loading: true,
			};
		},
		fetchBeerProductsSuccess(state, action: PayloadAction<Beer[]>) {
			return {
				...state,
				loading: false,
				beerProducts: action.payload,
				error: '',
			};
		},
		fetchBeerProductsFailure(state, action: PayloadAction<string>) {
			return {
				...state,
				loading: false,
				beerProducts: [],
				error: action.payload,
			};
		},
	},
});

export const fetchBeerProducts = (): AppThunk => {
	return async (dispatch) => {
		dispatch(fetchBeerProductsRequest());
		await Axios.get('https://atlantia-dev-test.herokuapp.com/api/beer-products/')
			.then((response) => {
				dispatch(fetchBeerProductsSuccess(response.data));
			})
			.catch((error) => dispatch(fetchBeerProductsFailure('No se obtuvieron datos.')));
	};
};

export const { fetchBeerProductsFailure, fetchBeerProductsRequest, fetchBeerProductsSuccess } =
	beerProductsSlice.actions;

export default beerProductsSlice.reducer;
