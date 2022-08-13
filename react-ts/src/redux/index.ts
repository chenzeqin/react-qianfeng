import { combineReducers, createStore } from 'redux'
// import { createStore2 } from './MyRudex'

import cityRuducer from './reducers/cityReducer'
import tabReducer from './reducers/tabReducer'

const reducer = combineReducers({
  cityRuducer,
  tabReducer
})

// export const store = createStore(reducer)
export const store = createStore(reducer)