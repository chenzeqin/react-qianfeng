import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { createStore2 } from './MyRudex'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import cityRuducer, { CityState } from './reducers/cityReducer'
import tabReducer, { TabState } from './reducers/tabReducer'
import cinameReducer, { CinemaState } from './reducers/cinemaReducer'

import { composeWithDevTools } from 'redux-devtools-extension';
// 用于redux数据持久化
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import createSagaMiddleware from "redux-saga";
import { watchSaga } from "../redux-saga/redux/saga";

// redux持久化
const persistConfig = {
  key: 'your_localStorage_key',
  storage,
  // 需要持久化数据key白名单，默认会缓存所有数据
  whitelist: ['cityRuducer'] // only navigation will be persisted
}



const rootReducer = combineReducers({
  cityRuducer,
  tabReducer,
  cinameReducer
})
// 创建持久化的reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// saga
const sagaMiddleWare = createSagaMiddleware()

const store = createStore(persistedReducer,
  // 配置开发工具
  composeWithDevTools(
    applyMiddleware(ReduxThunk, ReduxPromise, sagaMiddleWare),
    // other store enhancers if any
  ))

sagaMiddleWare.run(watchSaga)

export {
  store
}

export const persistor = persistStore(store);

export interface RootState {
  cityRuducer: CityState,
  tabReducer: TabState,
  cinameReducer: CinemaState
}