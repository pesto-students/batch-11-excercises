import React, { Component } from "react";

class MovieList extends Component {
  render() {
    return (
      <ul className="movies-list">
        <li>The Godfather</li>
        <li>The A-Team</li>
        <li>The Expendables</li>
      </ul>
    );
  }
}

export default MovieList;
