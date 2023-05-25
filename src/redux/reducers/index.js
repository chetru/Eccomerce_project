import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { productReducer, selectedProductsReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer,
    CartReducer
})
export default reducers;