import { ADD_TO_CART, REMOVE_TO_CART } from './constant'

export const cartData = (data = [], action) => {
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
            return 1 + 1;

        default:  //When No Case Matched
            return "No Action Called";
    }


}