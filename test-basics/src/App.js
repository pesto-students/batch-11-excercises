/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';

import './styles/App.css';

class App extends Component {
  constructors() {
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
      isButtonClicked: false,
      title: '',
    };
  }
  handleButtonClick = () => {
    this.setState((previousState) => {
      return { isButtonClicked: !previousState.isButtonClicked };
    });
  }
  handleInputChange = (event) => {
    this.setState({ title: event.currentTarget.value });
  }
  handleStrings = (argument) => {
    const checkIfString = () => {
      return typeof argument === 'string';
    };
    const checkIfEmptyString = () => {
      return argument.length === 0;
    };
    return checkIfString(argument) && !checkIfEmptyString(argument);
  }
  render() {
    const {
      mainColor, isButtonClicked, text, title,
    } = this.state;
    return (
      <div className={mainColor}>
        <h1 className="App">Welcome to React</h1>
        <h2>{title}</h2>
        <p className="button-state">
          {isButtonClicked ? 'Yes!' : 'No!'}
        </p>
        <input type="text" onChange={this.handleInputChange} placeholder="Write new title" value={text} />
        <button type="button" onClick={this.handleButtonClick}> Click to Change State </button>
      </div>
    );
  }
}
export default App;
