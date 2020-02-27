import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display"> Am I being creeaaaar?? Counter is at: {this.state.counter}</h1>
      <button
        data-test="increment-button"
        onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
        Decrement counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => this.setState({ counter: 0 })}
        >
        Creaaar
      </button>
      </div>
    );
  }
}

export default App;
