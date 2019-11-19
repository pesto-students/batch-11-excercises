/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-unresolved
import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this._updateComponent = this._updateComponent.bind(this);
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).
  componentDidMount() {
    console.log('I\'m mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    // Task 3: Display a message "Good night, Pesto!" in developer's
    //         console when the component unmounts.
    console.log('Good night, Pesto!');
  }

  _updateComponent() {
    const { name } = this.state;
    this.setState({ name: `${name} - Reloaded` });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <p>
          Good morning,
          {name}
          !
        </p>
        <button type="button" onClick={this._updateComponent}>Update component</button>
      </div>
    );
  }
}

export default LifeCycle;
