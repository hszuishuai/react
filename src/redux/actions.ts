import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER,
    SET_USERINFO,
    ASYNC_SET_USERINFO
} from "./actionTypes";

import { Userinfo } from "MyModel";
import { createAction } from "typesafe-actions";


type TPayLoad =  {
    userInfo?: Userinfo;
    count?: number;
};

interface IAction {
    type: string;
    payload: {
        [p in keyof TPayLoad]: TPayLoad[p]
    };
}
type TAction<T> = {
    // (userInfo: T ): IAction<T>
    (e: T): IAction
};


const changeCount: TAction<number> = createAction(CHANEGE_COUTER, (actions) => {
    return (count: number) => actions({ count });
}
);
const asynCount: TAction<number> = createAction(ASYNC_CHNAGE_COUTER, (actions) => {
    return (count: number) => actions({ count});
});

const setUseinfo: TAction<Userinfo> = createAction(SET_USERINFO, (actions) => {
    return (userInfo: Userinfo) => actions({ userInfo });
});

const asyncUseinfo: TAction<Userinfo> = createAction(ASYNC_SET_USERINFO, (actions) => {
    return (userInfo: Userinfo) => actions({ userInfo });
});

export {
    asynCount,
    asyncUseinfo,
    changeCount,
    setUseinfo,
};

