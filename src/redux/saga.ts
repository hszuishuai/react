import { put, call, takeEvery } from "redux-saga/effects";
import {
    CHANGE_COUNT,
    ASYNC_CHANGE_COUNT,
    ASYNC_SET_USERINFO
} from "./actionTypes";
import { login } from "../api";
import { changeCount, setUserInfo } from "./actions";

// interface IPromise {

// };
const delay: any = (ms: number) => new Promise((resolve, reject) => {
    setTimeout(
        () => {
            resolve();
        },
        ms);
});

function* delayChangeCount(): any {
    yield call(delay, 2000);
    yield put(changeCount(2));
    // yield call()
}
function* apiGetUserInfo(action: any): any {
    try {
        // console.log(action.getUserinfo)
        yield call(delay, 2000);
        const res: any = yield call(login, action.userinfo);
        yield put(setUserInfo(res.data));
        console.log(setUserInfo(res.data));
    } catch {
        return false;
    }
}

function* hello(): Generator<void> {
    yield console.log("hello world");
}

function* watch(): any {
    yield takeEvery(ASYNC_CHANGE_COUNT, delayChangeCount);
    yield takeEvery(CHANGE_COUNT, hello);
    yield takeEvery(ASYNC_SET_USERINFO, apiGetUserInfo);
}

export default function* rootSaga(): any {
    yield watch();
}
