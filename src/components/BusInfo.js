import React, { Component } from 'react';

import '../styles/BusInfo.css'

class BusInfo extends Component {
    state = {
        busInfoAvaliable: false,
        services: []
    }

    componentDidMount = () => {
        this.getBusInfo()
    }
    getBusInfo = async () => {
        const busData = await (await fetch('https://crossorigin.me/https://www.metlink.org.nz/api/v1/StopDepartures/7021')).json()
        const services = []
        for (var i = 0; i < 5; i++) {
            services[i] = busData.Services[i]
        }
        this.setState({
            services,
            busInfoAvaliable: true
        })
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
      setInterval(this.getBusInfo, 20000)
    return (
        <div>
            <div className='busGreeting'>
                Here's the buses that on their way
            </div>
            {this.state.busInfoAvaliable 
            ?
            <table>
                <tbody>
                <tr>
                    <th>Bus</th>
                    <th>Due</th> 
                </tr>
                {this.state.services.map((service, i) => (
                <tr key={i}>
                    <td className='bus'>{service.ServiceID}</td>
                    <td className='due'>{this.formateTime(service.DisplayDepartureSeconds)}</td>
                </tr>
                ))}
                </tbody>
            </table>
            :
            <div>Loading</div>
            }
        </div>
    );
  }
}

export default BusInfo;



// const fetchAsyncA = async () => 
// 	await (await fetch('https://api.github.com')).json()