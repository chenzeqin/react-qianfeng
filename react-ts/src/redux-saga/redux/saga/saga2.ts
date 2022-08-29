
import { call, fork, put, take } from 'redux-saga/effects'

export function* watchSaga2() {
  while (true) {
    // take： 监听组件发来的action
    yield take('get-list2')
    // fork： 立即执行异步处理函数
    yield fork(getList)
  }
}

function* getList() {
  // call：  函数发异步请求
  const res1: string[] = yield call(getListPromise1)
  const res2: string[] = yield call(getListPromise2, res1)

  yield put({
    type: 'change-list2',
    payload: res2
  })
}

function getListPromise1() {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        '444444',
        '555555',
        '666666',
      ])
    })
  })
}
function getListPromise2(data1: string[]) {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        ...data1,
        '444444',
        '555555',
        '666666',
      ])
    })
  })
}