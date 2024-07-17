import { combineReducers } from 'redux';
import tokenReducer from './TokenRedux.js'

const combineReducer = combineReducers({
  token: tokenReducer
})
export default combineReducer;
