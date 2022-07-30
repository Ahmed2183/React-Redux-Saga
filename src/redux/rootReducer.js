/* Root Reducer is for to combine All Reducers */

import { combineReducers } from 'redux';
import { cartData } from './reducer';

export default combineReducers({ cartData });