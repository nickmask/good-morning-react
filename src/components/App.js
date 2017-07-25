import React, { Component } from 'react';
import Greeting from './Greeting'
import Time from './Time'
import Weather from './Weather'
import BusInfo from './BusInfo'
import Calendar from './Calendar'
import Quotes from './Quotes'

import '../styles/App.css';

class App extends Component {

  state = {
    lastUpdatedBus: '',
    lastUpdatedTime: ''
  }

  lastUpdatedBus = (time) => {
    this.setState({lastUpdatedBus: time})
  }

  lastUpdatedTime = (time) => {
    this.setState({lastUpdatedTime: time})
  }

  render() {
    return (
      <div className='App'>
        <div className='top'>
          <Time lastUpdated={this.lastUpdatedTime} />
          <Weather />
        </div>
        <div className='center'>
          <Greeting />
        </div>
        <div className='bottom'>
          <BusInfo lastUpdated={this.lastUpdatedBus} />
        </div>
          <i className='diagnostic'>Bus updated: {this.state.lastUpdatedBus} | Time updated: {this.state.lastUpdatedTime}</i>
      </div>
    );
  }
}

export default App;
