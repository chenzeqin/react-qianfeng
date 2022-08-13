
import type { CinemaItem } from '../../router-pages/type'
/*
  影院列表 reducer
*/
interface Action {
  type: string,
  payload?: CinemaItem[]
}

const initialState = {
  list: []
}


const cinameReducer = (state = initialState, { type, payload }: Action) => {
  console.log('cinameReducer 执行')
  console.log(state, payload, type)
  switch (type) {

    case 'set-ciname-list':
      return { ...state, list: payload }

    default:
      return state
  }
}

export default cinameReducer