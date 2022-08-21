import { observable, configure, action } from "mobx";
// 开启严格模式
configure({
  enforceActions: 'always'
})

/* 
  装饰器写法
*/
// 1. vscode 勾选experimentalDecorators
class Store {
  @observable tabbarVisible = false
  @observable city = ''
  @observable list = []
  @action setTabbarShow() {
    this.tabbarVisible = true
  }
  @action setTabbarHide() {
    this.tabbarVisible = false
  }
}

export default new Store()
