import { put, call, takeEvery } from "redux-saga/effects";
import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER,
    ASYNC_SET_USERINFO
} from "./actionTypes";
import { login } from "../api";
import { changeCount, setUseinfo } from "./actions";

// interface IPromise {

// };
const delay: any = (ms: number) => new Promise((resolve, reject) => {
    setTimeout(
        () => {
            resolve();
        },
        ms);
});

function* delayChangeCount() {
    yield call(delay, 2000);
    yield put(changeCount(2));
    // yield call()
}
function* apiGetUseinfo(action: any): any {
    try {
        // console.log(action.getUseinfo)
        yield call(delay, 2000);
        const res: any = yield call(login, action.userinfo);
        yield put(setUseinfo(res.data));
        console.log(setUseinfo(res.data));
    } catch {
        return false;
    }
}

function* hello(): Generator<void> {
    yield console.log("hello world");
}

function* watch(): any {
    yield takeEvery(ASYNC_CHNAGE_COUTER, delayChangeCount);
    yield takeEvery(CHANEGE_COUTER, hello);
    yield takeEvery(ASYNC_SET_USERINFO, apiGetUseinfo);
}

export default function* rootSaga(): any {
    yield watch();
}
