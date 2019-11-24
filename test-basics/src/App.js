import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  };
  handleStrings(text) {
    return Boolean(text);
  }
  render() {
    const { mainColor, on, input } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <button onClick={() => this.setState({ on: true })}>Click Me</button>
        <p className="button-state">{on ? 'Yes!' : 'No!'}</p> 
        <h2>{input}</h2>
        <input type="text" onChange={() => this.setState({ input: 'Pesto' })} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    if (!hide) {
      return <a href={address}> Link </a>;
    }
    return null;
  }
}

export default App;
