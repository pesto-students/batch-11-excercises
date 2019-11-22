import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    btnText: 'No!',
    mainColor: 'blue',
  };
  handleStrings(text) {
    return Boolean(text);
  }
  render() {
    const { mainColor, btnText, input } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <button className="button-state" onClick={() => this.setState({ btnText: 'Yes!' })}>{btnText}</button>
        <h2>{input}</h2>
        <input type="text" value={input} onChange={() => this.setState({ input: 'Pesto' })} />
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
