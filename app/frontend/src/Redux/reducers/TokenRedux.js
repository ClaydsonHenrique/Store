import { ADD_TOKEN, ADD_LOGIN } from '../actions/index.js';

const INITIAL_STATE = {
  token: '',
  login:'',
}

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TOKEN:
      return{
        ...state,
        token: action.payload,
      };
    case ADD_LOGIN:
      return {
        ...state,
        login: action.payload,
      }
      default:
        return state;
  }
}
export default tokenReducer;