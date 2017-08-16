import { REQUEST_TIMETABLE, RECEIVE_TIMETABLE } from '../actions'

const initialState = {
  timetable: {},
  isLoading: true,
  receivedAt: null,
}

export default function busDetails(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TIMETABLE:
      return { ...state, 
        isLoading: true 
      }

    case RECEIVE_TIMETABLE:
      return { ...state,
        isLoading: false,
        timetable: action.payload.timetable,
        receivedAt: action.payload.receivedAt
      }
    default:
      return state
  }
}
