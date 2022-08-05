import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant'

export const productData = (data = [], action) => { //data = [] is initial value
  
    switch (action.type) {
       
        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST CONDITION", action);
            return [...action.data];  // ... means in one aray we have multiples array that's why we directly extract that
        default:  //When No Case Matched
            return data;
    }
}