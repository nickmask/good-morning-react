import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'

import { requestTimetable } from '../actions'

import '../styles/BusInfo.css'

class BusInfo extends Component {
    componentDidMount = () => {
        setInterval(this.props.getBusDetails(this.props.busStop), 20000)
    }

    formateTime = (timeUntillDeparture) => {
        const rawMinutes = timeUntillDeparture / 60
        if (rawMinutes < 1) {
            return `${timeUntillDeparture} secs`
        } else if(Math.round(rawMinutes) < 2) {
            return `${Math.round(rawMinutes)} min`
        } else if(Math.round(rawMinutes) < 59) {
            return `${Math.round(rawMinutes)} mins`
        } else if(Math.round(rawMinutes / 60) === 1) {
            return `${Math.round(rawMinutes / 60)} hour`
        } else if(Math.round(rawMinutes) > 60) {
            return `${Math.round(rawMinutes / 60)} hours`
        }
    }

  render() {
    return (
        <div>
            <div className='busGreeting'>
                Here's the buses that on their way
            </div>
            {this.props.isLoading
            ?
            null
            :
            <table>
                <tbody>
                <tr>
                    <th>Bus</th>
                    <th>Due</th> 
                </tr>
                {this.props.busDetails.timetable.map((service, i) => (
                <tr key={i}>
                    <td className='bus'>{service.ServiceID}</td>
                    <td className='due'>{this.formateTime(service.DisplayDepartureSeconds)}</td>
                </tr>
                ))}
                </tbody>
            </table>
            }
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      busDetails: state.busDetails,
      busStop: state.induction.busStop,
      isLoading: state.busDetails.isLoading
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        getBusDetails: (busStop) => {
            dispatch(requestTimetable(busStop))            
        }
    }
}

const BusInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BusInfo)

export default BusInfoContainer;
