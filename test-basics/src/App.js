/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }

  // eslint-disable-next-line class-methods-use-this
  handleStrings(string) {
    return Boolean(string);
  }

  render() {
    const { mainColor, input } = this.state;
    const { on } = this.state;
    return (
      <div className="App">
        Welcome to React
        <h1>Welcome to React</h1>
        <div
          className={mainColor}
        />
        <button
          type="button"
          className="button-state"
          onClick={() => {
            this.setState({ on: !on });
          }}
        >
          {on ? 'Yes!' : 'No!'}
        </button>

        <label htmlFor="testInput">
          Input for tests
          <input
            onChange={({ currentTarget: { value } }) => {
              this.setState({ input: value });
            }}
            id="testInput"
          />
        </label>

        <h2>
          {input}
        </h2>

      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { address, hide } = this.props;
    return !hide ? <a href={address}>Go to pesto</a> : null;
  }
}

Link.defaultProps = {
  hide: false,
  address: 'Pesto',
};

Link.propTypes = {
  address: PropTypes.string,
  hide: PropTypes.bool,
};

export default App;
