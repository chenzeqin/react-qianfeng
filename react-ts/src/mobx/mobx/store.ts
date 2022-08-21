import { observable, configure, action } from "mobx";
// 开启严格模式
configure({
  enforceActions: 'always'
})


export const store = observable({
  tabbarVisible: true,
  city: '',
  list: [],
  setTabbarShow() {
    this.tabbarVisible = true
  },
  setTabbarHide() {
    this.tabbarVisible = false
  }
}, {
  setTabbarShow: action,
  setTabbarHide: action  // 标记方法是action， 专门修改mobx数据
})