import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducers";
import rootSaga from "./saga";

// tslint:disable-next-line:typedef
const sagaMiddleware = createSagaMiddleware();

// tslint:disable-next-line:typedef
const store = createStore(
    Reducer,
    applyMiddleware(sagaMiddleware)
);

export default store;

sagaMiddleware.run(rootSaga);
