import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducer from './reducers/index.js';

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store