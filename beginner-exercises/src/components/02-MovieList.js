import React, { Component } from "react";

class MovieList extends Component {
  render() {
    return (
      <ul className="movies-list">
        <li>The Godfather</li>
        <li>Avenger: Endgame</li>
        <li>Jack Ryan</li>
        <li>KGF</li>
        <li>Naruto</li>
      </ul>
    );
  }
}

export default MovieList;
