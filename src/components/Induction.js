import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addName, addBusStop, finishInduction } from '../actions'

class Induction extends Component {
  state = {
    nameComplete: false
  }

  handleNameChange = (event) => {
    this.props.addName(event.target.value);
  }

  handleBusStopChange = (event) => {
    this.props.addBusStop(event.target.value);
  }

  handleEnter = (event) => {
    if(event.key === 'Enter' && this.state.nameComplete) {
      this.props.finishInduction()
    } else if (event.key === 'Enter') {
      this.setState({nameComplete: true})
    }
  }

  render() {
    return (
      <div>
          {!this.state.nameComplete ?
          <div>
            My name is <input
            type="text"
            value={this.props.name}
            onChange={this.handleNameChange}
            onKeyPress={this.handleEnter}
            />         
          </div>
          :
          <div>
          My bus stop is <input
            type="text"
            value={this.props.stopNumber}
            onChange={this.handleBusStopChange} 
            onKeyPress={this.handleEnter}
          />
        </div>
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.induction.name,
    stopNumber: state.induction.busStop,

  }
}

const mapDispatchToProps = dispatch => {
  return {
      addName: (name) => {
          dispatch(addName(name))            
      },
      addBusStop: (stopNumber) => {
        dispatch(addBusStop(stopNumber))
      },
      finishInduction: () => {
        dispatch(finishInduction())
      }
  }
}

const InductionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Induction)

export default InductionContainer;
