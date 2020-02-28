import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      laughs: 0,
      huffs: 0,

    };
  }
  render() {
    return (
      <div>
        <h1> Am I being clear? Count: {this.state.counter}</h1>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })} > Yes, he said it </button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}> Decrement, I messed up </button>
        <button
          onClick={() => this.setState({ counter: 0 })}
        >Clear count</button>
      <h1> *Laughs* Count: {this.state.laughs}</h1>
      <button onClick={() => this.setState({ laughs: this.state.laughs+ 1 })} > Hehehehe
      </button>
      <button
          onClick={() => this.setState({ laughs: this.state.laughs- 1 })}> Decrement, I messed up
      </button>
      <button onClick={() => this.setState({ laughs: 0})}>
          Don't clear me or you go to hell
      </button>
      <h1> *Huff* Count: {this.state.huffs}</h1>
      <button
          onClick={() => this.setState({ huffs: this.state.huffs+ 1 })}
        > HUFF
      </button>
      <button onClick={() => this.setState({ huffs: this.state.huffs- 1 })} >
          Decrement, I messed up
      </button>
      <button onClick={() => this.setState({ huffs: 0})}>
          Play with the code, use this to clear
      </button>
      </div>
    );
  }
}

export default App;
