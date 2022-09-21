import { getCinemaList } from "../services/maizuo";

export default {
  // model 的命名空间，同时也是他在全局 state 上的属性，只能用字符串，不支持通过 . 的方式创建多层命名空间。
  namespace: "maizuo",
  // 初始值，优先级低于传给 dva() 的 opts.initialState。
  state: {
    tabVisible: true,
    list: [],
  },
  // 以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。
  // 格式为 (state, action) => newState 或 [(state, action) => newState, enhancer]。
  reducers: {
    toggleTab(state, action) {
      return { ...state, tabVisible: action.payload.visible };
    },
    changeList(state, action) {
      return { ...state, list: action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log("初始化");
    },
  },

  // 异步 redux-saga
  effects: {
    // action, saga
    *getCinemaList({ payload }, { call, put }) {
      // call(Promise)
      const list = yield call(getCinemaList);
      // 触发 reducer
      yield put({
        type: "changeList",
        payload: list,
      });
    },
  },
};
