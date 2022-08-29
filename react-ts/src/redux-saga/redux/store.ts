import { applyMiddleware, createStore } from "redux";
import { reducer } from './reducer'
import createSagaMiddleware from "redux-saga";
import { watchSaga } from "./saga";


const sagaMiddleWare = createSagaMiddleware()
// 可以合并redux, 也可以applyMidleware redux-thunk等，之前的都可以加入
const store = createStore(reducer, applyMiddleware(sagaMiddleWare))
// 要先调用  applyMiddleware(sagaMiddleWare)
sagaMiddleWare.run(watchSaga)


export default store
