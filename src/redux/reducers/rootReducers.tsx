import { combineReducers } from 'redux';

import beerProducts from './beerProductsReducer';

const rootReducers = combineReducers({
	beerProducts,
});

export default rootReducers;
