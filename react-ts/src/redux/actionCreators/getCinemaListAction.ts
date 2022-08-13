import axios from 'axios'
import type { Result, CinemaItem } from '../../router-pages/type'

/*
异步action，返回一个函数（需要使用中间件 redux-thunk,或者redux-promise）
异步逻辑集中在action中（文档推荐），vue的vuex action也是处理异步逻辑
*/

// 异步中间件1： redux-thunk
export const getCinemaListActio1 = () => {
  return (dispatch: (action: any) => void) => {
    axios
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
        dispatch({
          type: 'set-ciname-list',
          payload: res.data.data.cinemas
        })
      });
  }
}
// 异步中间件2： redux-promise
export const getCinemaListAction = () => {
  // 返回一个promise
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
      return {
        type: 'set-ciname-list',
        payload: res.data.data.cinemas
      }
    });
}