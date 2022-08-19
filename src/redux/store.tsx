import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers/rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//  TODO use composeWithDevTools only for instance of deveop
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
