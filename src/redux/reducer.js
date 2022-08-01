import { ADD_TO_CART, REMOVE_TO_CART } from './constant'

export const cartData = (data = [], action) => { //data = [] is initial value
    // if (action.type === ADD_TO_CART) {
    //     console.warn("Reducer Called", action);
    //     return action.data;
    // }
    // else {
    //     return "No Action Called";
    // }

    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART CONDITION", action);
            return [action.data, ...data];

        default:  //When No Case Matched
            return data;
    }


}