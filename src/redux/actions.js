import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER,
    SET_USERINFO,
    ASYNC_SET_USERINFO
} from './actionTypes'

import { createAction } from "redux-actions"
 
const changeCount = createAction(CHANEGE_COUTER);

const asyncCount =  createAction(ASYNC_CHNAGE_COUTER);

const getUseinfo =  createAction(SET_USERINFO,userinfo=>userinfo)

const asyncUseinfo = createAction(ASYNC_SET_USERINFO, userinfo=>userinfo);

export {
    changeCount,
    asyncCount,
    getUseinfo,
    asyncUseinfo
}
