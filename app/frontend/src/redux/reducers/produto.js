import { GET_PRODUCT_ID, Filter_PRODUCT } from "../action/index.js";

const INITIAL_STATE = {
  productId: '',
  productFiltered: [],
}

const reducerProduct = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };
    case Filter_PRODUCT:
      return {
        ...state,
        productFiltered: action.payload,
      };
    default:
      return state;
  }
}

export default reducerProduct;