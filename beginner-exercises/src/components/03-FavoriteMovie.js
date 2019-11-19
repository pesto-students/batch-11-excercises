import React, { Component } from 'react';

class FavoriteMovie extends Component {

  constructor(props) {
    super(props);
    this.state = { movie: '' };
  }
  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    let header = <p>My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span></p>
    if (this.state.movie.length < 1) {
      header =  <p>Enter your favorite movie name</p>
    }
    return (
      <div>
        {header}
        <input type="text" name="name" onChange={this.onMovieChange.bind(this)} />
      </div>
    );
  }
}


export default FavoriteMovie;
