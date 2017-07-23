import React, { Component } from 'react';
import moment from 'moment';

import '../styles/Time.css';

class Time extends Component {
    state = {
        time: moment().format('h:mm:ss a'),
        date: moment().format('dddd, Do MMMM')
    }
    getTime = () => {
        let time = moment().format('h:mm')
        let date = moment().format('dddd D MMMM')
        this.setState({
            time,
            date
        })
    }

    render() {
        setInterval(this.getTime, 1000)

        return (
            <div className='time'>
                <div className='clock'>
                    {this.state.time}
                </div>
                <div className='date'>
                    {this.state.date}
                </div>
            </div>
        );
    }
}

export default Time;
