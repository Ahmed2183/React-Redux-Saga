import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant'

export const addToCart = (data) => {
    console.warn("Action addToCart Called", data);
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeFromCart = (data) => {
    console.warn("Action removeFromCart Called", data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("Action removeFromCart Called");
    return {
        type: EMPTY_CART,
    }
}


