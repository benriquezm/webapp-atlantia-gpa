import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import beerProductsReducer from './slices/beerProducts/beerProducts.slice';
import priceEvolutionReducer from './slices/priceEvolution/priceEvolution.slice';
import presenceShareReducer from './slices/presenceShare/presenceShare.slice';

const store = configureStore({
	reducer: {
		beerProducts: beerProductsReducer,
		priceEvolution: priceEvolutionReducer,
		presenceShare: presenceShareReducer,
	},
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
