import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import '../styles/Calendar.css'

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

    state = {
        myEventsList: []
    }
  render() {
    return (
      <div className='calendar'>
        <BigCalendar
            events={this.state.myEventsList}
            startAccessor='startDate'
            endAccessor='endDate'
            defaultView='agenda'
        />      
    </div>
    );
  }
}

export default Calendar;
