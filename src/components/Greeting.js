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
          Hello Tess!
      </div>
    );
  }
}

export default Greeting;
