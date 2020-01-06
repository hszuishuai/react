import {
    CHANGE_COUNT,
    ASYNC_CHANGE_COUNT,
    SET_USERINFO,
    ASYNC_SET_USERINFO
} from "./actionTypes";

import { UserInfo } from "MyModel";
import { createAction } from "typesafe-actions";


type TPayLoad =  {
    userInfo?: UserInfo;
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


const changeCount: TAction<number> = createAction(CHANGE_COUNT, (actions) => {
    return (count: number) => actions({ count });
}
);
const asyncCount: TAction<number> = createAction(ASYNC_CHANGE_COUNT, (actions) => {
    return (count: number) => actions({ count});
});

const setUserInfo: TAction<UserInfo> = createAction(SET_USERINFO, (actions) => {
    return (userInfo: UserInfo) => actions({ userInfo });
});

const asyncUserInfo: TAction<UserInfo> = createAction(ASYNC_SET_USERINFO, (actions) => {
    return (userInfo: UserInfo) => actions({ userInfo });
});

export {
    asyncCount,
    asyncUserInfo,
    changeCount,
    setUserInfo,
};

