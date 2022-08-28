import { applyMiddleware, createStore } from "redux";
import { reducer } from './reducer'
import createSagaMiddleware from "redux-saga";
import { watchSaga } from "./saga";


const sagaMiddleWare = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleWare))
// 要先调用  applyMiddleware(sagaMiddleWare)
sagaMiddleWare.run(watchSaga)


export default store
