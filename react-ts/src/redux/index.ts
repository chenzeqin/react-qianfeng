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

const store = createStore(persistedReducer,
  // 配置开发工具
  composeWithDevTools(
    applyMiddleware(ReduxThunk, ReduxPromise),
    // other store enhancers if any
  ))

const persistor = persistStore(store)

export {
  store,
  persistor
}

export interface RootState {
  cityRuducer: CityState,
  tabReducer: TabState,
  cinameReducer: CinemaState
}