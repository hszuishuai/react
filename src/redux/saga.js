import {put,call,takeEvery } from 'redux-saga/effects'
import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER
} from './actionTypes'

import {changeCount} from './actions'
const delay = ms=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },ms)
})
function *delayChangeCount(){
    yield call(delay,2000);
    yield put(changeCount(2));
    // yield call()
}



function *hello(){
    console.log("hello world")
}

function * watch(){
    yield takeEvery(ASYNC_CHNAGE_COUTER, delayChangeCount);
    yield takeEvery(CHANEGE_COUTER, hello);
}

export default  function *rootSaga(){
    yield watch()
}