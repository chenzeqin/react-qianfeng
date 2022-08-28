
interface State {
  list: any[]
}

const initState: State = {
  list: []
}

interface Action {
  type: string,
  payload?: any[]
}

export const reducer = (prevState = initState, action: Action) => {
  console.log(action)
  switch (action.type) {
    case 'change-list':
      return {
        ...prevState,
        list: action.payload || []
      }

    default:
      return prevState
  }
}