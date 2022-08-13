interface Action {
  type: string,
  payload?: Record<'show', boolean>
}

const initialState = {
  show: true
}


const tabReducer = (state = initialState, { type, payload }: Action) => {
  console.log('tabReducer 执行')
  // console.log(state, payload, type)
  switch (type) {

    case 'show':
      return { ...state, ...payload }

    case 'hide':
      return { ...state, ...payload }

    default:
      return state
  }
}

export default tabReducer