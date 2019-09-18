import { put, call, takeEvery } from 'redux-saga/effects'
import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER,
    ASYNC_SET_USERINFO
} from './actionTypes'
import {login} from "../api"
import {changeCount,getUseinfo } from './actions'

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, ms)
})
function* delayChangeCount() {
    yield call(delay, 2000);
    yield put(changeCount(2));
    // yield call()
}
function* apiGetUseinfo(action) {
    try {
       // console.log(action.getUseinfo)
        yield call(delay, 2000);
        const res = yield call(login, action.userinfo);
        yield put(getUseinfo(res.data))
        console.log(getUseinfo(res.data))
    } catch {
        return
    }
}

function* hello() {
     yield console.log("hello world")
}

function* watch() {
    yield takeEvery(ASYNC_CHNAGE_COUTER, delayChangeCount);
    yield takeEvery(CHANEGE_COUTER, hello);
    yield takeEvery(ASYNC_SET_USERINFO, apiGetUseinfo)
}

export default function* rootSaga() {
    yield watch()
}