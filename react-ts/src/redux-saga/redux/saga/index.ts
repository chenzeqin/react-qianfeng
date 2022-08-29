import { all, takeEvery } from 'redux-saga/effects'
import { getList1, watchSaga1 } from './saga1'
import { getList2, watchSaga2 } from './saga2'
import { getCinemaList } from './getCinemaList'


/* 合并多个saga */
export function* watchSaga() {
  // yield all([watchSaga1(), watchSaga2()])

  // 同等写法
  yield takeEvery('get-list1', getList1)
  yield takeEvery('get-list2', getList2)
  yield takeEvery('get-cinema-list', getCinemaList)
}