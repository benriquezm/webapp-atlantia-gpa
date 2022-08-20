// import { applyMiddleware, createStore } from 'redux';
// import rootReducers from './reducers/rootReducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// //  TODO use composeWithDevTools only for instance of deveop
// const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import beerProductsReducer from './slices/beerProducts/beerProducts.slice';

const store = configureStore({
	reducer: {
		beerProducts: beerProductsReducer,
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
