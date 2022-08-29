import axios from 'axios'
import type { Result, CinemaItem } from '../../../router-pages/type'
import { call, fork, put, take, takeEvery } from 'redux-saga/effects'


export function* getCinemaList() {
  const res: CinemaItem[] = yield call(getCinemaListAction)

  yield put({
    type: 'change-cinema-list',
    payload: res
  })
}

function getCinemaListAction() {
  return axios
    .get<Result<Record<'cinemas', CinemaItem[]>>>(
      'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5767894',
      {
        headers: {
          'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
          'X-Host': `mall.film-ticket.cinema.list`,
        },
      }
    )
    .then((res) => {
      console.log(res)
      return res.data.data.cinemas
    });
}