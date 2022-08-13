
/*
  更改当前城市选择
*/

interface Action {
  type: string,
  payload?: string
}

const initialState = {
  city: ''
}


const cityRuducer = (state = initialState, { type, payload }: Action) => {
  console.log(state, payload, type)
  console.log('cityRuducer 执行')
  switch (type) {

    case 'change-city':
      return { ...state, city: payload }

    default:
      return state
  }
}

export default cityRuducer