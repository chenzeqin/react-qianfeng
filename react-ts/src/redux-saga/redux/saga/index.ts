import { all } from 'redux-saga/effects'
import { watchSaga1 } from './saga1'
import { watchSaga2 } from './saga2'


/* 合并多个saga */
export function* watchSaga() {
  yield all([watchSaga1(), watchSaga2()])
}