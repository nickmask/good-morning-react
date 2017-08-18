import { createReduxAction } from '../helpers/actionCreators';

const NAME = 'INDUCTION';
const reduxAction = createReduxAction(NAME);

export const addName = reduxAction('ADD_NAME')
export const addBusStop = reduxAction('ADD_BUS_STOP')
export const finishInduction = reduxAction('FINISH')

// export function addName(payload) {
//   return {
//     type: ADD_NAME,
//     payload
//   }
// }

// export function addBusStop(payload) {
//   return {
//     type: ADD_BUSSTOP,
//     payload
//   }
// }

// export function finishInduction() {
//   return {
//     type: FINISH_INDUCTION,
//   }
// }
