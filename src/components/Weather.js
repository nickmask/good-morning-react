import React, { Component } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import '../styles/Weather.css';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 50,
  animate: true
};

class Weather extends Component {
  render() {
    return (
        <div className='weather'>
            <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
            />
        </div>
    );
  }
}

export default Weather;