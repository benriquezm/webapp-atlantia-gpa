import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppThunk } from '../../store';

import { PresenceShare, PresenceShareState } from './presenceShare.types';

const initialState: PresenceShareState = {
	loading: false,
	presenceShare: [],
	error: '',
};

const presenceShareSlice = createSlice({
	name: 'presenceShare',
	initialState,
	reducers: {
		/** can be occupied state.push */
		presenceShareRequest(state) {
			return {
				...state,
				loading: true,
			};
		},
		presenceShareSuccess(state, action: PayloadAction<PresenceShare[]>) {
			return {
				...state,
				loading: false,
				presenceShare: action.payload,
				error: '',
			};
		},
		presenceShareFailure(state, action: PayloadAction<string>) {
			return {
				...state,
				loading: false,
				presenceShare: [],
				error: action.payload,
			};
		},
	},
});

export const fetchPresenceShare = (): AppThunk => {
	return async (dispatch) => {
		dispatch(presenceShareRequest());
		await Axios.get('https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/')
			.then((response) => {
				dispatch(presenceShareSuccess(response.data));
			})
			.catch((error) => dispatch(presenceShareFailure('No se obtuvieron datos.')));
	};
};

export const { presenceShareFailure, presenceShareRequest, presenceShareSuccess } =
	presenceShareSlice.actions;

export default presenceShareSlice.reducer;
