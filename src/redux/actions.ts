import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER,
    SET_USERINFO,
    ASYNC_SET_USERINFO
} from "./actionTypes";

import { Userinfo } from "MyModel";
import { createAction } from "typesafe-actions";

// type CHANGECOUNT = typeof CHANEGE_COUTER;
// export interface IChangeCount {
//     type: string;
//     paload: {
//         count: number;
//     };
// }


const changeCount = createAction(CHANEGE_COUTER, (actions) => {
    return (count: number) => actions({ count });
}
);
const asynCount = createAction(ASYNC_CHNAGE_COUTER, (actions) => {
    return (count: number) => actions({ count });
});

const setUseinfo = createAction(SET_USERINFO, (actions) => {
    return (userInfo: Userinfo) => actions({ userInfo });
});

const asyncUseinfo = createAction(ASYNC_SET_USERINFO, (actions) => {
    return (userInfo: Userinfo) => actions({ userInfo });
});

export {
    asynCount,
    asyncUseinfo,
    changeCount,
    setUseinfo,
};

