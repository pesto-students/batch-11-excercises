import React, { Component } from 'react';


import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const {colors} = this.state;
    const colorListComponent = () => (
      <ColorList colors={colors} />
    );
   const newColorComponent = (props) => {
    return <NewColor addColor={this.handleAdd} history={props.history} />;
   }
    const colorComponent = (props) => {
      const color = colors.filter(color => color.name === props.match.params.id, {});
      return <Color color = {
        color[0]
      }
      />;
    }

    return (
      <Router>
      <Switch>
          <Route exact path='/colors' component={colorListComponent} />
          <Route path='/colors/new' component={newColorComponent} />
          <Route path='/colors/:id' component={colorComponent} />
          <Redirect from="/" to='/colors' />
  
      </Switch>
      </Router>
    );
  }
}

export default App;
