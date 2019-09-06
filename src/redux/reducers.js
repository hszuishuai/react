import { CHANEGE_COUTER,SET_USERINFO } from './actionTypes'

const initState = {
    count: 1,
    userinfo:null
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