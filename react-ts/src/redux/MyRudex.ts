

interface Action {
  type: string
  payload?: any
  [payload: string]: any
}
interface Ruducer<S = any> {
  (initState: S, action: Action): S
}
type CB = () => void

export function createStore2(reducer: Ruducer) {
  let state = reducer(undefined, { type: `init@${Math.random() * Date.now()}` })
  const cbList: CB[] = []
  // 订阅
  function subscribe(cb: CB) {
    cbList.push(cb)
    // fix: 父组件componentDidMount晚于自组件componentDidMount,子组件dispatch时父组件没有效果
    callCBList()
  }
  function dispatch(action: any) {
    state = reducer(state, action)
    callCBList()
  }
  // 获取状态
  function getState() {
    return state
  }

  // 执行订阅回调
  function callCBList() {
    cbList.forEach(cb => {
      cb && cb()
    })
  }

  return {
    subscribe,
    dispatch,
    getState
  }
}