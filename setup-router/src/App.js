import React, { Component, Fragment } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
