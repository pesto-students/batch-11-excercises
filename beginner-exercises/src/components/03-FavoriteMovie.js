import React, { Component } from 'react';
class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
  }

  onMovieChange = (event) => {
    this.setState({ movie: event.target.value });
  };

  render() {
    let message = (
      <p>
        My favorite movie is{' '}
        <span style={{ color: 'blue' }}>{this.state.movie}</span>
      </p>
    );
    if (this.state.movie.length === 0) {
      message = <p>Hey there. Enter your favorite movie.</p>;
    }
    return (
      <div>
        {message}
        <input type='text' name='name' onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
