// eslint-disable-next-line import/no-unresolved
import React, { Component } from 'react';

class FavoriteMovie extends Component {
/*
  By default `this.state` is `null`. In `render` we are referring to
  a specific element from the `state` object - `this.state.movie`.
  If we don't set an initial state, we will get an error. It's impossible to fetch
  an object key from `null`. (null.movie!!! => Error)

  Think about it: you can set movie from a cookie on component initialization!
  What else could you do here?
*/

  constructor(props) {
    // Properties object is called `props`. You can access it with `this.props`.
    super(props);
    this.state = { movie: '' };

    // Warning! If we don't bind this method - we would not be able to update state.
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    // Huh... There's something wrong here...
    this.setState({ movie: event.target.value });
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <p>
          My favorite movie is
          {' '}
          <span style={{ color: 'blue' }}>{ movie }</span>
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

// Notice some details here:
//   1. `onChange` attribute isn't placed between `" "`, but `{ }` - we want to
//      reference function, not string.
//   2. You must be very careful on methods binding. You can do it in the constructor.
//   3. `state` object is `null` by default! If you want to display initial
//       value from state object, you should initialize state object.

// ProTip: Always specify input's `name` attribute: React uses it to identify
//         inputs on page. Not doing so may cause you to waste a long time
//         debugging your program.

export default FavoriteMovie;
