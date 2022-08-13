import { applyMiddleware, combineReducers, createStore } from 'redux'
// import { createStore2 } from './MyRudex'
import ReduxThunk from 'redux-thunk'

import cityRuducer from './reducers/cityReducer'
import tabReducer from './reducers/tabReducer'
import cinameReducer from './reducers/cinemaReducer'

const rootReducer = combineReducers({
  cityRuducer,
  tabReducer,
  cinameReducer
})

// export const store = createStore(reducer)
export const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
)