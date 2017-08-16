export const REQUEST_TIMETABLE = 'REQUEST_TIMETABLE'
export const RECEIVE_TIMETABLE = 'RECEIVE_TIMETABLE'
export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'
export const ADD_NAME = 'ADD_NAME'
export const ADD_BUSSTOP = 'ADD_BUSSTOP'
export const FINISH_INDUCTION = 'FINISH_INDUCTION'

export function requestTimetable(busStop) {
  return {
    type: REQUEST_TIMETABLE,
    busStop
  }
}

export function receiveTimetable(payload) {
  return {
    type: RECEIVE_TIMETABLE,
    payload
  }
}

export function requestWeather() {
  return {
    type: REQUEST_WEATHER
  }
}

export function receiveWeather(payload) {
  return {
    type: RECEIVE_WEATHER,
    payload
  }
}

export function addName(payload) {
  return {
    type: ADD_NAME,
    payload
  }
}

export function addBusStop(payload) {
  return {
    type: ADD_BUSSTOP,
    payload
  }
}

export function finishInduction() {
  return {
    type: FINISH_INDUCTION,
  }
}
