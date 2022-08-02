/* Root Reducer is for to combine All Reducers */

import { combineReducers } from 'redux';
import { cartData } from './reducer';
import { productData } from './productReducer';

export default combineReducers({ cartData, productData });