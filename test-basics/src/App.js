import React, { Component, Fragment } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    buttonState: false,
  }

  handleClick = () => {
    let { buttonState } = this.state;
    if (buttonState) {
      buttonState = !buttonState;
      this.setState({ buttonState });
    } else {
      buttonState = !buttonState;
      this.setState({ buttonState });
    }
  }
  handleInput = () => {
    this.setState({ input: 'Pesto' });
  }
  handleStrings = (args) => {
    return args === 'Hello World';
  }
  render() {
    return (
      <Fragment>
        <h1 className="App" >
          Welcome to React
        </h1>
        <p className={this.state.mainColor}>Out of order</p>
        <h2>{this.state.input}</h2>
        <input onChange={this.handleInput} />
        <button onClick={this.handleClick} className="button-state">
          {this.state.buttonState ? 'Yes!' : 'No!'}
        </button>
        <Link address="www.google.com" />
      </Fragment>
    );
  }
}

export class Link extends Component {
  render() {
    if (!this.props.hide) {
      return <a href={this.props.address}>Link</a>;
    }
    return null;
  }
}

export default App;
