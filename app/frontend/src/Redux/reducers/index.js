import { combineReducers } from 'redux';
import tokenReducer from './TokenRedux.js'
import dataUserReducer from './dataUser.js';

const combineReducer = combineReducers({
  token: tokenReducer,
  dataUser: dataUserReducer
})
export default combineReducer;
