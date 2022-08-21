import { observable, configure, action } from "mobx";
// 开启严格模式
configure({
  enforceActions: 'always'
})

// 方式1
const store = observable({
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
  setTabbarShow: action, // 不写时，严格模式会有警告
  setTabbarHide: action  // 标记方法是action， 专门修改mobx数据
})

export default store