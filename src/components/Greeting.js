import React, { Component } from 'react';
import '../styles/Greeting.css';

class Greeting extends Component {

  state = {
    tess: ["Sup guurl, you lookin' fine", "Oh hey, Tess", "Hello Tess!", "Sup dyke"],
    nick: [],
    other: []
  }
  render() {
    return (
      <div className='greeting'>
        <div className='mainGreeting'>
          Good morning, Tess!
        </div>
        <div className='subGreeting'>
          It's going 25 km/h today, jacket up!
        </div>
      </div>
    );
  }
}

export default Greeting;
