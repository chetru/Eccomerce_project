import { actionTypes } from "../../types/action-types";


export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
};

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const addtoCart =(item) =>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:
          item
        
    }
};

export const DLT =(id) =>{
    return{
        type:actionTypes.REMOVE_CART,
        payload:id
    }

};

export const REMOVE =(item) =>{
    return{
        type:actionTypes.RMV_ONE,
        payload:item
    }
};
