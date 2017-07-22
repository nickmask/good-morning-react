import React, { Component } from 'react';
import Greeting from './Greeting'
import Time from './Time'
import Weather from './Weather'
import BusInfo from './BusInfo'
import Calendar from './Calendar'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='top'>
          <Weather />
          <Time />
        </div>
        <div className='center'>
          <Greeting />
        </div>
        <div className='bottom'>
          <BusInfo />
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
