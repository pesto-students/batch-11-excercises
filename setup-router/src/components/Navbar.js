import React, { Component } from "react";
import "../styles/App.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}
