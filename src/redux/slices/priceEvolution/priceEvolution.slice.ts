import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppThunk } from '../../store';

import { PriceEvolutionProd, PriceEvolutionState } from './priceEvolution.types';

const initialState: PriceEvolutionState = {
	loading: false,
	evolutionPriceProd: [],
	error: '',
};

const priceEvolutionSlice = createSlice({
	name: 'priceEvolution',
	initialState,
	reducers: {
		/** can be occupied state.push */
		priceEvolutionRequest(state) {
			return {
				...state,
				loading: true,
			};
		},
		priceEvolutionSuccess(state, action: PayloadAction<PriceEvolutionProd[]>) {
			return {
				...state,
				loading: false,
				evolutionPriceProd: action.payload,
				error: '',
			};
		},
		priceEvolutionFailure(state, action: PayloadAction<string>) {
			return {
				...state,
				loading: false,
				evolutionPriceProd: [],
				error: action.payload,
			};
		},
	},
});

export const fetchPriceEvolution = (): AppThunk => {
	return async (dispatch) => {
		dispatch(priceEvolutionRequest());
		await Axios.get('https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/')
			.then((response) => {
				dispatch(priceEvolutionSuccess(response.data));
			})
			.catch((error) => dispatch(priceEvolutionFailure('No se obtuvieron datos.')));
	};
};

export const { priceEvolutionFailure, priceEvolutionRequest, priceEvolutionSuccess } =
	priceEvolutionSlice.actions;

export default priceEvolutionSlice.reducer;
