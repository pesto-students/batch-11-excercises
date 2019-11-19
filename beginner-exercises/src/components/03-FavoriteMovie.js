import React, { Component } from "react";

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "" };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  onMovieChange(event) {
    this.setState({ movie: event.target.value });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.movie.length === 0 ? (
            <h3 style={{ color: "red" }}>
              Hey there. Enter your favorite movie.
            </h3>
          ) : (
            <div>
              <span>My favorite movie is </span>
              <span style={{ color: "blue" }}>{this.state.movie}</span>
            </div>
          )}
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
