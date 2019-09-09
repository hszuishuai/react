import { CHANEGE_COUTER,SET_USERINFO } from './actionTypes'
import {
    getUserinfo,
    saveUserinfo
}from "../lib/cache"

const initState = {
    count: 1,
    userinfo:getUserinfo() //获取用户信息
}

const Reducer = (state = initState, action) => {
    // let count = state.count;
    switch (action.type) {
        case CHANEGE_COUTER:
            return {
                ...state,
                count:state.count+action.payload
            }
        case SET_USERINFO:{
            saveUserinfo(action.userinfo) //将用户信息存入stoarge
            return {
                ...state,
                userinfo:action.userinfo
            }
        }           
        default:
            return state
    }
}

export default Reducer