import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER,
    SET_USERINFO,
    ASYNC_SET_USERINFO
} from './actionTypes'


const changeCount = (count) => {
    return {
        type: CHANEGE_COUTER,
        payload: count
    }
}
const asyncCount = (count) => {
    return {
        type: ASYNC_CHNAGE_COUTER
    }
}
const getUseinfo = (userinfo) => {
    return {
        type: SET_USERINFO,
        userinfo
    }
}
const asyncUseinfo = (userinfo) => {
    return {
        type: ASYNC_SET_USERINFO,
        userinfo
    }
}

export {
    changeCount,
    asyncCount,
    getUseinfo,
    asyncUseinfo
}
