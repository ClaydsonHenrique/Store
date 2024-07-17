import { ADD_TOKEN } from '../actions/index.js';

const INITIAL_STATE = {
  token: '',
}

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TOKEN:
      return{
        ...state,
        token: action.payload,
      }
      default:
        return state;
  }
}
export default tokenReducer;