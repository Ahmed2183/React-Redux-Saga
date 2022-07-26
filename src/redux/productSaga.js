import { takeEvery, put } from 'redux-saga/effects'  //takeEvery is for get data, put is used to call data from reducer
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

//Generator Function, Use yeild instead of await

function* getProducts()  
{
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json();
    // console.warn("Action productList Called", data);
    yield put({ type: SET_PRODUCT_LIST, data:data }) //-->Saga call reducer direclty using put, SET_PRODUCT_LIST is reducer type
}

function* searchProducts(data)  
{
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    console.warn("Action productSearch Called", data);
    yield put({ type: SET_PRODUCT_LIST, data:result }) 
}

function* productSaga()  
{
    yield takeEvery(PRODUCT_LIST, getProducts);   //In parameters add action type and function in which we call api of that action, PRODUCT_LIST is action type
    yield takeEvery(SEARCH_PRODUCT, searchProducts); 
}

export default productSaga;