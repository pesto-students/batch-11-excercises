import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
