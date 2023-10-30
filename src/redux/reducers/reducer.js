import { combineReducers } from "redux";
import reducerProduct from "./produto.js";

const rootReducer = combineReducers({
  produto: reducerProduct,
});

export default rootReducer;
