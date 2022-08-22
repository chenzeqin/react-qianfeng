import { observable, configure, action, runInAction } from "mobx";
import { CinemaItem, Result } from "../../router-pages/type";
import axios from 'axios'
// 开启严格模式
configure({
  enforceActions: 'always'
})

/* 
  装饰器写法
*/
// 1. vscode 勾选experimentalDecorators
class Store {
  @observable tabbarVisible = true
  @observable city = ''
  @observable list: CinemaItem[] = []
  @action setTabbarShow() {
    console.log('show')
    this.tabbarVisible = true
  }
  @action setTabbarHide() {
    console.log('hide')
    this.tabbarVisible = false
  }
  @action async getCinemaList() {
    const list = await axios
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
        return res.data.data.cinemas
      });

    runInAction(() => {
      this.list = list
    })
  }
}

export default new Store()
