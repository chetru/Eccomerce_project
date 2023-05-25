import { actionTypes } from "../../types/action-types";


const intialState = {
    products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state, products: payload
            };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state, ...payload
            }; 
        default:
            return state;
    }
}
