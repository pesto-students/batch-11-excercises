import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }
  onInputChange = event => this.setState({ input: event.target.value });

  handleStrings = string => string !== '';
  render() {
    const { on, input, mainColor } = this.state;
    return (
      <div className={mainColor}>
        <h1>Welcome to React</h1>
        <button onClick={() => this.setState({ on: true })}>Change state</button>
        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
        <input type="text" onChange={event => this.onInputChange(event)} />
        <h2>{input}</h2>
      </div>
    );
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { hide, address } = this.props;
    if (hide) {
      return null;
    }
    return <a href={address}></a>;
  }
}

export default App;
