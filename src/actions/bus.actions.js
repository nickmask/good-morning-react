import { createSignalAction } from '../helpers/actionCreators';

const NAME = 'TIMETABLE';
const signalAction = createSignalAction(NAME);

export const fetchTimetable = signalAction('FETCH')
