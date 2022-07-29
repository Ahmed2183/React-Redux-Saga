export const addToCart = ( data ) => {
    console.warn("Action Called", data);
    return {
        type: 'ADD_TO_CART',
        data
    }
}