import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    buttonText: 'No!',
  }
  handleClick = () => {
    this.setState({ buttonText: "Yes!" });
  }
  onInput = ({ currentTarget: { value } }) => {
    this.setState({ input: value });
  }
  handleStrings = (string) => {
    if (typeof string === 'string' && string.length > 0) {
      return true;
    }
    return false;
  }

  render() {
    const { mainColor, buttonText, input } = this.state;
    return (
      <div>
        <h1 className={mainColor}>
          Welcome to React
        </h1>
        <p className="button-state">{buttonText}</p>
        <button onClick={this.handleClick}>Clicked!</button>
        <h2>{input}</h2>
        <label htmlFor="test">Type some text:</label>
        <input type="text" id="test" onChange={this.onInput} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { address, hide } = this.props;

    if (hide) {
      return null;
    }
    return <a href={address}>{address}</a>
  }
}

export default App;
