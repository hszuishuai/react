import { CHANEGE_COUTER, SET_USERINFO } from './actionTypes'
import {
    getUserinfo,
    saveUserinfo
} from "../lib/cache"

import { handleActions } from "redux-actions"
const initState = {
    count: 1,
    userinfo: getUserinfo() //获取用户信息
}
const Reducer = handleActions({
    [CHANEGE_COUTER]:(state, actions)=>{
        return {
            ...state,
            count: state.count + actions.payload
        }
    },
    [SET_USERINFO]:(state, actions)=>{
        saveUserinfo(actions.payload) //将用户信息存入stoarge
        console.log(state);
        return {
            ...state,
            userinfo: actions.payload
        }
    }
}, initState)

// const Reducer = (state = initState, action) => {
//     // let count = state.count;
//     switch (action.type) {
//         case CHANEGE_COUTER:
//             return {
//                 ...state,
//                 count:state.count+action.payload
//             }
//         case SET_USERINFO:{
//             saveUserinfo(action.userinfo) //将用户信息存入stoarge
//             return {
//                 ...state,
//                 userinfo:action.userinfo
//             }
//         }           
//         default:
//             return state
//     }
// }

export default Reducer