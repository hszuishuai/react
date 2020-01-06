import { CHANGE_COUNT, SET_USERINFO } from "./actionTypes";
import {
    _UserInfo,
} from "../lib/Storage";
import { createReducer } from "typesafe-actions";

import { setUserInfo, changeCount } from "./actions";

interface IState {
    count: Number;
    userInfo: (object | undefined);
}
const initState: IState = {
    count: 1,
    userInfo: _UserInfo.getData()
};

const Reducer: any = createReducer(initState).handleAction(setUserInfo, (state, action) => {
    _UserInfo.save(action.payload.userInfo);  //将用户信息存入stoarge
    return { ...state, userInfo: action.payload.userInfo };
}).handleAction([CHANGE_COUNT], (state, action) => {
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
