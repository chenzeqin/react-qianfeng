
interface State {
  list: any[]
}

const initState: State = {
  list: []
}

interface Action {
  type: string,
  payload: any[]
}

export const reducer = (prevState = initState, action: Action) => {
  return prevState
}