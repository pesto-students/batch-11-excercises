import React, { Component } from 'react';

class MovieList extends Component {
  state = {
    movieList: ['The Godfather', 'Avenger', 'The Dark Knight'],
  };
  render() {
    const listToJSX = this.state.movieList.map((i) => {
      return <li id={i}>{i}</li>;
    });
    return <ul className='movie-list'>{listToJSX}</ul>;
  }
}

export default MovieList;
