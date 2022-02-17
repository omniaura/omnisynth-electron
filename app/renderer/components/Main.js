import React, { Component } from 'react';
import { compilePatches } from '../../services/oscInterface';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    }
  }

  incrementCounter = (e) => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h2>Welcome to OmniSynth!</h2>
        <p>{this.state.counter}</p>
        <button onClick={compilePatches}>Compile Patches</button>
      </div>
    );
  }
}