import { REQUEST_WEATHER, RECEIVE_WEATHER } from '../actions'

const initialState = {
  isLoading: true,
  weather: {},
  receivedAt: ''
}

export default function weatherData(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, 
        isFetching: true }

    case RECEIVE_WEATHER:
      return { ...state,
        isLoading: false,
        weather: action.payload.weather,
        receivedAt: action.payload.receivedAt
      }
    default:
      return state
  }
}
