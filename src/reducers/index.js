import { combineReducers } from 'redux'
import busDetails from './getBusData'
import weatherData from './getWeather'
import induction from './induction'

const goodMorningApp = combineReducers({
  busDetails,
  weatherData,
  induction
})

export default goodMorningApp
