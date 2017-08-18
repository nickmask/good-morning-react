import React, { Component } from 'react';
import { connect } from 'react-redux';

import Greeting from './Greeting'
import Time from './Time'
import Weather from './Weather'
import BusInfo from './BusInfo'
import Quotes from './Quotes'
import Induction from './Induction'
import Perf from 'react-addons-perf';


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

  // componentDidMount() {
  //   setImmediate(() => {
  //     Perf.start();
  //   });
  //   setTimeout(() => {
  //     Perf.stop();
  //     Perf.printWasted();
  //   }, 5000);
  // }

  render() {
    return (
      <div className='App'>
        <div className='top'>
          <Time lastUpdated={this.lastUpdatedTime} />
          <Weather />
        </div>
        {this.props.inductionComplete ?
          <div>
          <div className='center'>
            <Greeting />
          </div>
          <div className='bottom'>
            <BusInfo lastUpdated={this.lastUpdatedBus} />
          </div>
        </div>
        :
        <div className='center'>
          <Induction />
        </div>
        }
        <i className='diagnostic'>Bus updated: {this.props.receivedAt} | Time updated: {this.state.lastUpdatedTime}</i>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inductionComplete: state.induction.inductionCompleted,
    busLastUpdated: state.timetable.isLoading
  }
}

const AppContainer = connect(
  mapStateToProps,
)(App)

export default AppContainer;
