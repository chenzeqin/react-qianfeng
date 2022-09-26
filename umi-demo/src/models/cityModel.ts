import type { ICity } from "@/pages/city"

interface Action {
  type: string,
  payload: ICity
}

const cachedCityJsonStr = localStorage.getItem('cityModel')
const initialCityModel: ICity = cachedCityJsonStr ? JSON.parse(cachedCityJsonStr) : { name: '未定位' }

export default {
  namespace: 'cityModel',
  //  TODO: 通过api，获取本地位置
  state: initialCityModel,
  reducers: {
    // 设置城市数据
    setCity(preState: ICity, action: Action): ICity {
      // 缓存
      if (action.payload) {
        localStorage.setItem('cityModel', JSON.stringify(action.payload))
      }
      return {
        ...preState,
        ...action.payload
      }
    }
  }
}
