import { handleActions } from 'redux-actions';

import * as actions from '../actions';

export const initialState = {
  name: '',
  busStop: '',
  inductionCompleted: false
};

const initialActions = {
  [actions.addName]: (state, action) => ({
    ...state,
    name: action.payload 
  }),

  [actions.addBusStop]: (state, action) => ({
    ...state,
    busStop: action.payload    
  }),

  [actions.finishInduction]: (state, action) => ({
    ...state,
    inductionCompleted: true
  }),
};

export default handleActions(initialActions, initialState);

//old

// const initialState = {
//   name: '',
//   busStop: '',
//   inductionCompleted: false
// }

// export default function induction(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NAME:
//       return { ...state, 
//         name: action.payload 
//       }

//     case ADD_BUSSTOP:
//       return { ...state,
//         busStop: action.payload,
//       }

//     case FINISH_INDUCTION:
//       return { ...state,
//         inductionCompleted: true
//       }

//     default:
//       return state
//   }
// }
