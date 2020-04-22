import { CHANGE_COUNT, ASYNC_CHANGE_COUNT, SET_USERINFO, ASYNC_SET_USERINFO } from "./actionTypes";

import { UserInfo } from "MyModel";
import { createAction } from "typesafe-actions";

interface ICount {
    count: number;
}
interface IAction<T> {
    type: string;
    payload: {
        [p in keyof T]: T[p];
    };
}
type TAction<T> = {
    // (userInfo: T ): IAction<T>
    (e: any): IAction<T>;
};

const changeCount: TAction<ICount> = createAction(CHANGE_COUNT, (actions) => {
    return (count: number) => actions({ count });
});
const asyncCount: TAction<ICount> = createAction(ASYNC_CHANGE_COUNT, (actions) => {
    return (count: number) => actions({ count });
});

const setUserInfo: TAction<UserInfo> = createAction(SET_USERINFO, (actions) => {
    return (userInfo: UserInfo) => actions({ userInfo });
});

const asyncUserInfo: TAction<UserInfo> = createAction(ASYNC_SET_USERINFO, (actions) => {
    return (userInfo: UserInfo) => actions({ userInfo });
});

export { asyncCount, asyncUserInfo, changeCount, setUserInfo };

type Record<T> = {
    readonly [p in keyof T]: T[p];
};

interface IUser {
    name: string;
    user?: string;
    fud: () => any;
}

// let person: Record<IUser> = {
//     name: "22",
// };

type Pick<T, k extends keyof T> = {
    [p in k]: T[p];
};

type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
type Func = () => IUser;
type Test = ReturnType<Func>;

type Fun<T> = {
    [p in keyof T]: T[p] extends Function ? p : never;
}[keyof T];



