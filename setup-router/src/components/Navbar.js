import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="active">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    );
  }
}
