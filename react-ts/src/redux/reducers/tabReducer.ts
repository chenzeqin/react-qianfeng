import { fromJS, Map } from 'immutable'

interface Action {
  type: string,
  payload?: Record<'show', boolean>
}
export interface TabState extends Map<string, any> {
  show?: boolean
}

const initialState = {
  show: true
}

// 需要保持state一直是immutable数据
const tabReducer = (state = Map(initialState), { type, payload }: Action) => {
  console.log('tabReducer 执行', state)
  // console.log(state, payload, type)
  switch (type) {

    case 'show':
      return state.set('show', payload?.show as any)
      // return { ...state, ...payload }

    case 'hide':
      // return { ...state, ...payload }
      return state.set('show', payload?.show as any)

    default:
      return state
  }
}

export default tabReducer