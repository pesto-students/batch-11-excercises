import React, { Component } from 'react';
import '../App.css'



class MovieList extends Component {
  
  render() {
    const moviesList = ['The Godfather', 'Fight Club', 'Interstellar'];
    return (
      <ul className="movie-list">
        {moviesList.map((movie, index) => {
         return <li key={index}>{movie}</li>;
        })}
        
      </ul>
    );
  }
}

export default MovieList;
