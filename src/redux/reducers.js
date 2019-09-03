import { CHANEGE_COUTER } from './actionTypes'

const initState = {
    count: 1
}

const Reducer = (state = initState, action) => {
    // let count = state.count;
    switch (action.type) {
        case CHANEGE_COUTER:
            return {
                ...state,
                count:state.count+action.payload
            }
        
        default:
            return state
    }
}

export default Reducer