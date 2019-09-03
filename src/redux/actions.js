import {
    CHANEGE_COUTER,
    ASYNC_CHNAGE_COUTER
} from './actionTypes'


const changeCount = (count)=>{
    return {
        type:CHANEGE_COUTER,
        payload:count
    }
}
const asyncCount = (count)=>{
    return {
        type:ASYNC_CHNAGE_COUTER
    }
}

export {
    changeCount,
    asyncCount
}
