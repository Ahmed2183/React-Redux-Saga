// import { createStore } from 'redux'  //For Simple redux

import { configureStore } from '@reduxjs/toolkit' //For redux/toolkit
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer';
import productSaga from './productSaga';

// const store = createStore(rootReducer) //For Simple redux

const sagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
)

sagaMiddleware.run(productSaga);

export default store;