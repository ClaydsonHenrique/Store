import { ADD_DATA_USER } from '../actions/index.js';

const INITIAL_STATE = {
  dataUser: {},
}

const dataUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DATA_USER:
      return {
        ...state,
        dataUser: action.payload, 
      };
    default:
      return state;
  }
};

export default dataUserReducer;