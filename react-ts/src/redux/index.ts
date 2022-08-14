import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { createStore2 } from './MyRudex'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'

import cityRuducer, { CityState } from './reducers/cityReducer'
import tabReducer, { TabState } from './reducers/tabReducer'
import cinameReducer, { CinemaState } from './reducers/cinemaReducer'

import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  cityRuducer,
  tabReducer,
  cinameReducer
})

// export const store = createStore(reducer)
export const store = createStore(
  rootReducer,
  // 配置开发工具
  composeWithDevTools(
    applyMiddleware(ReduxThunk, ReduxPromise),
    // other store enhancers if any
  )
)


export interface RootState {
  cityRuducer: CityState,
  tabReducer: TabState,
  cinameReducer: CinemaState
}