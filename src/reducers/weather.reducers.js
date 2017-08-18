import { handleActions } from 'redux-actions';

import * as actions from '../actions';

export const initialState = {
  isLoading: true,
  weather: {},
  receivedAt: ''
};

const initialActions = {
  [actions.fetchWeather.request]: (state, action) => ({
    ...state,
    isLoading: true,
  }),

  [actions.fetchWeather.success]: (state, action) => ({
    ...state,
    isLoading: false,
    weather: action.payload.weather,
    receivedAt: action.payload.receivedAt
  }),
};

export default handleActions(initialActions, initialState);


//OLD

// const initialState = {
//   isLoading: true,
//   weather: {},
//   receivedAt: ''
// }

// export default function weatherData(state = initialState, action) {
//   switch (action.type) {
//     case REQUEST_WEATHER:
//       return { ...state, 
//         isFetching: true 
//       }

//     case RECEIVE_WEATHER:
//       return { ...state,
//         isLoading: false,
//         weather: action.payload.weather,
//         receivedAt: action.payload.receivedAt
//       }
//     default:
//       return state
//   }
// }
