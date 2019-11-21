import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotfound'

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <Navbar />
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path="*">
            <PageNotFound />
          </Route>
          </Switch>
      </Fragment>
      </Router>
    );
  }
}

export default App;
