import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions'
import '../styles/Greeting.css';

class Greeting extends Component {

  state = {
    tess: ["Sup guurl, you lookin' fine", "Oh hey, Tess", "Hello Tess!", "Sup dyke"],
    nick: [],
    other: [],
  }

  handleChange = (event) => {
    // this.props.addName(event.target.value);
  }

  render() {
    return (
      <div className='greeting'>
        <div className='mainGreeting'>
          Good morning {this.props.name}!
        </div>
        <div className='subGreeting'>
          It's going 25 km/h today, jacket up!
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.induction.name
  }
}

const GreetingContainer = connect(
  mapStateToProps,
)(Greeting)


export default GreetingContainer;
