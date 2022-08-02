// import { createStore } from 'redux'  //For Simple redux

import { configureStore } from '@reduxjs/toolkit' ////For redux/toolkit
import rootReducer from './rootReducer';

// const store = createStore(rootReducer) //For Simple redux
const store = configureStore({ reducer: rootReducer })

export default store;