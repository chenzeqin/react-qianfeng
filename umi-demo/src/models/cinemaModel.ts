import { ICinema } from "@/pages/cinemas"
import { Effect } from 'umi'
interface Action {
  type: string,
  cityId: number
}
export interface CinemaModel {
  list: ICinema[]
}

export default {
  namespace: 'cinemaModel',
  //  TODO: 通过api，获取本地位置
  state: {
    list: []
  },
  reducers: {
    changeList(state: any, action: any) {
      return { ...state, list: action.payload };
    },
  },
  effects: {
    *setCinemaList(action: Action, obj: any): any {
      const { put, call } = obj
      const list = yield call(getCinemaList, action.cityId);
      // 触发 reducer
      yield put({
        type: "changeList",
        payload: list,
      });
    }
  }
}


async function getCinemaList(cityId: number): Promise<ICinema[]> {
  if (!cityId) {
    return Promise.resolve([])
  }
  return await fetch(
    `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=5359427`,
    {
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        "X-Host": `mall.film-ticket.cinema.list`,
      },
    }
  ).then(res => res.json()).then(res => res.data.cinemas)
}
