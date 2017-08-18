import { combineReducers } from 'redux'
import timetable from './timetable.reducers'
import weather from './weather.reducers'
import induction from './induction.reducers'

const rootReducer = combineReducers({
  timetable,
  weather,
  induction
})

export default rootReducer
