import type { Result, CinemaItem } from '../../router-pages/type'
interface State {
  list1: any[]
  list2: any[]
  cinemaList: CinemaItem[]
}

const initState: State = {
  list1: [],
  list2: [],
  cinemaList: []
}

interface Action {
  type: string,
  payload?: any[]
}

export const reducer = (prevState = initState, action: Action) => {
  console.log(action)
  switch (action.type) {
    case 'change-list1':
      return {
        ...prevState,
        list1: action.payload || []
      }
    case 'change-list2':
      return {
        ...prevState,
        list2: action.payload || []
      }

    case 'change-cinema-list':
      return {
        ...prevState,
        cinemaList: action.payload || []
      }

    default:
      return prevState
  }
}