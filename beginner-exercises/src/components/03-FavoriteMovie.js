import React, { Component } from 'react';

/*
You can pass props to components using JSX attributes.

You have two tasks to complete in this exercise:
Task #1: Someone left broken code in the `onMovieChange` method. It is always triggered
  after changing the value of `movie` input. This method takes
  event as its only argument. You need to retrieve the input value from
  that object and update the `movie` field in the `state` object.
Warning: Do not try to change the `render` structure.

Task #2: If there is no movie given, we should display a message encouraging
  the user to insert their favorite movie.
  Display text: "Hey there. Enter your favorite movie." if movie.length is 0.

Further reading on task #2: https://facebook.github.io/react/tips/if-else-in-JSX.html
*/

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange = (event) => {
    this.setState({ movie: event.target.value });
  }

  render() {
    return (
      <div>
        {this.state.movie.length === 0 ?
          <p>Hey there. Enter your favorite movie.</p> :
          <p>My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span></p>
        }

        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}
export default FavoriteMovie;
