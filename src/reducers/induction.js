import { ADD_NAME, ADD_BUSSTOP, FINISH_INDUCTION } from '../actions'

const initialState = {
  name: '',
  busStop: '',
  inductionCompleted: false
}

export default function induction(state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, 
        name: action.payload 
      }

    case ADD_BUSSTOP:
      return { ...state,
        busStop: action.payload,
      }

    case FINISH_INDUCTION:
      return { ...state,
        inductionCompleted: true
      }

    default:
      return state
  }
}
