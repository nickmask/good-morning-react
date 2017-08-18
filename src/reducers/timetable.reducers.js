import { handleActions } from 'redux-actions';

import * as actions from '../actions';

export const initialState = {
  timetable: {},
  isLoading: true,
  receivedAt: null,
};

const initialActions = {
  [actions.fetchTimetable.request]: (state, action) => ({
    ...state,
    isLoading: true,
  }),

  [actions.fetchTimetable.success]: (state, action) => ({
    ...state,
    isLoading: false,
    timetable: action.payload.timetable,
    receivedAt: action.payload.receivedAt,
  }),
};

export default handleActions(initialActions, initialState);

//OLD

// const initialState = {
//   timetable: {},
//   isLoading: true,
//   receivedAt: null,
// }

// export default function busDetails(state = initialState, action) {
//   switch (action.type) {
//     case REQUEST_TIMETABLE:
//       return { ...state, 
//         isLoading: true 
//       }

//     case RECEIVE_TIMETABLE:
//       return { ...state,
//         isLoading: false,
//         timetable: action.payload.timetable,
//         receivedAt: action.payload.receivedAt
//       }
//     default:
//       return state
//   }
// }
