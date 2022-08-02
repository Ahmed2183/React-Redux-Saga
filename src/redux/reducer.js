import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'

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

        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART CONDITION", action);
            data.length = data.length ? data.length - 1 : [];
            return [...data];

        case EMPTY_CART:
            console.warn("EMPTY_CART CONDITION", action);
            data = [];
            return [...data];

        default:  //When No Case Matched
            return data;
    }
}