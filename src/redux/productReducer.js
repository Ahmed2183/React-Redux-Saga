import { PRODUCT_LIST } from './constant'

export const productData = (data = [], action) => { //data = [] is initial value
  
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn("PRODUCT_LIST CONDITION", action);
            return [action.data];

        default:  //When No Case Matched
            return data;
    }
}