import { actionTypes } from "../../types/action-types";
const savedCartItems = JSON.parse(localStorage.getItem('itemsInCart')) || []

const intialState = {
    carts: savedCartItems || [],
    quantity:0,
};

export const CartReducer = (state = intialState, { type, payload }) => {
    console.log(type);
    switch (type) {
        case actionTypes.ADD_TO_CART:
            
        const IteamIndex = state.carts.findIndex((item)=> item.id === payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].quantity =state.carts[IteamIndex].quantity+1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...payload,quantity:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }
        case actionTypes.REMOVE_CART:
            const data = state.carts.filter((el)=>el.id !== payload); 
            console.log(data);
            return {
                ...state,
                carts:data
            }
        case actionTypes.RMV_ONE:
            const Item_index =state.carts.findIndex((item) => item.id === payload.id);

            if(state.carts[Item_index].quantity >= 1){
                const dltitem =state.carts[Item_index].quantity -=1
                console.log(...state.carts,dltitem);
                return{
                    ...state,
                    carts:[...state.carts]
                }
            }
        default:
            return state;
    }
};