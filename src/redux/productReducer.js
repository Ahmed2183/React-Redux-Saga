import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'

export const productData = (data = [], action) => { //data = [] is initial value
  
    switch (action.type) {
       
        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST CONDITION", action);
            return [...action.data];  // ... means eik array mai kafi array hai is lia directly extract kia

        default:  //When No Case Matched
            return data;
    }
}