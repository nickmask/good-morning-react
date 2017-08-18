import { createSignalAction } from '../helpers/actionCreators';

const NAME = 'WEATHER';
const signalAction = createSignalAction(NAME);

export const fetchWeather = signalAction('FETCH')
