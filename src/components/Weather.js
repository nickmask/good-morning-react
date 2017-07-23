import React, { Component } from 'react';
import Forecast from 'react-forecast';

import '../styles/Weather.css';

class Weather extends Component {
  render() {
    return (
        <div className='weather'>
            <Forecast latitude={-41.2888} longitude={174.7772} name='Wellington' units='CA' font='Helvetica Neue' color='#ffffff' />
        </div>
    );
  }
}

export default Weather;