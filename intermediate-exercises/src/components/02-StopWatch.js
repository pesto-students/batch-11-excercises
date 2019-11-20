import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = { isTimerRunning: false, time: 0, currentIntervalObj: undefined };
  }

  startTimer = () => {
    this.setState({ isTimerRunning: true });
    let currentIntervalObj = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1);
    this.setState({currentIntervalObj})
  }

  stopTimer = () => {
    this.setState({ isTimerRunning: false })
    if (this.state.currentIntervalObj !== undefined) {
      clearInterval(this.state.currentIntervalObj);
    }
  }

  clearTimer = () => {
    this.stopTimer();
    this.setState({ time: 0 });
  }

  render() {
    const getButton = () => {
      if (this.state.isTimerRunning) {
        return (<button onClick={this.stopTimer}>Stop</button>);
      }
      return (<button onClick={this.startTimer}>Start</button>);
    };
    return (
      <div>
        <p>Stop Watch</p>
        <p>{this.state.time} ms</p>
        {getButton()}
        <button onClick={() => this.clearTimer()}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
