import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import Reducer from './reducers.js'
import rootSaga from  "./saga"
const sagaMiddleware=createSagaMiddleware()
const store = createStore(
    Reducer,
    applyMiddleware(sagaMiddleware)
)

export default store

sagaMiddleware.run(rootSaga)