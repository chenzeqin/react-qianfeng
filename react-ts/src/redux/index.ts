import { createStore } from 'redux'

/*
    redux 基础用法
*/

interface Action {
  type: 'hide' | 'show',
  payload: Record<'show', boolean>
}

const initialState = {
  show: true
}


const reducer = (state = initialState, { type, payload }: Action) => {
  console.log(state, payload, type)
  switch (type) {

    case 'show':
      return { ...state, ...payload }

    case 'hide':
      return { ...state, ...payload }

    default:
      return state
  }
}

export const store = createStore(reducer)