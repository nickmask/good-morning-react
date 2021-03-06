import { delay } from 'redux-saga';
import { put, takeLatest, all, call, fork } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import data from '../busData.json'

import * as actions from '../actions'

export function fetchBusTimetable(action) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://www.metlink.org.nz/api/v1/StopDepartures/${action.payload}`)
    .then(response => response.json() )
}

export function fetchWeather() {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/664e5ccc894fb00d19e881ce36b9b30b/-41.2888,174.7772?units=ca`)
    .then(response => response.json() )
}

export function* getBusTimetableSaga(busStop) {
  const timetable = yield call(fetchBusTimetable, busStop)
  const services = []
  for (var i = 0; i < 5; i++) {
    services[i] = timetable.Services[i]
  }
  yield put(actions.fetchTimetable.success({timetable: services, receivedAt: Date.now()}))
}

export function* getWeatherSaga() {
  const weather = yield call(fetchWeather)
  yield put(actions.fetchWeather.success({weather: weather, receivedAt: Date.now()}))
}

export default function* root() {
  yield takeLatest(actions.fetchTimetable.request,
    getBusTimetableSaga,
  )
  
  yield takeLatest(actions.fetchWeather.request, 
    getWeatherSaga
  )
}
