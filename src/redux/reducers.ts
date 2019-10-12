import { CHANEGE_COUTER, SET_USERINFO } from "./actionTypes";
import {
    getUserinfo,
    saveUserinfo
} from "../lib/cache";
import { createReducer } from "typesafe-actions";

import { setUseinfo, changeCount } from "./actions";

interface IState {
    count: Number;
    userinfo: (object | undefined);
}
const initState: IState = {
    count: 1,
    userinfo: getUserinfo()
};

const Reducer: any = createReducer(initState).handleAction(setUseinfo, (state, action) => {
    return { ...state, userinfo: action.payload.userInfo };
}).handleAction([CHANEGE_COUTER], (state, action) => {
    console.log(state, action);
    return { ...state, count: action.payload.count + state.count };
});

// const initState = {
//     count: 1,
//     userinfo: getUserinfo() //获取用户信息
// }
// const Reducer = handleActions({
//     [CHANEGE_COUTER]:(state, actions)=>{
//         return {
//             ...state,
//             count: state.count + actions.payload
//         }
//     },
//     [SET_USERINFO]:(state, actions)=>{
//         saveUserinfo(actions.payload) //将用户信息存入stoarge
//         console.log(state);
//         return {
//             ...state,
//             userinfo: actions.payload
//         }
//     }
// }, initState)

export default Reducer;
